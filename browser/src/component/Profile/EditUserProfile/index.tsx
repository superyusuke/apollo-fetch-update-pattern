import React from "react";
import { useContextHook } from "src/component/Profile/Provider";

export const EditUserProfile = () => {
  const { state, setState, fetchedData } = useContextHook();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      type: "setUserProfile",
      payload: {
        userProfile: e.target.value,
      },
    });
  };

  return (
    <div>
      <div>
        <h2>フェッチ結果表示部分:</h2>
        <p>{fetchedData.profile}</p>
      </div>
      <div>
        <h2>編集部分</h2>
        <input
          type="text"
          value={state.userProfile}
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
};
