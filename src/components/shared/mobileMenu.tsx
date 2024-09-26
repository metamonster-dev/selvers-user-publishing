import { userState } from "@/store/UserState";
import { useRecoilValue } from "recoil";
import React, { ReactNode } from "react";
import {
  MobileMenuWrap,
  MobileMenuHeader,
  MobileMenuBody,
} from "./mobileMenuStyle";
import CloseIcon from "@/assets/icon/close.svg?react";

type Props = {
  children: ReactNode;
  setClose: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileMenu = ({ children, setClose }: Props) => {
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;

  const closeHandler = () => {
    setClose(false);
  };
  return (
    <MobileMenuWrap>
      <MobileMenuHeader>
        {loginState && <div className="user_name">o o o 님</div>}

        <button onClick={() => closeHandler()} className="close_btn">
          <CloseIcon />
        </button>
      </MobileMenuHeader>
      <MobileMenuBody>{children}</MobileMenuBody>
    </MobileMenuWrap>
  );
};

export default MobileMenu;
