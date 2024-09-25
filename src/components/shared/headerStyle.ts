import styled from "styled-components";

// pc header
export const HeaderWrap = styled.header`
  padding: 64px 140px 60px;
  background-color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 1470px) {
    padding: 64px 100px 60px;
  }
  @media (max-width: 1300px) {
    padding: 64px 50px 60px;
  }
  @media (max-width: 1190px) {
    padding: 64px 20px 60px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

// mobile header
export const MobileHeaderWrap = styled.header`
  display: none;
  padding: 12px 16px 13px;
  @media (max-width: 1024px) {
    display: block;
  }
`;
export const TopMenu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LogoImg = styled.h1`
  margin-right: 80px;
  max-width: 208px;
  & > svg {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1470px) {
    margin-right: 30px;
  }
  @media (max-width: 1300px) {
    margin-right: 20px;
    max-width: 180px;
  }
`;

export const NavMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NavWrap = styled.nav``;
export const Nav = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavItem = styled.li`
  padding: 0 16px;
  color: #fff;
  @media (max-width: 1470px) {
    padding: 0 10px;
  }
  @media (max-width: 1300px) {
    margin-right: 0 5px;
  }
`;
export const BtnArea = styled.div`
  display: flex;
  align-items: center;
`;
export const AuthBtn = styled.div<{ $loginState?: boolean }>`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 35px;
  & > div {
    padding: ${(props) => (props.$loginState ? "0 15px" : "0 18px")};
    @media (max-width: 1470px) {
      padding: ${(props) => (props.$loginState ? "0 10px" : "0 13px")};
    }
    @media (max-width: 1300px) {
      padding: ${(props) => (props.$loginState ? "0 5px" : "0 7px")};
    }
  }
  & > div:first-child {
    position: relative;
  }
  & > .login:first-child::after {
    content: "";
    position: absolute;
    background-color: #b0b8c1;
    width: 1px;
    height: 18px;
    top: 50%;
    right: 0;
    transform: translatey(-50%);
  }
  @media (max-width: 1470px) {
    margin-right: 20px;
  }
  @media (max-width: 1300px) {
    margin-right: 10px;
  }
`;
export const DescBtn = styled.div`
  display: flex;
  gap: 18px;
  align-items: center;
  & > button {
    padding: 10px 20px;
    border-radius: 50rem;
    font-weight: 700;
    font-size: 16px;
  }
  & > button:first-child {
    background-color: #fff;
    color: #235ef3;
  }
  & > button:last-child {
    background-color: #235ef3;
    color: #fff;
  }
  @media (max-width: 1470px) {
    gap: 10px;
  }
  @media (max-width: 1300px) {
    gap: 5px;
  }
`;
