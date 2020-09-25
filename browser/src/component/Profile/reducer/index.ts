import { FetchedData } from "src/component/Profile/Provider";

export type State = {
  userProfile: string;
  fetchedData: FetchedData | null;
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

type ResetUserProfile = {
  type: "resetUserProfile";
};

export type Action = SetFetchedData | SetUserProfile | ResetUserProfile;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "setFetchedData") {
    return {
      ...state,
      // fetch が終わったら、state に保持する
      fetchedData: action.payload.fetchedData,
      // profile を表示するための値を変更
      userProfile: action.payload.fetchedData.profile,
    };
  }

  if (action.type === "setUserProfile") {
    return {
      ...state,
      userProfile: action.payload.userProfile,
    };
  }

  // 最初にフェッチしてきた userProfile に戻す
  if (action.type === "resetUserProfile") {
    if (!state.fetchedData) {
      return state;
    }

    return {
      ...state,
      userProfile: state.fetchedData.profile,
    };
  }

  return state;
};
