import styled from "styled-components";

export const SelectWrapA = styled.div`
  pointer-events: all;
  width: 100%;
  position: relative;
`;

export const SelectOptionA = styled.div<{ $isOn: boolean }>`
  width: 100%;
  padding: 15px 16px;
  background-color: #fff;
  position: relative;
  font-size: 14px;
  color: #738096;
  border-radius: ${(props) => (props.$isOn ? "4px 4px 0 0" : "4px")};
  border: 1px solid #d6deeb;
  border-bottom: ${(props) => props.$isOn && "1px solid #fff;"};
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  & > span {
    position: absolute;
    display: block;
    right: 10px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${(props) => (props.$isOn ? "180deg" : "0")});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OptionBoxA = styled.div<{ $isOn: boolean }>`
  display: ${(props) => (props.$isOn ? "block" : "none")};
  width: 100%;
  position: absolute;
  top: 45px;
  z-index: 5;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  padding: 10px 14px 25px;
  border: 1px solid #dddddd;
  border-top: none;
`;

export const Option = styled.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;

export const SelectWrapB = styled.div<{ $isOn?: boolean }>`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 67px 32px 46px;

  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 15px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${(props) => (props.$isOn ? "180deg" : "0deg")});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${(props) => (props.$isOn ? "block" : "none")};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
  }
`;
export const SelectWrapC = styled.div<{ $isOn?: boolean }>`
  background-color: rgba(18, 18, 18, 1);
  border-radius: 10px;
  padding: 32px 67px 32px 46px;

  & .label {
    font-size: 24px;
    display: block;
    margin-bottom: 15px;
    font-weight: 700;
    color: #fff;
    & .req {
      color: rgba(255, 0, 0, 1);
    }
  }
  & .select_box {
    position: relative;
    font-size: 24px;
    color: #fff;
    font-weight: 500;
    line-height: 1.3;
  }
  & .select {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px 15px;
    & .icon {
      width: 18px;
      height: 9px;
      opacity: 0.5;
      transform: rotate(${(props) => (props.$isOn ? "180deg" : "0deg")});
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .option_box {
    display: ${(props) => (props.$isOn ? "block" : "none")};
    padding: 26px 17px;
    position: absolute;
    width: 100%;
    background-color: rgba(18, 18, 18, 1);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    z-index: 5;
  }
  & .option {
    cursor: pointer;
    padding: 10px 0;
  }
`;
