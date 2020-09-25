import React, { FC, useEffect, Fragment } from "react";
import { useContextHook } from "src/component/Profile/Provider";

export const Setter: FC = ({ children }) => {
  const { setState, fetchedData } = useContextHook();

  // fetchedData に変更があったときだけ、
  // state を更新する機能
  useEffect(() => {
    setState({
      type: "setFetchedData",
      payload: {
        fetchedData,
      },
    });
  }, [fetchedData, setState]);

  return <Fragment>{children}</Fragment>;
};
