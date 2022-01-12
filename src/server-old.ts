import { PrismaSelect, generateGraphQlSDLFile } from "@paljs/plugins";
import { graphqlCloudflare } from "apollo-server-cloudflare/dist/cloudflareApollo";
import { ApolloServer } from "apollo-server-cloudflare";
import { Request as ApolloRequest, Response } from "apollo-server-env";
import { GraphQLResolveInfo } from "graphql";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { createContext, Context } from "./context";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import playground from "./playground";
import graphiql from "./graphiql";
import cors from "./cors";


let schema = makeExecutableSchema({ typeDefs, resolvers });

// Build one sdl file have all types you can delete if you not need
// generateGraphQlSDLFile(schema);

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

export interface GraphQLConfig {
  baseEndpoint: string;
  playgroundEndpoint: string;
  cors: Object;
}

const graphQLOptions: GraphQLConfig = {
  baseEndpoint: "/graphql",
  playgroundEndpoint: "/",
  cors: {
    allowCredentials: "true",
    allowHeaders: "application/json, Content-type",
    allowOrigin: "*",
    allowMethods: "GET, POST, PUT, OPTIONS",
  },
};

const createServer = (graphQLOptions: GraphQLConfig): ApolloServer =>
  new ApolloServer({
    schema,
    context: createContext,
    allowBatchedHttpRequests: true,
    introspection: true,
  });

const apollo = async (request: Request, graphQLOptions: GraphQLConfig): Promise<Response> => {
  const server = createServer(graphQLOptions);
  await server.start();
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request as ApolloRequest))(
    request as ApolloRequest
  );
};

const handleRequest = async (request: Request): Promise<Response> => {
  const url = new URL(request.url);
  switch (url.pathname) {
    case "/":
      // return playground(request, graphQLOptions);
      return graphiql()
    case "/graphql":
      const response =
        request.method === "OPTIONS"
          ? new Response(null, { status: 204 })
          : await apollo(request, graphQLOptions);
      if (graphQLOptions.cors) {
        cors(response, graphQLOptions.cors);
      }
      return response as Response;
    default:
      return new Response("Not found", { status: 404 });
  }
};

addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request));
});
