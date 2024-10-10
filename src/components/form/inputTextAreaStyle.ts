import styled from "styled-components";

export const InputTextAreaWrapA = styled.div`
  width: 100%;
  border: 1px solid #fff;
  border-radius: 10px;
  background-color: transparent;
  padding: 15px 20px;
  min-height: 96px;
  & textarea {
    width: 100%;
    min-height: 64px;
    resize: none;
    font-size: 16px;
    color: #fff;
    background-color: transparent;
    & ::placeholder {
      font-size: 16px;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const InputTextAreaWrapB = styled.div`
  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & textarea {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    resize: none;
    min-height: 120px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;
