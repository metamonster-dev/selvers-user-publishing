import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { InputTextA } from "@components/form/inputText";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import {
  LoginPageWrap,
  TitleBox,
  FindAuthWrap,
  SnsLoginWrap,
  DescBtn,
  LoginFormWrap,
  SubmitBtn,
} from "./loginPageStyle";
import { Link } from "react-router-dom";
import GoogleIcon from "@/assets/icon/round_google.svg?react";
import NaverIcon from "@/assets/icon/round_naver.svg?react";
import KakaoIcon from "@/assets/icon/round_kakao.svg?react";

const schema = z.object({
  email: z.string().email({ message: "이메일 또는 비밀번호를 확인해주세요." }),
  password: z.string(),
});

const LoginPage = () => {
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <LoginPageWrap>
      <TitleBox>
        <h2>LOGIN</h2>
        <span>즐거운 만남을 시작해보세요!</span>
      </TitleBox>
      <LoginFormWrap onSubmit={onSubmit}>
        <div className="input_box">
          <InputTextA
            label="이메일(ID)"
            type="text"
            id="email"
            placeholder="이메일 입력"
            register={register}
          />
          <InputTextA
            label="비밀번호"
            type="password"
            id="password"
            placeholder="비밀번호 입력"
            register={register}
          />
        </div>
        {errors.email && (
          <p className="err_msg">{errors.email?.message?.toString()}</p>
        )}
        {errors.password && (
          <p className="err_msg">{errors.password?.message?.toString()}</p>
        )}
        <div className="login_stay">
          <InputCheckboxA
            label="로그인유지"
            id="loginStayed"
            register={register}
          />
        </div>
        <SubmitBtn>로그인</SubmitBtn>
      </LoginFormWrap>
      <FindAuthWrap>
        {/* <Link to={""}>아이디 찾기</Link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; */}
        <Link to={"/login/password-find"}>비밀번호 찾기</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to={"/join"}>회원가입</Link>
      </FindAuthWrap>
      {/* 간편 로그인하기 */}
      <SnsLoginWrap>
        <h3>간편 로그인하기</h3>
        <div className="btn_area">
          <button>
            <GoogleIcon />
          </button>
          <button>
            <NaverIcon />
          </button>
          <button>
            <KakaoIcon />
          </button>
        </div>
      </SnsLoginWrap>
      <DescBtn className="desc_btn">
        <Link to={""}>개인정보 처리방침</Link>
      </DescBtn>
    </LoginPageWrap>
  );
};

export default LoginPage;
