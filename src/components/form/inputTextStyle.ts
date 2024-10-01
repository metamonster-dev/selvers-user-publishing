import styled from "styled-components";

export const InputTextWrapA = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  & label {
    color: #fff;
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & input {
    background-color: #000;
    border: 1px solid #fff;
    border-radius: 50rem;
    padding: 15px;
    color: #fff;
    font-size: 16px;
  }
  & input::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;

export const InputTextWrapB = styled.input`
  width: 100%;
  padding: 15px 16px;
  font-size: 14px;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #d6deeb;
  @media (max-width: 1024px) {
    font-size: 12px;
  }
  &::placeholder {
    color: #738096;
    font-size: 14px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`;
