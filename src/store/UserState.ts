import { atom } from "recoil";

export interface UserStateType {
  isLogin: boolean;
  isLoginError: boolean;
}

export const userState = atom<UserStateType>({
  key: "user",
  default: {
    isLogin: true,
    isLoginError: false,
  },
});
