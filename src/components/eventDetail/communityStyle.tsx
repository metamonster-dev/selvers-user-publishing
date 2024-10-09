import styled from "styled-components";

export const CommunityWrap = styled.div`
  /* width: 405px; */
`;

export const TabMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  & button {
    width: 100%;
    padding: 15px 10px;
    color: #fff;
    font-weight: 800;
    font-size: 14px;
  }
  & .active {
    position: relative;
    color: rgba(49, 111, 233, 1);
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`;
export const AlretChang = styled.div`
  position: relative;
  word-break: keep-all;
  padding: 15px 50px 15px 20px;
  background-color: rgba(8, 66, 152, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 7px;
  & button {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 6px;
    & svg {
      width: 10px;
      height: 10px;
      display: block;
    }
  }
`;
export const TabContent = styled.div`
  padding: 16px;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
`;
