import styled from "styled-components";

// pc header
export const HeaderWrap = styled.header`
  padding: 72px 140px 55px;
  background-color: #000;
  display: flex;
  align-items: center;

  @media (max-width: 1420px) {
    padding: 72px 120px 55px;
  }
  @media (max-width: 1300px) {
    padding: 72px 80px 55px;
  }
  @media (max-width: 1170px) {
    padding: 72px 50px 55px;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

// mobile header
export const MobileHeaderWrap = styled.header`
  display: none;
  padding: 0 16px;
  @media (max-width: 1024px) {
    display: block;
  }
`;
// mobile
export const TopMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`;

export const LogoImg = styled.h1`
  margin-right: 97px;
  max-width: 208px;
  & svg {
    width: 100%;
    height: auto;
  }
  @media (max-width: 1420px) {
    margin-right: 60px;
  }
  @media (max-width: 1300px) {
    margin-right: 20px;
  }
  @media (max-width: 1170px) {
    max-width: 190px;
  }
  @media (max-width: 1024px) {
    max-width: 130px;
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
  gap: 16px;
  @media (max-width: 1420px) {
    gap: 14px;
  }
  @media (max-width: 1170px) {
    gap: 8px;
  }
  @media (max-width: 1024px) {
    padding: 10px 0 25px;
  }
`;
export const NavItem = styled.li`
  color: #fff;
  font-weight: 700;
`;
export const BtnArea = styled.div`
  display: flex;
  align-items: center;
  & .toggle_menu {
    width: 30px;
    height: 30px;
    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
export const AuthBtn = styled.div<{ $loginState?: boolean }>`
  display: flex;
  align-items: center;
  color: #fff;
  margin-right: 35px;
  & > div {
    padding: ${(props) => (props.$loginState ? "0 15px" : "0 18px")};
    @media (max-width: 1420px) {
      padding: ${(props) => (props.$loginState ? "0 10px" : "0 14px")};
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
  @media (max-width: 1470px) {
    gap: 10px;
  }
  @media (max-width: 1300px) {
    gap: 5px;
  }
  @media (max-width: 1024px) {
    gap: 10px;
    margin-right: 15px;
  }
  & > button {
    padding: 10px 20px;
    border-radius: 50rem;
    font-weight: 700;
    font-size: 16px;
    @media (max-width: 1024px) {
      padding: 8px 10px;
      font-size: 12px;
    }
  }
  & > button:first-child {
    background-color: #fff;
    color: #235ef3;
  }
  & > button:last-child {
    background-color: #235ef3;
    color: #fff;
  }
`;
