import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://aider.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "gU6MuF7KLai5DYmHamJ1zAOrl16pXBhm72zVc0SBg5HFCEM1ITZADxTkzPW7t200",
  },
});
