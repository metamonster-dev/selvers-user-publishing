import { Dispatch, SetStateAction } from "react";
import { AlretModalWrap, Alret } from "./alretModalStyle";
import CloseBtn from "@/assets/icon/modal_close.svg?react";

type Props = {
  text: string;
  setAlret: Dispatch<SetStateAction<boolean>>;
};

const AlretModal = ({ text, setAlret }: Props) => {
  const closeAlret = () => {
    setAlret(false);
  };
  return (
    <AlretModalWrap>
      <Alret>
        <div className="alret_header">
          <button onClick={closeAlret} className="close_btn">
            <CloseBtn />
          </button>
        </div>
        <div className="desc">{text}</div>
        <div className="btn_area">
          <button onClick={closeAlret} className="primary">
            확인
          </button>
        </div>
      </Alret>
    </AlretModalWrap>
  );
};
export default AlretModal;
