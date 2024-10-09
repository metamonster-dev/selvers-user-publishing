import styled from "styled-components";

export const ThumbnailWrap = styled.div`
  padding-bottom: 80px;
  & .thumb_img {
    max-width: 1191px;
    aspect-ratio: 1191/627;
    overflow: hidden;
    border-radius: 20px;
    & img {
      width: 100%;
    }
  }
`;

export const InfoBox = styled.div`
  position: relative;
  padding: 38px 34px;
  & .title_box {
    display: flex;
    align-items: center;
    gap: 20px;
    & h2 {
      color: #fff;
      font-size: 32px;
      font-weight: 800;
    }
    & .d_day {
      padding: 6px 20px;
      background-color: #235ef3;
      font-weight: 700;
      font-size: 24px;
      color: #fff;
      border-radius: 9px;
    }
  }

  & .desc_box {
    padding: 12px 0 15px;
    color: #b0b8c1;
    font-size: 20px;
    display: flex;
    align-items: center;
    & span {
      display: block;
    }
    & .date {
      position: relative;
      padding-right: 40px;
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
    }
  }

  & .rating_box {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 20px;
    color: #fff;
    font-weight: 500;
    & .icon {
      display: block;
      width: 18px;
      height: 18px;
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
  }

  & .apply_btn_box {
    position: absolute;
    right: 0;
    bottom: 28px;
    & .btn {
      border-radius: 8px;
      padding: 10px 16px;
      min-width: 177px;
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
