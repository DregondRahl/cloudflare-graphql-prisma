import { PrismaSelect, generateGraphQlSDLFile } from "@paljs/plugins";
import { GraphQLResolveInfo } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createContext, Context } from "./context";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cors from "./cors";
import { makeServer, MessageType, stringifyMessage } from "graphql-ws";

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

// use cloudflare server websocket for graphql-ws
function useWebsocket(schema, context, socket, request, protocol) {
  // configure and make server
  const server = makeServer({ schema, context });

  // accept socket to begin
  // socket.accept();

  // // subprotocol pinger because WS level ping/pongs are not be available
  // let pinger, pongWait;
  // function ping() {
  //   if (socket.readyState === socket.OPEN) {
  //     // send the subprotocol level ping message
  //     socket.send(stringifyMessage({ type: MessageType.Ping }));

  //     // wait for the pong for 6 seconds and then terminate
  //     pongWait = setTimeout(() => {
  //       clearInterval(pinger);
  //       socket.close();
  //     }, 6000);
  //   }
  // }

  // // ping the client on an interval every 12 seconds
  // pinger = setInterval(() => ping(), 12000);

  // // use the server
  // const closed = server.opened(
  //   {
  //     protocol, // will be validated
  //     send: (data) => socket.send(data),
  //     close: (code, reason) => socket.close(code, reason),
  //     onMessage: (cb) =>
  //       socket.addEventListener("message", async (event) => {
  //         try {
  //           // wait for the the operation to complete
  //           // - if init message, waits for connect
  //           // - if query/mutation, waits for result
  //           // - if subscription, waits for complete
  //           await cb(event.data);
  //         } catch (err) {
  //           // all errors that could be thrown during the
  //           // execution of operations will be caught here
  //           socket.close(1011, err.message);
  //         }
  //       }),
  //     // pong received, clear termination timeout
  //     onPong: () => clearTimeout(pongWait),
  //   },
  //   // pass values to the `extra` field in the context
  //   { socket, request }
  // );

  // // notify server that the socket closed and stop the pinger
  // socket.addEventListener("close", (code, reason) => {
  //   clearTimeout(pongWait);
  //   clearInterval(pinger);
  //   closed(code, reason);
  // });
}

async function handleRequest(request: Request) {
  const upgradeHeader = request.headers.get("Upgrade");

  if (!upgradeHeader || upgradeHeader !== "websocket") {
    return new Response("Expected Upgrade: websocket", { status: 426 });
  }

  const webSocketPair = new WebSocketPair();
  const [client, server] = Object.values(webSocketPair);

  // the server socket object does not have the protocol prop, extract it from the header
  const subprotocol = request.headers.get("Sec-WebSocket-Protocol");

  useWebsocket(schema, createContext, server, request, subprotocol);

  return new Response(null, {
    status: 101,
    webSocket: client,
    headers: {
      "Sec-WebSocket-Protocol": `${subprotocol}`,
    },
  });
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
