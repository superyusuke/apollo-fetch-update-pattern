import React from "react";

import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createLink } from "src/ApolloWrapper/createLink";

const createApolloClient = () => {
  return new ApolloClient({
    link: createLink(),
    cache: new InMemoryCache(),
  });
};

export const ApolloWrapper: React.FC = ({ children }) => {

  const client = createApolloClient();

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
