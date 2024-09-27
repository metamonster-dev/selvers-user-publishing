import { userState } from "@/store/UserState";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import {
  MobileHeaderWrap,
  TopMenu,
  LogoImg,
  NavWrap,
  Nav,
  NavItem,
  BtnArea,
  DescBtn,
} from "./headerStyle";
import Logo from "@/assets/logo_w.svg?react";
import MenuIcon from "@/assets/icon/menu.svg?react";
import { useState } from "react";

const MobileHeader = () => {
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;

  const [toggle, setToggle] = useState(false);
  const menuOpenHandler = () => {
    setToggle(true);
  };
  return (
    <MobileHeaderWrap>
      <TopMenu>
        <LogoImg>
          <Logo />
        </LogoImg>
        <BtnArea>
          <DescBtn>
            <button>행사등록</button>
            <button>AI챗봇</button>
          </DescBtn>
          <button onClick={() => menuOpenHandler()} className="toggle_menu">
            <MenuIcon />
          </button>
        </BtnArea>
      </TopMenu>

      <NavWrap>
        <Nav>
          <NavItem>
            <Link to={""}>이번주 행사</Link>
          </NavItem>
          <NavItem>
            <Link to={""}>무료 행사</Link>
          </NavItem>
          <NavItem>
            <Link to={""}>온라인 행사</Link>
          </NavItem>
          <NavItem>
            <Link to={""}>메이트 PICK</Link>
          </NavItem>
        </Nav>
      </NavWrap>
      {/* 로그아웃 상태 */}
      {!loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to={"/login"}>로그인</Link>
            </li>
            <li>
              <Link to={"/login"}>회원가입</Link>
            </li>
          </ul>
        </MobileMenu>
      )}
      {/* 로그인 상태 */}
      {loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to={""}>신청 행사</Link>
            </li>
            <li>
              <Link to={""}>취소 내역</Link>
            </li>
            <li>
              <Link to={""}>관심 행사</Link>
            </li>
            <li>
              <Link to={""}>지난 행사</Link>
            </li>
            <li>
              <Link to={""}>내 정보 수정</Link>
            </li>
            <li>
              <Link to={""}>로그아웃</Link>
            </li>
          </ul>
        </MobileMenu>
      )}
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
