import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { confirmState } from "@/store/modalState";

type OpenModalType = {
  text: string;
  callback?: () => void;
};

export const useConfirm = () => {
  const [confirmData, setConfirmData] = useRecoilState(confirmState);

  // 모달 닫기 함수
  const closeModal = useCallback(() => {
    setConfirmData((prev) => ({
      ...prev,
      isOpen: false,
    }));

    if (confirmData?.callBack) {
      confirmData.callBack();
    }
  }, [setConfirmData, confirmData]);

  const openModal = useCallback(
    ({ text, callback }: OpenModalType) =>
      setConfirmData({
        isOpen: true,
        text: text,
        callBack: callback,
      }),
    [setConfirmData]
  );

  return { confirmData, closeModal, openModal };
};
