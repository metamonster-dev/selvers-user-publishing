import styled from "styled-components";

export const JoinFormWrap = styled.div`
  padding: 94px 0 57px;
  background-color: #0b0c37;
  @media (max-width: 400px) {
    padding: 50px 16px 40px;
  }
`;

export const JoinForm = styled.form`
  width: 320px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const TdForm = styled.div`
  width: 100%;
  display: flex;
  column-gap: 7px;
  & > div {
    width: 100%;
  }
  &.password {
    flex-direction: column;
    & > input:first-child {
      border-radius: 4px 4px 0 0;
      border-bottom: none;
    }
    & > input:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
`;

// radio
export const InputRadioWrap = styled.div`
  display: flex;
  border-radius: 4px;
  overflow: hidden;
  & > div:last-child label {
    border-left: none !important;
  }
`;

export const FavoriteListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 23px;
  & > div {
    width: 50%;
  }
  & > div label {
    font-size: 16px;
    font-weight: 600;
  }
`;

export const AgreeBox = styled.div`
  background-color: #fff;
  border-radius: 2px;
  & > div {
    padding: 14px 16px;
  }
  & > div:first-child {
    border-bottom: 1px solid #d6deeb;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div {
      padding-left: 16px;
    }
    & > div:last-child {
      padding-left: 0;
    }
  }
  & .required_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .link {
      position: relative;
      font-size: 12px;
      color: #9b9b9b;
      padding-right: 10px;
    }
    & .link::after {
      content: "";
      position: absolute;
      width: 5px;
      height: 9px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      background-size: cover;
      background-image: url("/link_arrow.svg");
    }
  }
`;

export const SubmitBtn = styled.button`
  font-size: 16px;
  color: #fff;
  width: 100%;
  background-color: #1f8ce6;
  border: 1px solid #0077d9;
  padding: 10px 0;
  border-radius: 2px;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
