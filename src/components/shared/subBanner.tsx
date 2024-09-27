import styled from "styled-components";

const SubBannerWrap = styled.div`
  margin-top: 160px;
  @media (max-width: 1024px) {
    margin-top: 25px;
  }
  & > img {
    width: 100%;
  }
`;

const SubBanner = () => {
  return (
    <SubBannerWrap>
      <img src="./sub_banner.png" />
    </SubBannerWrap>
  );
};

export default SubBanner;
