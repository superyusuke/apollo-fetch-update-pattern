import React from "react";
import { Provider } from "src/component/Profile/Provider";
import { Setter } from "src/component/Profile/Setter";
import { ProfileUI } from "src/component/Profile/UI";

export const Profile = () => {
  return (
    <Provider>
      <Setter>
        <ProfileUI />
      </Setter>
    </Provider>
  );
};
