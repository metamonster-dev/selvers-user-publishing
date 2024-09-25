import styled from "styled-components";

export const FooterWrap = styled.footer`
  padding: 0 272px 0 212px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 376px;
`;

export const LeftArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & .logo {
    max-width: 208px;
    padding-bottom: 120px;
    & > svg {
      width: 100%;
      height: auto;
    }
  }
  & .link_area {
    display: flex;
    align-items: center;
  }
  & .sns_link {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 20px;
  }
  & .docs_link {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
  }
`;
export const RightArea = styled.div`
  & .footer_nav {
    display: flex;
    font-weight: 500;
    color: #fff;
    gap: 32px;
    padding-bottom: 45px;
  }
  & .desc {
    color: #b0b8c1;
    font-size: 14px;
    line-height: 1.3;
  }
  & .desc a {
    text-decoration: underline;
  }
  & .copyright {
    padding-top: 10px;
  }
`;
