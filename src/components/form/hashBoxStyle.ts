import styled from "styled-components";

export const HashBoxWrap = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const HashItem = styled.li`
  position: relative;
  padding: 5px 10px;
  font-size: 14px;
  color: #1e9eff;
  background-color: #fff;
  font-weight: 500;
  border-radius: 4px;
  & button {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    & svg {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  & span {
    display: block;
    padding-left: 16px;
  }
`;
