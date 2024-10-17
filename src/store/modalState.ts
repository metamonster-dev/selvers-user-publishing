import { atom } from "recoil";

type AlretType = {
  isOpen: boolean;
  text: string;
  callBack?: () => void;
};

export const alretState = atom<AlretType>({
  key: "alretState",
  default: {
    isOpen: false,
    text: "",
  },
});

export const confirmState = atom<AlretType>({
  key: "confirmState",
  default: {
    isOpen: false,
    text: "",
  },
});
