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
// fetch 系

type ContextType = {
  state: State;
  setState: Dispatch<Action>;
  // fixme 型が適当だがさしあたってこれでなんとかなる
  refetch: () => Promise<any>;
  fetchedData: FetchedData;
};

const Context = createContext<ContextType>({
  setState: () => {},
  state: {
    userProfile: "",
    fetchedData: null,
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
    onCompleted({ user_by_pk }) {
      // ここで状態をセットすればいいと思いきや
      // refetch 時には実行されないので問題がある
    },
  });

  const [state, setState] = useReducer(makeReducer(), {
    userProfile: "",
    fetchedData: null,
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
