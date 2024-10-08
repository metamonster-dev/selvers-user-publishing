import styled from "styled-components";

export const WithdrawPageWrap = styled.div`
  position: relative;
  padding: 50px 140px 280px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  margin-bottom: 160px;
  @media (max-width: 1400px) {
    padding: 50px 70px 280px 70px;
  }
  @media (max-width: 1024px) {
    padding: 24px 14px 80px;
    margin-bottom: 80px;
  }
  & .title {
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      font-size: 18px;
      padding-bottom: 24px;
    }
  }
  & .info_box {
    padding: 36px 0 100px;
    line-height: 2;
    word-break: keep-all;
    @media (max-width: 1024px) {
      padding: 24px 0 50px;
      font-size: 14px;
    }
  }

  & .chk_wrap {
    @media (max-width: 1024px) {
      padding-bottom: 30px;
    }
    & label {
      padding-left: 30px;
    }
  }

  & .btn_area {
    position: absolute;
    bottom: 67px;
    right: 54px;
    @media (max-width: 1024px) {
      position: static;
    }
    & .err_txt {
      color: rgba(245, 103, 103, 1);
      font-size: 16px;
      font-weight: 500;
      padding-right: 24px;
      @media (max-width: 1024px) {
        font-size: 14px;
        line-height: 1.2;
        word-break: keep-all;
      }
    }
    & button,
    & a {
      padding: 15px 40px;
      background-color: rgba(18, 18, 18, 1);
      border: 2px solid rgba(9, 51, 140, 1);
      color: #fff;
      font-size: 16px;
      border-radius: 10px;
      @media (max-width: 1024px) {
        margin-top: 30px;
        width: 100%;
      }
    }
  }
`;
