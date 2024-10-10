import styled from "styled-components";

export const FinishApplyPageWrap = styled.div`
  min-height: 70vh;
  padding-top: 200px;
  @media (max-width: 1024px) {
    min-height: 80vh;
    padding: 70px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div {
    text-align: center;
    word-break: keep-all;
    justify-content: center;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  & .logo {
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      padding-bottom: 20px;
    }
  }

  & .msg {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 80px;
    @media (max-width: 1024px) {
      font-size: 24px;
      padding-bottom: 40px;
    }
  }

  & .link_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 16px;
    & .home {
      color: #fff;
    }
    & .apply_list {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
