import styled from "styled-components";

export const TabNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 37px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  & button {
    min-width: 162px;
    padding: 15px 10px;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
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
  padding: 83px 55px 100px;
  & section {
    padding-top: 100px;
  }
  & section:first-child {
    padding-top: 0;
  }
  & section h3 {
    color: #fff;
    font-weight: 800;
    padding-bottom: 20px;
  }

  & .info_list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    & .item {
      display: flex;
      font-weight: 500;
      align-items: center;
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
    height: 800px;
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
        }
      }
    }
  }
`;
export const FaQ = styled.section`
  & .question {
    cursor: pointer;
  }
  & .faq_item {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 25px 0;
  }
  & .faq_item:first-child {
    padding: 0;
    padding-bottom: 25px;
  }
  & .faq_item > div {
    display: flex;
    align-items: center;
    gap: 46px;
    font-size: 22px;
    font-weight: 500;
  }
  & .answer {
    padding-top: 25px;
  }
`;
export const ContactUs = styled.section``;
