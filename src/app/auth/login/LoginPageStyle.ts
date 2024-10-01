import styled from "styled-components";

export const LoginPageWrap = styled.div`
  @media (max-width: 1024px) {
    padding: 0 16px;
  }
`;

export const TitleBox = styled.div`
  padding: 64px 0 47px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  padding-bottom: 40px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  & h2 {
    font-weight: 700;
    padding-bottom: 44px;
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
  }
  & span {
    font-weight: 500;
  }
`;
//로그인 폼
export const LoginFormWrap = styled.form`
  width: 384px;
  margin: 0 auto;
  & > div:first-child {
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
  & > div:nth-child(2) {
    padding: 30px 0 15px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SubmitBtn = styled.button`
  background-color: #fff;
  font-size: 16px;
  width: 100%;
  border-radius: 50rem;
  color: #09338c;
  font-weight: 700;
  padding: 15px 0;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

// 아이디 비번 찾기
export const FindAuthWrap = styled.div`
  padding: 15px 0 25px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

// 간편 로그인
export const SnsLoginWrap = styled.div`
  & h3 {
    text-align: center;
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .btn_area {
    margin-top: 25px;
    display: flex;
    justify-content: center;
    gap: 25px;
  }
`;

// 개인정보 처리방침
export const DescBtn = styled.p`
  padding: 120px 0 40px;
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
