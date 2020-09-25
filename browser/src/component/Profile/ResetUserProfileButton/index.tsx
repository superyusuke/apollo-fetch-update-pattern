import React from "react";
import { useContextHook } from "src/component/Profile/Provider";

import gql from "graphql-tag";
import { useUpdateUserProfileMutation } from "src/generated/graphql";

gql`
  mutation updateUserProfile($userId: Int!, $newProfile: String!) {
    update_user_by_pk(
      pk_columns: { id: $userId }
      _set: { profile: $newProfile }
    ) {
      profile
    }
  }
`;

export const ResetUserProfileButton = () => {
  const { setState } = useContextHook();

  const clickHandler = async () => {
    setState({
      type: "resetUserProfile",
    });
  };

  return <button onClick={clickHandler}>update する</button>;
};
