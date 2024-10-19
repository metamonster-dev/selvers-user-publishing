import styled from "styled-components";

export const MyPageLayoutWrap = styled.div`
  position: relative;
  display: flex;
  padding: 0px 110px 0 0;
  @media (max-width: 1400px) {
    padding: 0px 70px 0 0;
  }
  @media (max-width: 1200px) {
    padding: 0px 20px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
`;

export const PageTitle = styled.h3<{ $subPage?: string }>`
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  padding-bottom: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
    gap: 0px;
  }
  & .title {
    @media (max-width: 1024px) {
      display: ${(props) => props.$subPage && "none"};
    }
  }
  & .prev_btn {
    position: relative;
    width: 32px;
    height: 32px;
    border-radius: 50rem;
    overflow: hidden;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
    }
    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: 1024px) {
        width: 76px;
        height: 76px;
      }
    }
  }
  & .sub_icon {
    @media (max-width: 1024px) {
      display: ${(props) => props.$subPage && "none"};
    }
  }
`;
export const ContentWrap = styled.div`
  padding-left: 364px;
  width: 100%;
  min-height: 90vh;
  @media (max-width: 1600px) {
    padding-left: 324px;
  }
  @media (max-width: 1400px) {
    padding-left: 280px;
  }
  @media (max-width: 1024px) {
    padding: 0;
    min-height: auto;
  }
`;
