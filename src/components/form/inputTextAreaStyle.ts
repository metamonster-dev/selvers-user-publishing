import styled from "styled-components";

export const InputTextAreaWrap = styled.div`
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
