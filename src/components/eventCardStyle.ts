import styled from "styled-components";

export const EventItemWrap = styled.div`
  position: relative;
`;

export const LikeBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #000;
  position: absolute;
  top: 26px;
  right: 27px;
  border-radius: 50rem;
  z-index: 1;
  color: #fff;
  padding: 8px 10px;
  font-size: 18px;
  line-height: 1;
  @media (max-width: 1300px) {
    top: 25px;
    right: 25px;
  }
  @media (max-width: 1024px) {
    top: 20px;
    right: 20px;
    font-size: 10px;
    gap: 5px;
  }
  & .heart_icon {
    width: 13px;
    height: 13px;
  }
  & .heart_icon svg {
    width: 100%;
    height: 100%;
  }
`;

export const Thumbnail = styled.figure`
  position: relative;
  overflow: hidden;
  padding-top: 141.66%;
  border-radius: 20px;
  & > img {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 1024px) {
    border-radius: 12px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 30px 10px 0;
  @media (max-width: 1024px) {
    padding: 15px 5px 0;
  }
  & > div:first-child {
    padding-right: 10px;
  }
  & > div:last-child {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  & .title {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
    line-height: 1.2;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    & .title {
    }
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .infomation {
    color: #b0b8c1;
    line-height: 1.2;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .dday {
    padding: 5px 20px;
    background-color: #235ef3;
    border-radius: 9px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    @media (max-width: 1300px) {
      padding: 5px 13px;
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      padding: 4px 11px;
      font-size: 14px;
      border-radius: 4px;
    }
  }
  & .price {
    padding-top: 15px;
    font-size: 24px;
    font-weight: 700;
    @media (max-width: 1300px) {
      font-size: 20px;
    }
    @media (max-width: 1024px) {
      font-size: 14px;
      border-radius: 4px;
    }
  }
`;
