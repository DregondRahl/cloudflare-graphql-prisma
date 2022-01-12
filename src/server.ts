import { PrismaSelect } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";

import { createContext, Context } from "./context";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import useWebsocket from "./websocket";
import graphiql from "./graphiql";

let schema = makeExecutableSchema({ typeDefs, resolvers });
const middleware = async (resolve, root, args, context: Context, info: GraphQLResolveInfo) => {
  const result = new PrismaSelect(info).value;
  if (!result.select || Object.keys(result.select).length > 0) {
    args = {
      ...args,
      ...result,
    };
  }
  return resolve(root, args, context, info);
};

schema = applyMiddleware(schema, middleware);

const handleRequest = async (request: Request) => {
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/":
      return graphiql();
    case "/graphql":
      const upgradeHeader = request.headers.get("Upgrade");

      if (!upgradeHeader || upgradeHeader !== "websocket") {
        return new Response("Expected Upgrade: websocket", { status: 426 });
      }

      const webSocketPair = new WebSocketPair();
      const [client, server] = Object.values(webSocketPair);

      // the server socket object does not have the protocol prop, extract it from the header
      const subprotocol = request.headers.get("Sec-WebSocket-Protocol");

      // use graphql-ws with cloudflare websocket
      useWebsocket(schema, createContext, server, request, subprotocol);

      return new Response(null, {
        status: 101,
        webSocket: client,
        headers: {
          "Sec-WebSocket-Protocol": `${subprotocol}`,
        },
      });

    default:
      return new Response("Not found", { status: 404 });
  }
};

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
