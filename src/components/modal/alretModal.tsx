import { AlretModalWrap, Alret } from "./alretModalStyle";
import CloseBtn from "@/assets/icon/modal_close.svg?react";
import { useAlret } from "@/hook/useAlret";

const AlretModal = () => {
  const { alretData, closeModal } = useAlret();
  return (
    <>
      {alretData.isOpen && (
        <AlretModalWrap>
          <Alret>
            <div className="alret_header">
              <button onClick={closeModal} className="close_btn">
                <CloseBtn />
              </button>
            </div>
            <div className="desc">{alretData.text}</div>
            <div className="btn_area">
              <button onClick={closeModal} className="primary">
                확인
              </button>
            </div>
          </Alret>
        </AlretModalWrap>
      )}
    </>
  );
};
export default AlretModal;
