import React from "react";

import { ApolloWrapper } from "src/ApolloWrapper";

import { Profile } from "src/component/Profile";

export const App = () => {
  return (
    <ApolloWrapper>
      <Profile />
    </ApolloWrapper>
  );
};
