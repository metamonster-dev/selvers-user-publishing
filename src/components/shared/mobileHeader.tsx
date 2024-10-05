import { userState } from "@/store/UserState";
import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";
import { useState, useLayoutEffect } from "react";
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
import SearchIcon from "@/assets/icon/search.svg?react";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [mainPage, setMainPage] = useState(true);
  const [searchLink, setSearchLink] = useState(false);
  const user = useRecoilValue(userState);
  const loginState = user.isLogin;
  const location = useLocation();

  const menuOpenHandler = () => {
    setToggle(true);
    document.body.style.overflow = "hidden";
  };
  const menuCloseHandler = () => {
    setToggle(false);
    document.body.style.overflow = "auto";
  };
  useLayoutEffect(() => {
    if (location.pathname === "/") {
      setMainPage(true);
    } else {
      setMainPage(false);
    }

    if (location.pathname === "/" || location.pathname === "/list") {
      setSearchLink(false);
    } else {
      setSearchLink(true);
    }
  }, [location.pathname]);
  return (
    <MobileHeaderWrap>
      <TopMenu>
        <LogoImg>
          <Link to="/">
            <Logo />
          </Link>
        </LogoImg>
        <BtnArea>
          <DescBtn>
            <button>행사등록</button>
            <button>AI챗봇</button>
          </DescBtn>
          {searchLink && (
            <p className="searh_page_link">
              <Link to="/list">
                <SearchIcon />
              </Link>
            </p>
          )}
          <button onClick={() => menuOpenHandler()} className="toggle_menu">
            <MenuIcon />
          </button>
        </BtnArea>
      </TopMenu>
      {mainPage && (
        <NavWrap>
          <Nav>
            <NavItem>
              <Link to="/list">이번주 행사</Link>
            </NavItem>
            <NavItem>
              <Link to="/list">무료 행사</Link>
            </NavItem>
            <NavItem>
              <Link to="/list">온라인 행사</Link>
            </NavItem>
            <NavItem>
              <Link to="/list">메이트 PICK</Link>
            </NavItem>
          </Nav>
        </NavWrap>
      )}

      {/* 로그아웃 상태 */}
      {!loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to="/login" onClick={menuCloseHandler}>
                로그인
              </Link>
            </li>
            <li>
              <Link to="/join" onClick={menuCloseHandler}>
                회원가입
              </Link>
            </li>
          </ul>
        </MobileMenu>
      )}
      {/* 로그인 상태 */}
      {loginState && toggle && (
        <MobileMenu setClose={setToggle}>
          <ul>
            <li>
              <Link to="/mypage/apply-list" onClick={menuCloseHandler}>
                신청 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/cancel-list" onClick={menuCloseHandler}>
                취소 내역
              </Link>
            </li>
            <li>
              <Link to="/mypage/wish-list" onClick={menuCloseHandler}>
                관심 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/past-list" onClick={menuCloseHandler}>
                지난 행사
              </Link>
            </li>
            <li>
              <Link to="/mypage/user-modify" onClick={menuCloseHandler}>
                내 정보 수정
              </Link>
            </li>
            <li>
              <Link to={""} onClick={menuCloseHandler}>
                로그아웃
              </Link>
            </li>
          </ul>
        </MobileMenu>
      )}
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
