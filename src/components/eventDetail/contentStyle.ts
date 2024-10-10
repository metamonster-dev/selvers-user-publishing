import styled from "styled-components";

export const TabNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 37px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: sticky;
  top: 0;
  background-color: #000;
  z-index: 99;
  & a {
    cursor: pointer;
    display: block;
    min-width: 162px;
    padding: 14px 10px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    @media (max-width: 1024px) {
      min-width: auto;
      width: 100%;
      font-size: 15px;
      padding: 15px 2px;
    }
  }
  & .active {
    position: relative;
    color: rgba(49, 111, 233, 1);
  }
  & .active::after {
    content: "";
    position: absolute;
    background-color: rgba(49, 111, 233, 1);
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    border-radius: 50rem;
  }
`;

export const ContentWrap = styled.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  color: #fff;
  padding: 0 55px 100px;
  @media (max-width: 1300px) {
    padding: 0px 20px 100px;
  }
  @media (max-width: 1300px) {
    padding: 0px 20px 40px;
  }
  & section {
    padding-top: 100px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section:first-child {
    padding-top: 83px;
    @media (max-width: 1024px) {
      padding-top: 40px;
    }
  }
  & section h3 {
    color: #fff;
    font-weight: 800;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }

  & .info_list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1024px) {
      gap: 14px;
    }
    & .item {
      display: flex;
      font-weight: 500;
      align-items: center;
      @media (max-width: 1024px) {
        font-size: 14px;
        align-items: flex-start;
        word-break: keep-all;
      }
      & .tit {
        min-width: 100px;
        color: rgba(176, 184, 193, 1);
      }
      & .desc {
        color: #fff;
      }
    }
  }
`;

export const BasicInfo = styled.section``;
export const DetailInfo = styled.section`
  & .detail_box {
    position: relative;
    /* height: 800px; */
    overflow: hidden;
    & .image {
      width: 100%;
      & img {
        width: 100%;
      }
    }

    & .more_box {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background: linear-gradient(
        180deg,
        rgba(217, 217, 217, 0) 0%,
        rgba(136, 137, 139, 0.43) 39.5%,
        #121212 89.5%
      );
      & .btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 30px;
        & button {
          min-width: 177px;
          padding: 12px 10px;
          color: #fff;
          font-weight: 600;
          background-color: rgba(49, 111, 233, 1);
          border-radius: 10px;
          @media (max-width: 1024px) {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
export const FaQ = styled.section`
  & .icon {
    @media (max-width: 1024px) {
      width: 16px;
      height: 16px;
    }
    & svg {
      @media (max-width: 1024px) {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  & .question {
    cursor: pointer;
  }
  & .faq_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 0;
    @media (max-width: 1024px) {
      padding: 16px 0;
      line-height: 1.3;
    }
  }
  & .faq_item:first-child {
    padding: 0;
    padding-bottom: 25px;
    @media (max-width: 1024px) {
      padding-bottom: 16px;
    }
  }
  & .faq_item > div {
    display: flex;
    align-items: center;
    gap: 46px;
    font-size: 22px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
      gap: 11px;
    }
  }
  & .answer {
    padding-top: 25px;
    @media (max-width: 1024px) {
      padding-top: 16px;
    }
  }
`;
export const ContactUs = styled.section``;
