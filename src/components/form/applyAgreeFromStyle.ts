import styled from "styled-components";

export const ApplyAgreeFromWrap = styled.div`
  width: 100%;
  padding: 48px 16px 64px;
  background-color: rgba(18, 18, 18, 1);
  border-radius: 5px;
  @media (max-width: 1024px) {
    padding: 32px 16px 40px;
  }
  & h3 {
    padding-left: 20px;
    font-weight: 700;
    font-size: 32px;
    @media (max-width: 1024px) {
      padding-left: 0;
      font-size: 20px;
    }
  }
  & .apply_desc {
    padding: 37px 30px 46px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 1024px) {
      padding: 16px 0 40px;
    }
  }
  & .apply_desc .type {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    & .tit {
      font-size: 24px;
      font-weight: 500;
      @media (max-width: 1024px) {
        font-size: 16px;
      }
    }
    & .info {
      font-weight: 700;
      font-size: 32px;
      @media (max-width: 1024px) {
        font-size: 24px;
      }
    }
  }
  & .all_chk {
    padding: 0 20px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      padding: 0 0 16px;
    }
  }
  & .all_chk label {
    padding-left: 35px;
    font-size: 24px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }
  & .agree_list {
    padding: 42px 20px 100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      padding: 20px 0 60px;
    }
  }
  & .agree_list label {
    padding-left: 35px;
  }
  & .agree_list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .link a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    font-weight: 500;
    text-decoration: underline;
  }

  & .submit_btn {
    text-align: center;
    & button {
      min-width: 290px;
      padding: 20px 10px;
      background-color: rgba(49, 111, 233, 1);
      border-radius: 50rem;
      color: #fff;
      font-size: 24px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
  }
`;
