import { ConfirmModalWrap, Confirm } from "./confirmModalStyle";
import CloseBtn from "@/assets/icon/modal_close.svg?react";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";

const ConfirmModal = () => {
  const { confirmData, closeModal } = useConfirm();
  const { openModal } = useAlret();

  const alretData = {
    text: "취소가 완료되었습니다.",
  };
  return (
    <>
      {confirmData.isOpen && (
        <ConfirmModalWrap>
          <Confirm>
            <div className="alret_header">
              <button onClick={closeModal} className="close_btn">
                <CloseBtn />
              </button>
            </div>
            <div className="desc">{confirmData.text}</div>
            <div className="btn_area">
              <button onClick={closeModal} className="secondary">
                닫기
              </button>
              <button onClick={() => openModal(alretData)} className="primary">
                취소하기
              </button>
            </div>
          </Confirm>
        </ConfirmModalWrap>
      )}
    </>
  );
};
export default ConfirmModal;
