import styled from "styled-components";

export const MainPageWrap = styled.div`
  padding-bottom: 210px;
  @media (max-width: 1024px) {
    padding-bottom: 40px;
  }
`;

export const SubBannerWrap = styled.div`
  margin-top: 160px;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
  & > img {
    width: 100%;
  }
`;
