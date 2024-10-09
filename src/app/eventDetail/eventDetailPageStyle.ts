import styled from "styled-components";

export const EventDetailPageWrap = styled.div`
  padding: 26px 0 185px;
  position: relative;
  @media (max-width: 1024px) {
    padding: 24px 0 76px;
  }
`;

export const MainContentWrap = styled.div`
  padding: 0 110px 0 56px;
  display: flex;
  gap: 51px;
`;

export const ContentWrap = styled.div`
  /* flex: 1 1 auto; */

  max-width: 1190px;
  @media (max-width: 1650px) {
    padding-left: 30px;
  }
`;
export const SideTab = styled.div`
  flex: 1 1 auto;
  width: 405px;
  /* position: absolute; */
  /* top: 0; */
  /* right: 110px; */
  color: #fff;
`;
