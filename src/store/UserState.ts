import { atom } from "recoil";

export interface UserStateType {
  isLogin: boolean;
  isLoginError: boolean;
  data: {
    user_id: number | null;
    name: string | null;
    token: string | null;
  };
}

export const userState = atom<UserStateType>({
  key: "user",
  default: {
    isLogin: false,
    isLoginError: false,
    data: {
      user_id: null,
      name: null,
      token: null,
    },
  },
  effects: [
    ({ setSelf, onSet }) => {
      const savedToken = localStorage.getItem("token");
      const savedUserId = localStorage.getItem("user_id");
      if (savedToken && savedUserId) {
        setSelf({
          isLogin: true,
          isLoginError: false,
          data: {
            user_id: JSON.parse(savedUserId),
            name: null,
            token: savedToken,
          },
        });
      }

      onSet((newValue, _, isReset) => {
        if (isReset) {
          localStorage.removeItem("user_id");
          localStorage.removeItem("token");
        } else {
          localStorage.setItem(
            "user_id",
            JSON.stringify(newValue.data.user_id ?? "")
          );
          localStorage.setItem("token", newValue.data.token ?? "");
        }
      });
    },
  ],
});
