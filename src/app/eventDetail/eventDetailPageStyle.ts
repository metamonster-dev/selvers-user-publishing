import styled from "styled-components";

export const EventDetailPageWrap = styled.div`
  padding: 26px 0 185px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 24px 0 76px;
    & .EventSliderWrap .TitleBox {
      padding: 40px 16px 16px;
      text-align: left;
    }
  }
`;

export const MainContentWrap = styled.div`
  padding: 0 110px 0 56px;
  display: flex;
  gap: 51px;
  @media (max-width: 1650px) {
    padding: 0 30px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 0 20px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px;
    flex-direction: column;
  }
`;

export const ContentWrap = styled.div`
  max-width: 1190px;
`;
export const SideTab = styled.div`
  flex: 1 1 auto;
  width: 405px;
  min-width: 320px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`;
