import styled from "styled-components";

export const InputCheckboxWrapA = styled.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    line-height: 1.4;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    border: 0.5px solid #fff;
    border-radius: 3px;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("./chk.svg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 60%;
  }
`;

export const InputCheckboxWrapB = styled.div`
  & input {
    display: none;
  }
  & label {
    position: relative;
    padding-left: 24px;
    font-size: 14px;
    cursor: pointer;
    color: #738096;
    line-height: 1.4;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & label::before {
    content: "";
    position: absolute;
    display: block;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 17px;
    height: 17px;
    background-image: url("./round_chk.svg");
    background-size: cover;
  }
  & input[type="checkbox"]:checked ~ label::before {
    background-image: url("./round_chk_on.svg");
  }
`;
