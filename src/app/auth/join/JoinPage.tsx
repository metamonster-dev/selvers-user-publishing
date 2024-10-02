import { JoinPageWrap, ButtonItem } from "./joinPageStyle";

import KakaoIcon from "@/assets/icon/kakao.svg?react";
import NaverIcon from "@/assets/icon/naver.svg?react";
import GmailIcon from "@/assets/icon/gmail.svg?react";
import MailIcon from "@/assets/icon/mail.svg?react";
import { useNavigate } from "react-router-dom";

const JoinPage = () => {
  const navigate = useNavigate();

  return (
    <JoinPageWrap>
      <ButtonItem className="kakao">
        <span className="icon">
          <KakaoIcon />
        </span>
        <span>카카오 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem className="naver">
        <span className="icon">
          <NaverIcon />
        </span>
        <span>네이버 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem className="gmail">
        <span className="icon">
          <GmailIcon />
        </span>
        <span>구글 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem
        onClick={() => {
          navigate("/join/form");
        }}
        className="mail"
      >
        <span className="icon">
          <MailIcon />
        </span>
        <span>이메일 계정으로 가입하기</span>
      </ButtonItem>
      <ButtonItem
        onClick={() => {
          navigate("/login");
        }}
        className="login"
      >
        <span>이미 회원이신가요?</span>
      </ButtonItem>
    </JoinPageWrap>
  );
};

export default JoinPage;
