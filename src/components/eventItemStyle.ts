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
  font-size: larger;
  line-height: 1;
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
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 30px 10px 0;
  & .title {
    font-size: 24px;
    font-weight: 700;
    padding-bottom: 10px;
  }
  & .infomation {
    color: #b0b8c1;
    line-height: 1.2;
  }
  & .dday {
    padding: 5px 20px;
    background-color: #235ef3;
    border-radius: 9px;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }
  & .price {
    padding-top: 15px;
    font-size: 24px;
    font-weight: 700;
  }
`;
