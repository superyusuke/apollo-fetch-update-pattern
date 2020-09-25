import React from "react";
import { Provider } from "src/component/Profile/Provider";
import { Setter } from "src/component/Profile/Setter";
import { ProfileUI } from "src/component/Profile/UI";

export const Profile = () => {
  return (
    // provider = context を provide する
    // つまり以下の値を provide する機構と値を provide する
    // state と、それを変更する setState メソッド
    // fetch してきたデータと、再フェッチする refetch メソッド
    // そのほか provider 配下で必要なものがあれば任意の値を provide する
    <Provider>
      {/* setter = fetch してきた data を setState する */}
      {/* provider で set すればいいように一見見えるが、ループしてしまう */}
      {/* provider で set してループしない実装があればプルリクいただきたい */}
      <Setter>
        {/* 画面の構成要素を配置する */}
        <ProfileUI />
      </Setter>
    </Provider>
  );
};
