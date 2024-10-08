import styled from "styled-components";

export const UserModifyPageWrap = styled.div`
  position: relative;
  padding: 48px 20px 86px 140px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 24px 14px 40px;
    margin-bottom: 80px;
  }
`;
export const UserInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  & > div {
    display: flex;
    align-items: center;
    font-weight: 500;
    flex-wrap: wrap;
    & .label {
      min-width: 120px;
      font-size: 18px;
      @media (max-width: 1024px) {
        font-size: 14px;
        min-width: 90px;
      }
      @media (max-width: 400px) {
        font-size: 14px;
        min-width: 70px;
      }
    }
    & .info {
      font-size: 16px;
    }
  }
`;
export const FormTable = styled.form`
  padding-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 40px;
  }
  & .radio_box {
    display: flex;
    align-items: center;
    & .label {
      min-width: 120px;
      font-size: 16px;
    }
    & > div {
      width: auto;
      margin-right: 35px;
      & > label {
        color: #fff;
        padding-left: 30px;
      }
    }
  }
  & .favorite_box {
    & .label {
      font-weight: 700;
      padding-bottom: 23px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .favorite_list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 20px;
      @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
      }
      & > div {
        min-width: 170px;
        @media (max-width: 1024px) {
          min-width: auto;
        }
      }
    }
  }
`;
export const ButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  gap: 40px;
  @media (max-width: 1024px) {
    padding-top: 50px;
  }
  & .submit_btn {
    position: absolute;
    bottom: 67px;
    right: 54px;
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    padding: 15px 55px;
    @media (max-width: 1024px) {
      position: static;
      width: 100%;
      padding: 15px 10px;
    }
  }
  & a {
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;
