import styled from "styled-components";

export const AlretModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Alret = styled.div`
  position: fixed;
  width: 595px;
  height: 181px;
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  & .alret_header {
    height: 50px;
    border-bottom: 1px solid #e6e6e6;
    position: relative;
    & .close_btn {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      & svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  & .desc {
    padding: 25px 0 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
  & .btn_area {
    text-align: center;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;
      border-radius: 2px solid #09338c;
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
    }
  }
`;
