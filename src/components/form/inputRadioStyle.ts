import styled from "styled-components";

export const InputRadioWrapA = styled.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #738096;
    font-size: 14px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #d6deeb;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & input[type="radio"]:checked ~ label {
    background-color: #235ef3;
    border: 1px solid #235ef3;
    color: #fff;
  }
`;

export const InputRadioWrapB = styled.div``;
