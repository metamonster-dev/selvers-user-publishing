import styled from "styled-components";

export const PasswordFindWrap = styled.div`
  width: 384px;
  margin: 0 auto 160px;
  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 16px;
  }
`;

export const TitleBox = styled.div`
  padding: 130px 0 58px;
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 500;
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
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`;

export const FindFormWrap = styled.form`
  & input {
    margin-bottom: 12px;
  }
  & .err_msg {
    height: 20px;
  }
`;

export const SubmitBtn = styled.button`
  margin-top: 30px;
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
