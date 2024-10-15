import { Dispatch, SetStateAction } from "react";
import { AlretModalWrap, Alret } from "./alretModalStyle";
import CloseBtn from "@/assets/icon/modal_close.svg?react";
import { useNavigate } from "react-router-dom";

type Props = {
  text: string;
  setAlret: Dispatch<SetStateAction<boolean>>;
  navigatePath: string;
};

const AlretModal = ({ text, setAlret, navigatePath }: Props) => {
  const navigate = useNavigate();
  const closeAlret = () => {
    setAlret(false);
    navigate(navigatePath);
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
