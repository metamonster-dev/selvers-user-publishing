import { useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { confirmState } from "@/store/modalState";

type OpenModalType = {
  text: string;
  callback?: void;
};

type CloseModalType = {
  confirm?: boolean;
  callback?: void;
};

export const useConfirm = () => {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);
  const confirmValue = useRecoilValue(confirmState);

  // 모달 닫기 함수
  const closeConfirm = useCallback(
    ({ confirm, callback }: CloseModalType) => {
      setConfirmData((prev) => ({
        ...prev,
        isOpen: false,
        confirm: confirm,
        callback: callback,
      }));
    },
    [setConfirmData]
  );

  const openConfirm = useCallback(
    ({ text }: OpenModalType) =>
      setConfirmData({
        isOpen: true,
        text: text,
        confirm: false,
      }),
    [setConfirmData]
  );

  return { confirmData, confirmValue, closeConfirm, openConfirm };
};
