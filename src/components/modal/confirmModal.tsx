import { Dispatch, SetStateAction, useState } from "react";
import { ConfirmModalWrap, Confirm } from "./confirmModalStyle";
import AlretModal from "./alretModal";
import CloseBtn from "@/assets/icon/modal_close.svg?react";

type Props = {
  text: string;
  setConfirm: Dispatch<SetStateAction<boolean>>;
  setShowConfirm: Dispatch<SetStateAction<boolean>>;
};

const ConfirmModal = ({ text, setConfirm, setShowConfirm }: Props) => {
  const [alret, setAlret] = useState(false);
  const noCheckHandler = () => {
    setConfirm(false);
    setShowConfirm(false);
  };
  const checkHandler = () => {
    setConfirm(true);
    setAlret(true);
  };

  return (
    <>
      <ConfirmModalWrap>
        <Confirm>
          <div className="alret_header">
            <button onClick={noCheckHandler} className="close_btn">
              <CloseBtn />
            </button>
          </div>
          <div className="desc">{text}</div>
          <div className="btn_area">
            <button onClick={noCheckHandler} className="secondary">
              닫기
            </button>
            <button onClick={checkHandler} className="primary">
              취소하기
            </button>
          </div>
        </Confirm>
      </ConfirmModalWrap>
      {alret && (
        <AlretModal text="취소가 완료되었습니다." setAlret={setShowConfirm} />
      )}
    </>
  );
};
export default ConfirmModal;
