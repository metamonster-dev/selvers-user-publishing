import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { alretState } from "@/store/modalState";

type OpenModalType = {
  text: string;
  callback?: () => void;
};

export const useAlret = () => {
  const [alretData, setAlretData] = useRecoilState(alretState);

  // 모달 닫기 함수
  const closeAlret = useCallback(() => {
    setAlretData((prev) => ({
      ...prev,
      isOpen: false,
    }));

    if (alretData?.callBack) {
      alretData.callBack();
    }
  }, [setAlretData, alretData]);

  const openAlret = useCallback(
    ({ text, callback }: OpenModalType) =>
      setAlretData({
        isOpen: true,
        text: text,
        callBack: callback,
      }),
    [setAlretData]
  );

  return { alretData, closeAlret, openAlret };
};
