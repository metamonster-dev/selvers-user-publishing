import styled from "styled-components";

export const ThumbnailWrap = styled.div`
  padding-bottom: 80px;
  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
  & .thumb_img {
    max-width: 1191px;
    aspect-ratio: 1191/627;
    overflow: hidden;
    border-radius: 20px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
    & img {
      width: 100%;
    }
  }
`;

export const InfoBox = styled.div`
  position: relative;
  padding: 38px 185px 0 34px;
  @media (max-width: 1300px) {
    padding: 38px 185px 0 0;
  }
  @media (max-width: 1024px) {
    padding: 16px 0 30px;
  }
  & .title_box {
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 1024px) {
      justify-content: space-between;
    }
    & h2 {
      color: #fff;
      font-size: 32px;
      font-weight: 800;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .d_day {
      padding: 6px;
      background-color: #235ef3;
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      border-radius: 9px;
      min-width: 80px;
      text-align: center;
      @media (max-width: 1024px) {
        border-radius: 50rem;
        font-size: 10px;
        min-width: 40px;
      }
    }
  }

  & .desc_box {
    padding: 12px 0 15px;
    color: #b0b8c1;
    font-size: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 1.2;
    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: flex-start;
      font-size: 10px;
      padding-right: 105px;
    }
    & span {
      display: block;
    }
    & .date {
      position: relative;
      padding-right: 40px;
      @media (max-width: 1024px) {
        padding-right: 0;
      }
    }
    & .date::before {
      content: "";
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 18px;
      width: 2px;
      height: 20px;
      background-color: #b0b8c1;
      @media (max-width: 1024px) {
        display: none;
      }
    }
  }

  & .rating_box {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
    & .icon {
      display: block;
      width: 18px;
      height: 18px;
      @media (max-width: 1024px) {
        width: 12px;
        height: 12px;
      }
      & svg {
        width: 100%;
        height: 100%;
      }
    }
    & .count {
      color: #235ef3;
    }
  }

  & .public_btn_box {
    position: absolute;
    right: 0;
    top: 37px;
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: 1024px) {
      top: 53px;
      gap: 20px;
    }
    & .icon_btn {
      width: 55px;
      height: 55px;
      @media (max-width: 1024px) {
        width: 40px;
        height: 40px;
      }
      & svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }

  & .apply_btn_box {
    position: absolute;
    right: 0;
    bottom: 0;
    @media (max-width: 1024px) {
      margin-top: 23px;
      position: static;
    }
    & .btn {
      border-radius: 8px;
      padding: 11px 16px;
      min-width: 177px;
      font-weight: 600;
      text-align: center;
      @media (max-width: 1024px) {
        width: 100%;
        font-size: 16px;
      }
    }
    & .primary {
      background-color: #235ef3;
      color: #fff;
    }
    & .disable {
      cursor: default;
      background-color: #495057;
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;
