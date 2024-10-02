import styled from "styled-components";

export const SelectWrap = styled.div`
  pointer-events: all;
  width: 100%;
  position: relative;
`;

export const SelectOption = styled.div<{ $isOn: boolean }>`
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

export const OptionBox = styled.div<{ $isOn: boolean }>`
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
