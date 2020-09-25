export type State = {
  userProfile: string;
};

type SetUserProfile = {
  type: "setUserProfile";
  payload: {
    userProfile: string;
  };
};

export type Action = SetUserProfile;

export const makeReducer = () => (state: State, action: Action): State => {
  if (action.type === "setUserProfile") {
    return state;
  }

  return state;
};
