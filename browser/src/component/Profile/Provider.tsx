import React, {
  FC,
  createContext,
  useContext,
  useReducer,
  Dispatch,
} from "react";
import { makeReducer, State, Action } from "src/component/Profile/reducer";

// fetch 系
import gql from "graphql-tag";
import { useUserInfoQuery, UserInfoQueryResult } from "src/generated/graphql";

export type FetchedData = NonNullable<
  NonNullable<UserInfoQueryResult["data"]>["user_by_pk"]
>;

gql`
  query userInfo($userId: Int!) {
    user_by_pk(id: $userId) {
      id
      profile
    }
  }
`;

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  fetchedData: FetchedData;
  // fixme 型が適当だがさしあたってこれでなんとかなる
  refetch: () => Promise<any>;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    userProfile: "",
  },
  fetchedData: (null as unknown) as FetchedData,
  refetch: async () => {},
});

export const Provider: FC = (props) => {
  const { children } = props;

  const userId = 1;

  // ここでデータをフェッチ
  const { data, refetch } = useUserInfoQuery({
    variables: { userId },
  });

  const [state, setState] = useReducer(makeReducer(), {
    userProfile: "",
  });

  // データが取得できない場合は、レンダリングしないパターンで今回は実装
  // 別の実装で、ローディング中をもっとしっかりコントロールすることも可能
  return data && data?.user_by_pk ? (
    <Context.Provider
      value={{
        state,
        setState,
        fetchedData: data.user_by_pk,
        refetch,
      }}
    >
      {children}
    </Context.Provider>
  ) : null;
};

export const useContextHook = () => useContext(Context);
