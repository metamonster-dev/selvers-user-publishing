import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 214px;
  justify-content: center;
  height: 376px;
  @media (max-width: 1470px) {
    padding: 0 100px;
  }
  @media (max-width: 1350px) {
    padding: 0 50px;
  }
  @media (max-width: 1190px) {
    padding: 0 20px;
  }
  @media (max-width: 1050px) {
    padding: 0 10px;
  }
  @media (max-width: 1024px) {
    padding: 0 20px;
    height: 280px;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  & .logo {
    width: 100%;
    & > svg {
      max-width: 208px;
      width: 100%;
      height: auto;
      @media (max-width: 1024px) {
        max-width: 130px;
      }
    }
  }
  & .footer_nav {
    width: 80%;
    display: flex;
    font-weight: 500;
    color: #fff;
    gap: 32px;
    padding-bottom: 45px;
    @media (max-width: 1240px) {
      width: 100%;
    }
    @media (max-width: 1024px) {
      padding-top: 10px;
      font-size: 12px;
      gap: 15px;
      padding-bottom: 20px;
    }
  }
`;
export const RightArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  & .link_area {
    width: 100%;
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  & .sns_link {
    display: flex;
    gap: 16px;
    align-items: center;
    margin-right: 20px;
    @media (max-width: 1024px) {
      padding: 10px 0;
      gap: 12px;
    }
  }
  & .sns_link li a {
    display: block;
    width: 30px;
  }
  & .sns_link li a svg {
    width: 100%;
  }
  & .docs_link {
    display: flex;
    font-weight: 500;
    font-size: 14px;
    color: #fff;
    @media (max-width: 1240px) {
      font-size: 12px;
    }
  }
  & .desc {
    width: 80%;
    color: #b0b8c1;
    font-size: 14px;
    line-height: 1.3;
    @media (max-width: 1240px) {
      width: 100%;
      font-size: 10px;
    }
  }
  & .desc a {
    text-decoration: underline;
  }
  & .copyright {
    padding-top: 10px;
  }
`;
