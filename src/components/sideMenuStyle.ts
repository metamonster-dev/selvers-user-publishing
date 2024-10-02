import styled from "styled-components";

export const SideMenuWrap = styled.div`
  width: 280px;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  padding: 30px 20px;
  & h2 {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    margin-bottom: 30px;
    padding: 0 10px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MenuItem = styled.li<{ $isOn?: boolean; $target?: boolean }>`
  width: 100%;
  position: relative;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  color: ${(props) => props.$isOn && "rgba(255, 255, 255, 1);"};
  padding: 10px 25px;
  border-radius: 50rem;
  font-weight: 600;
  background-color: ${(props) => props.$target && "rgba(255, 255, 255, 0.1)"};
  cursor: pointer;
  &.sub_list {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 25px;
  }
  & a {
    display: block;
    color: ${(props) => props.$target && "#fff"};
  }
  & > span {
    position: absolute;
    display: block;
    right: 16px;
    top: 50%;
    transform: translateY(-50%)
      rotate(${(props) => (props.$isOn ? "180deg" : "0")});
    width: 14px;
    height: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg path {
      stroke-opacity: ${(props) => (props.$isOn ? 1 : 0.5)};
    }
  }
`;

export const OptionBox = styled.div<{ $isOn: boolean }>`
  display: ${(props) => (props.$isOn ? "block" : "none")};
  border-radius: 0 0 4px 4px;
  border-top: none;
`;

export const Option = styled.li`
  font-size: 13px;
  padding: 5px 9px 6px;
  cursor: pointer;
  line-height: 18px;
  letter-spacing: -0.001em;
`;
