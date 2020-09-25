import React, { FC, useEffect, Fragment } from "react";
import { useContextHook } from "src/component/Profile/Provider";

export const Container: FC = ({ children }) => {
  const { setState, fetchedData } = useContextHook();

  useEffect(() => {
    setState({
      type: "setFetchedData",
      payload: {
        fetchedData,
      },
    });
  }, [fetchedData]);

  return <Fragment>{children}</Fragment>;
};
