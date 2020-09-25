import React from "react";
import { EditUserProfile } from "src/component/Profile/EditUserProfile";
import { UpdateUserProfileButton } from "src/component/Profile/UpdateUserProfileButton";
import { ResetUserProfileButton } from "src/component/Profile/ResetUserProfileButton";

export const ProfileUI = () => {
  return (
    <div>
      <EditUserProfile />
      <UpdateUserProfileButton />
      <ResetUserProfileButton />
    </div>
  );
};
