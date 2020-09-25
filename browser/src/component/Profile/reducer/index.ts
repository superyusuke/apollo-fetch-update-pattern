import { FetchedData } from "src/component/Profile/Provider";

export type State = {
  userProfile: string;
};

type SetFetchedData = {
  type: "setFetchedData";
  payload: {
    fetchedData: FetchedData;
  };
};

type SetUserProfile = {
  type: "setUserProfile";
  payload: {
    userProfile: string;
  };
};

export type Action = SetUserProfile | SetFetchedData;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "setFetchedData") {
    return {
      ...state,
      userProfile: action.payload.fetchedData.profile,
    };
  }

  if (action.type === "setUserProfile") {
    return {
      ...state,
      userProfile: action.payload.userProfile,
    };
  }

  return state;
};
