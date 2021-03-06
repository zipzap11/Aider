import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const wsLink = new WebSocketLink({
  uri: "wss://aider.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      headers: {
        "x-hasura-admin-secret":
          "gU6MuF7KLai5DYmHamJ1zAOrl16pXBhm72zVc0SBg5HFCEM1ITZADxTkzPW7t200",
      },
    },
  },
});

const httpLink = new HttpLink({
  uri: "https://aider.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "gU6MuF7KLai5DYmHamJ1zAOrl16pXBhm72zVc0SBg5HFCEM1ITZADxTkzPW7t200",
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});
