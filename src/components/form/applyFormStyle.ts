import styled from "styled-components";

export const ApplyFormWrap = styled.div`
  & h3 {
    font-size: 32px;
    padding: 57px 32px 32px;
    font-weight: 700;
    color: #fff;
  }
  & .field {
    display: flex;
    flex-direction: column;
    gap: 16px;
    & .InputCheckboxA {
      padding: 10px 0;
    }
    & .InputCheckboxA label {
      font-size: 24px;
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
    }
  }
`;

export const ExcelArea = styled.div`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 600px 32px 46px;
  & .title_area .tit {
    display: block;
    font-size: 24px;
    margin-bottom: 17px;
    font-weight: 700;
    color: #fff;
  }
  & .sub {
    display: block;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
  }
  & .download_btn {
    margin-top: 17px;
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
`;
