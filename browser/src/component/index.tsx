import React from "react";

import { useUseTestQuery } from "src/generated/graphql";
import gql from "graphql-tag";

gql`
  query useTest {
    test {
      id
      name
    }
  }
`;

export const Index = () => {
  const { data } = useUseTestQuery();

  console.log(data);
  return <div>this is index</div>;
};
