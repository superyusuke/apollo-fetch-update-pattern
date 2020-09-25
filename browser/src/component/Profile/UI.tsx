import React from "react";

import { useUserInfoQuery } from "src/generated/graphql";
import gql from "graphql-tag";

gql`
  query userInfo($userId: Int!) {
    user_by_pk(id: $userId) {
      id
      profile
    }
  }
`;

export const ProfileUI = () => {
  // 特定の UserId の user の情報を取得する
  const userId = 1;
  const { data, loading } = useUserInfoQuery({
    variables: {
      userId,
    },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (!data) {
    return <div>No Data, Error</div>;
  }

  if (!data.user_by_pk) {
    return <div>no user matched</div>;
  }

  const profileToShow = data.user_by_pk.profile;

  return <div>{profileToShow}</div>;
};
