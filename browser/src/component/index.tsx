import React from "react";

import { useUserInfoQuery } from "src/generated/graphql";
import gql from "graphql-tag";

gql`
  query userInfo {
    user_by_pk(id: 1) {
      id
      profile
    }
  }
`;

export const Index = () => {
  const { data, loading } = useUserInfoQuery();

  if(loading) {
    return  <div>Loading</div>
  }

  if(!data) {
    return <div>No Data, Error</div>
  }

  if(!data.user_by_pk) {
    return <div>no user matched</div>
  }

  const profileToShow = data.user_by_pk.profile

  return <div>{profileToShow}</div>;
};
