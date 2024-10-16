import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { InputTextA } from "@components/form/inputText";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import { useLoginMutation } from "@/api/auth/auth.query";
import {
  LoginPageWrap,
  TitleBox,
  FindAuthWrap,
  SnsLoginWrap,
  DescBtn,
  LoginFormWrap,
  SubmitBtn,
} from "./loginPageStyle";
import { LoginType, CustomError } from "@/type";
import { Link } from "react-router-dom";
import GoogleIcon from "@/assets/icon/round_google.svg?react";
import NaverIcon from "@/assets/icon/round_naver.svg?react";
import KakaoIcon from "@/assets/icon/round_kakao.svg?react";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
  password: z.string(),
  remember: z.boolean(),
});

const LoginPage = () => {
  const [isFormValid, setIsFormValid] = useState(false);
  const useLogin = useLoginMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setError,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const email = watch("email");
  const password = watch("password");
  useEffect(() => {
    if (email?.trim() && password?.trim() !== undefined) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [email, password]);

  const onSubmit = handleSubmit((data) => {
    const loginData: LoginType = {
      email: data.email,
      password: data.password,
      remember: data.remember,
    };
    //api 요청
    useLogin.mutate(loginData);
  });

  //로그인 성공
  useEffect(() => {
    if (useLogin.isSuccess) {
      navigate("/");
    }
  }, [useLogin.isSuccess, navigate]);

  //로그인 실패
  useEffect(() => {
    if (useLogin.isError) {
      //일치하는 계정 없을때
      const customError = useLogin.error as CustomError;
      if (customError.response?.data.data.error === "Unauthorised") {
        setError("apiError", {
          type: "manual",
          message: "이메일 또는 비밀번호를 확인해주세요.",
        });
      }
      //회원가입 했는데 이메일 인증 안했을때
      if (
        customError.response?.data.data.error === "Not authenticate your email"
      ) {
        setError("apiError", {
          type: "manual",
          message: "이메일 인증이 필요합니다.",
        });
      }
    }
  }, [useLogin.isError, useLogin.error, setError]);

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
        {errors.apiError && (
          <p className="err_msg">{errors.apiError?.message?.toString()}</p>
        )}
        <div className="login_stay">
          <InputCheckboxA
            label="로그인유지"
            id="remember"
            register={register}
          />
        </div>
        <SubmitBtn disabled={!isFormValid}>로그인</SubmitBtn>
      </LoginFormWrap>
      <FindAuthWrap>
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
