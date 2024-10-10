import styled from "styled-components";

export const SelectWrap = styled.div<{ $loading?: boolean; $width: number }>`
  /* pointer-events: ${(props) => (props.$loading ? "all" : "none")}; */
  width: ${(props) => `${props.$width}px`};
  position: relative;
`;

export const SelectOption = styled.button<{ $isOn: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 6px;
  color: #fff;
  padding: 10px 0;
  text-align: left;
  font-weight: 600;
  font-size: 14px;
  & .txt {
    min-width: 50px;
  }
`;

export const OptionBox = styled.ul<{ $isOn: boolean }>`
  display: ${(props) => (props.$isOn ? "block" : "none")};
  width: 100%;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 10;
  border-radius: 5px;
  background-color: #000;
  padding: 5px 15px;
  border: 1px solid #fff;
`;

export const Option = styled.li`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  padding: 15px;
  cursor: pointer;
`;
