import styled from "styled-components";

export const MyEventCardWrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: rgba(41, 46, 55, 0.5);
  align-items: center;
  border-radius: 20px;
  padding: 37px 33px;
`;

export const ThumbnailArea = styled.figure`
  flex: 1 1 auto;
  width: 100%;
  max-width: 437px;
  min-width: 400px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  aspect-ratio: 437 / 246;

  & > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InfoArea = styled.div`
  padding-left: 45px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;

export const TextBox = styled.div`
  & .apply {
    display: flex;
    align-items: center;
    gap: 11px;
    & .state {
      padding: 12px 15px;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }
    & .date {
      color: #6c757d;
      font-size: 16px;
    }
  }

  & .txt_box {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
    & .title {
      margin: 22px 0 10px;
      font-size: 28px;
      color: #fff;
    }
    & .date,
    & .location {
      color: #b0b8c1;
    }
  }
`;

export const EditButtonBox = styled.div`
  position: absolute;
  right: 27px;
  bottom: 27px;
  display: flex;
  align-items: center;
  & > button {
    color: #fff;
  }
`;

export const LinkBox = styled.div`
  margin-left: auto;
  margin-right: 152px;
  & button {
    padding: 32px 56px;
    background-color: #fff;
    color: #235ef3;
    font-weight: 700;
    font-size: 24px;
    border-radius: 10px;
  }
`;
