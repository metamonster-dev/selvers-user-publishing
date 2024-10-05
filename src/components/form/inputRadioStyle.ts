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

export const InputRadioWrapB = styled.div`
  width: 100%;
  & input {
    display: none;
  }
  & label {
    position: relative;
    width: 100%;
    height: 100%;
    color: rgba(255, 255, 255, 0.5);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    padding-left: 25px;
  }
  & input[type="radio"]:checked ~ label {
    color: #fff;
  }
  & label::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50rem;
    border: 2px solid #fff;
  }
  & input[type="radio"]:checked ~ label::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50rem;
    background-color: #fff;
  }
`;
