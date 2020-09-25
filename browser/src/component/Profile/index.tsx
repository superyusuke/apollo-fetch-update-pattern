import React from "react";
import { Provider } from "src/component/Profile/Provider";
import { Container } from "src/component/Profile/Container";
import { ProfileUI } from "src/component/Profile/UI";

export const Profile = () => {
  return (
    <Provider>
      <Container>
        <ProfileUI />
      </Container>
    </Provider>
  );
};
