import styled from "styled-components";

export const MyEventCardWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: rgba(41, 46, 55, 0.5);
  align-items: center;
  border-radius: 20px;
  padding: 37px 33px;
  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const ThumbnailArea = styled.figure`
  width: 100%;
  max-width: 437px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 437 / 246;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
  & a {
    display: block;
    width: 100%;
    height: 100%;
  }
  & img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & .blind {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const InfoArea = styled.div`
  width: 100%;
  padding-left: 45px;
  padding-right: 400px;
  align-items: center;
  @media (max-width: 1720px) {
    padding-left: 20px;
    padding-right: 260px;
  }
  @media (max-width: 1600px) {
    padding-right: 210px;
  }
  @media (max-width: 1400px) {
    padding-right: 0px;
  }
  @media (max-width: 1024px) {
    padding-left: 0;
    padding-top: 15px;
  }
`;

export const TextBox = styled.div`
  & .apply {
    display: flex;
    align-items: center;
    gap: 11px;
    margin-bottom: 22px;
    @media (max-width: 1024px) {
      justify-content: space-between;
      margin-bottom: 12px;
    }
    & .state {
      min-width: 130px;
      text-align: center;
      padding: 12px 10px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      font-weight: 700;
      @media (max-width: 1024px) {
        min-width: 100px;
        font-size: 13px;
        padding: 8px 16px;
      }
    }
    & .date {
      color: #6c757d;
      font-size: 16px;
      @media (max-width: 1024px) {
        font-size: 13px;
      }
    }
  }

  & .txt_box {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    & .title {
      margin: 0 0 10px;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      @media (max-width: 1024px) {
        font-size: 20px;
      }
    }
    & .date,
    & .location {
      color: #b0b8c1;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`;

export const EditButtonBox = styled.div`
  position: absolute;
  right: 27px;
  bottom: 27px;
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    position: static;
    padding: 4px 0 20px;
    justify-content: flex-end;
  }
  & > button {
    font-weight: 500;
    color: #fff;
    @media (max-width: 1024px) {
      font-size: 15px;
    }
  }
`;

export const LinkBox = styled.div`
  position: absolute;
  right: 152px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 1720px) {
    right: 70px;
  }
  @media (max-width: 1600px) {
    right: 27px;
  }
  @media (max-width: 1400px) {
    position: static;
    position: static;
    transform: translateY(0);
  }
  & a {
    display: block;
    min-width: 277px;
    padding: 32px 10px;
    background-color: #fff;
    color: #235ef3;
    font-weight: 700;
    font-size: 24px;
    border-radius: 10px;
    text-align: center;
    @media (max-width: 1720px) {
      min-width: 210px;
    }
    @media (max-width: 1600px) {
      margin-top: 10px;
      min-width: 277px;
      min-width: 200px;
      /* padding: 15px 10px; */
    }
    @media (max-width: 1400px) {
      padding: 15px 10px;
    }
    @media (max-width: 1024px) {
      margin-top: 0;
      min-width: auto;
      padding: 15px 10px;
      width: 100%;
      font-size: 20px;
    }
  }
`;

export const WishBtnBox = styled.div`
  position: absolute;
  top: 37px;
  right: 37px;
  @media (max-width: 1024px) {
    top: 22px;
    right: 22px;
  }
  & button {
    width: 55px;
    height: 55px;
    background-color: rgba(59, 64, 72, 1);
    border-radius: 50rem;
    display: flex;
    align-items: center;
    justify-content: center;
    & svg {
      width: 22px;
      height: 22px;
    }
  }
`;
