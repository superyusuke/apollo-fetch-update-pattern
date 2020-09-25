import React, { FC, createContext, useReducer, Dispatch } from "react";
import { makeReducer, State, Action } from "src/component/Profile/reducer";

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: any;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    userProfile: "",
  },
  fetchedData: "",
});

export const Provider: FC = (props) => {
  const { children } = props;

  const initialFetchedData = {};

  const [state, setState] = useReducer(makeReducer(), {
    userProfile: "",
  });

  return (
    <Context.Provider
      value={{
        state,
        setState,
        fetchedData: initialFetchedData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
