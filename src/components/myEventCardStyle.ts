import styled from "styled-components";

export const MyEventCardWrap = styled.div`
  display: flex;
  background-color: rgba(41, 46, 55, 0.5);
  align-items: center;
`;

export const ThumbnailArea = styled.figure`
  position: relative;
  padding-top: 56.29%;
  & > img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const InfoArea = styled.div``;
