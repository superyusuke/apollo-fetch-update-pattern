import React from "react";
import { useContextHook } from "./Provider";

export const ProfileUI = () => {
  const { state } = useContextHook();
  return <div>{state.userProfile}</div>;
};
