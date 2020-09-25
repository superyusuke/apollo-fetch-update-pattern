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

export const UpdateUserProfileButton = () => {
  const { state, refetch } = useContextHook();

  const [mutation] = useUpdateUserProfileMutation({
    variables: {
      userId: 1,
      newProfile: state.userProfile,
    },
  });

  const clickHandler = async () => {
    await mutation();
    await refetch();
    alert("update 完了");
  };

  return <button onClick={clickHandler}>userProfile を update する</button>;
};
