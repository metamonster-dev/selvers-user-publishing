import styled from "styled-components";

export const ApplyFormWrap = styled.div`
  line-height: 1.2;
  & h3 {
    font-size: 32px;
    padding: 97px 32px 32px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding: 40px 12px 16px;
    }
  }
  & .field {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & .input_box {
      background-color: rgba(18, 18, 18, 1);
      border-radius: 10px;
      padding: 32px 67px 32px 46px;
      @media (max-width: 1024px) {
        padding: 20px 12px;
      }
      & .mt_16 {
        margin-top: 20px;
      }
    }

    & .InputCheckboxA {
      padding: 10px 0;
    }
    & .InputCheckboxA label {
      font-size: 24px;
      padding-left: 37px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }

    & .requird {
      color: #fff;
      width: 100%;
      padding: 10px 15px;
      display: block;
      font-size: 24px;
      font-weight: 500;
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 5px;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
  }
`;

export const ExcelArea = styled.div`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 46px;
  @media (max-width: 1024px) {
    padding: 20px 12px;
  }
  & .title_area .tit {
    display: block;
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
  & .sub {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .download_btn {
    max-width: 532px;
    width: 100%;
    margin: 17px 0 19px;
    padding: 10px 0;
    border-radius: 10px;
    width: 100%;
    color: #fff;
    background-color: rgba(49, 111, 233, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    @media (max-width: 1024px) {
      max-width: 100%;
    }
    & .icon {
      width: 15px;
      height: 15px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  & .alret_chang {
    max-width: 532px;
    width: 100%;
    padding: 10px 20px;
    background-color: rgba(49, 111, 233, 0.2);
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 12px;
      max-width: 100%;
    }
    & .icon {
      width: 10px;
      height: 10px;
      & svg {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
    & .txt {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
    }
  }

  & .agree {
    margin: 23px 0 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & label {
      font-size: 14px;
    }
  }

  & .upload {
    & input {
      display: none;
    }
    & .label {
      padding: 20px 10px;
      display: block;
      max-width: 532px;
      width: 100%;
      border-radius: 10px;
      background-color: rgba(248, 250, 251, 0.2);
      margin-top: 15px;
      @media (max-width: 1024px) {
        max-width: 100%;
      }
      & span {
        padding: 10px 0;
        max-width: 240px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        display: block;
        font-size: 16px;
        font-weight: 500;
      }
      & span.btn {
        border-radius: 50rem;
        color: rgba(9, 51, 140, 1);
        background-color: #fff;
      }
      & span.txt {
        color: #fff;
      }
    }
  }
`;
