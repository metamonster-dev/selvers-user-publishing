import { userState } from "@/store/UserState";
import { useRecoilValue } from "recoil";
import { Link, useLocation } from "react-router-dom";
import MobileHeader from "./mobileHeader";
import { MaxFrame } from "@/styles/commonStyle";
import SearchBar from "@components/searchBar";
import {
  HeaderWrap,
  LogoImg,
  NavMenu,
  NavWrap,
  NavItem,
  Nav,
  BtnArea,
  AuthBtn,
  DescBtn,
} from "./headerStyle";
import Logo from "@/assets/logo_w.svg?react";
import Cart from "@/assets/icon/cart.svg?react";
import Calendar from "@/assets/icon/calendar.svg?react";
import Person from "@/assets/icon/person.svg?react";
import { useLayoutEffect, useState } from "react";

const Header = () => {
  const user = useRecoilValue(userState);
  const [mainPage, setMainPage] = useState(true);
  const loginState = user.isLogin;
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/") {
      setMainPage(true);
    } else {
      setMainPage(false);
    }
  }, [location.pathname]);

  return (
    <>
      <MaxFrame>
        <HeaderWrap>
          <LogoImg>
            <Link to={"/"}>
              <Logo />
            </Link>
          </LogoImg>
          <NavMenu>
            <NavWrap>
              {mainPage === true && (
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
              )}
              {/* 서브페이지 검색바 */}
              {mainPage === false && <SearchBar />}
            </NavWrap>
            <BtnArea>
              {/* 로그아웃 상태 */}
              {!loginState && (
                <AuthBtn $loginState={loginState}>
                  <div className="login">
                    <Link to={"/login"}>로그인</Link>
                  </div>
                  <div>
                    <Link to={"/join"}>회원가입</Link>
                  </div>
                </AuthBtn>
              )}
              {/* 로그인 상태 */}
              {loginState && (
                <AuthBtn>
                  <div>
                    <Link to={""}>
                      <Cart />
                    </Link>
                  </div>
                  <div>
                    <Link to={""}>
                      <Calendar />
                    </Link>
                  </div>
                  <div>
                    <Link to={"/mypage"}>
                      <Person />
                    </Link>
                  </div>
                </AuthBtn>
              )}

              <DescBtn>
                <button>행사등록</button>
                <button>AI챗봇</button>
              </DescBtn>
            </BtnArea>
          </NavMenu>
        </HeaderWrap>
      </MaxFrame>
      {/* 모바일 헤더 */}
      <MobileHeader />
    </>
  );
};

export default Header;
