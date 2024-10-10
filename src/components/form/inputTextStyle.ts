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

export const InputTextWrapC = styled.div`
  display: flex;
  flex-direction: column;
  & label {
    font-size: 18px;
    @media (max-width: 1024px) {
      width: 100%;
      font-size: 16px;
    }
  }
  & input {
    width: 412px;
    margin-top: 15px;
    padding: 15px 20px;
    font-size: 16px;
    background-color: transparent;
    border-radius: 10px;
    border: 1px solid #fff;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      width: 100%;
      padding: 15px;
    }
    &::placeholder {
      color: #fff;
      font-size: 16px;
    }
  }
  & input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const InputTextWrapD = styled.div`
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
  & .input_area .input {
    color: #fff;
    width: 100%;
    padding: 10px 15px;
    display: block;
    font-size: 24px;
    font-weight: 500;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;
