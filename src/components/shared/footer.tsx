import Logo from "@/assets/logo_w.svg?react";
import InstargramIcon from "@/assets/icon/Instagram.svg?react";
import YoutubeIcon from "@/assets/icon/youtube.svg?react";
import NaverBlogIcon from "@/assets/icon/naver_blog.svg?react";
import EmailIcon from "@/assets/icon/email.svg?react";
import { Link } from "react-router-dom";
import { FooterWrap, LeftArea, RightArea } from "./footerStyle";

const Footer = () => {
  return (
    <FooterWrap className="maxframe">
      <LeftArea>
        <p className="logo">
          <Logo />
        </p>
        <ul className="footer_nav">
          <li>
            <Link to="/event-list?page=1&date=1">이번주 행사</Link>
          </li>
          <li>
            <Link to="/event-list?page=1&price=2">무료 행사</Link>
          </li>
          <li>
            <Link to="/event-list?page=1&progress=2">온라인 행사</Link>
          </li>
          <li>
            <Link to="/event-list">메이트 PICK</Link>
          </li>
        </ul>
      </LeftArea>
      <RightArea>
        <div className="link_area">
          <ul className="sns_link">
            <li>
              <Link to={""}>
                <InstargramIcon />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <YoutubeIcon />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <NaverBlogIcon />
              </Link>
            </li>
            <li>
              <Link to={""}>
                <EmailIcon />
              </Link>
            </li>
          </ul>
          <div className="docs_link">
            <Link to={""}>창업기업확인서 받기 </Link>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to={""}>사회적기업확인서 받기</Link>
          </div>
        </div>
        <div className="desc">
          <p>
            마인즈그라운드 주식회사&nbsp;&nbsp;|&nbsp;&nbsp;대표이사 :
            민환기&nbsp;&nbsp;|&nbsp;&nbsp;사업자 등록번호 : 732-87-01581
          </p>
          <p>서울특별시 금천구 가산디지털1로 171 SKV1 301호</p>
          <p>
            Tel : 02-6747-7513&nbsp;&nbsp;|&nbsp;&nbsp;Fax : 02
            -6499-7513&nbsp;&nbsp;|&nbsp;&nbsp;E-mail : admin@mindsground.com
          </p>
          <p>
            <Link to="/privacy-policy">개인정보처리방침</Link>
          </p>
          <p className="copyright">
            Copyright © 마인즈그라운드 주식회사. All Rights Reserved.
          </p>
        </div>
      </RightArea>
    </FooterWrap>
  );
};

export default Footer;
