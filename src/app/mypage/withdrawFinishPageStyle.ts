import styled from "styled-components";

export const WithdrawFinishPageWrap = styled.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .desc_box {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    @media (max-width: 1024px) {
      gap: 10px;
    }
    & span:first-child {
      font-size: 24px;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 18px;
      }
    }
    & span:last-child {
      font-size: 16px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 14px;
      }
    }
  }
  & a {
    display: block;
    margin-top: 44px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
  }
`;
