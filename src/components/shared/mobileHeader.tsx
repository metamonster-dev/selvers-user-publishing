// import DrawerMenu from "@components/ui/drawerMenu";

import { Link } from "react-router-dom";
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

const MobileHeader = () => {
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
          <button>
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
      {/* <DrawerMenu>aadf</DrawerMenu> */}
    </MobileHeaderWrap>
  );
};

export default MobileHeader;
