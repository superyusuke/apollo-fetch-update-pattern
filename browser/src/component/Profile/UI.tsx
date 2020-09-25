import React from "react";
import { EditUserProfile } from "src/component/Profile/EditUserProfile";
import { UpdateUserProfileButton } from "src/component/Profile/UpdateUserProfileButton";

export const ProfileUI = () => {
  return (
    <div>
      <EditUserProfile />
      <UpdateUserProfileButton />
    </div>
  );
};
