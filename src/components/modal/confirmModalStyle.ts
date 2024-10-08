import styled from "styled-components";

export const ConfirmModalWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export const Confirm = styled.div`
  position: fixed;
  width: 595px;
  /* height: 181px; */
  background-color: #fff;
  top: 50%;
  left: 50%;
  padding: 0 35px;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  border: 1px solid #ccc;
  @media (max-width: 1024px) {
    width: auto;
    right: 16px;
    left: 16px;
    transform: none;
    transform: translateY(-50%);
  }
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
    word-break: keep-all;
    padding: 25px 0 30px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #000;
    @media (max-width: 400px) {
      font-size: 15px;
    }
  }
  & .btn_area {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding-bottom: 30px;
    & button {
      width: 134px;
      padding: 10px;
      font-size: 16px;
      font-weight: 500;
      border-radius: 10px;

      @media (max-width: 400px) {
        width: 100px;
        padding: 8px;
        font-size: 15px;
      }
    }
    & .secondary {
      border: 2px solid rgba(9, 51, 140, 1);
    }
    & .primary {
      background-color: #09338c;
      color: #fff;
      border: 2px solid rgba(11, 12, 55, 1);
    }
  }
`;
