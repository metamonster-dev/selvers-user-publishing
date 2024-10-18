import { atom } from "recoil";

type AlretType = {
  isOpen: boolean;
  text: string;
  callBack?: () => void;
};

type ConfirmType = {
  isOpen: boolean;
  text: string;
  callBack?: void;
  confirm?: boolean;
};

export const alretState = atom<AlretType>({
  key: "alretState",
  default: {
    isOpen: false,
    text: "",
  },
});

export const confirmState = atom<ConfirmType>({
  key: "confirmState",
  default: {
    isOpen: false,
    text: "",
    confirm: false,
  },
});
