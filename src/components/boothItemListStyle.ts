import styled from "styled-components";

export const BoothList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  column-gap: 22px;
  row-gap: 30px;
  @media (max-width: 1700px) {
    column-gap: 10px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
  }
`;

export const BoothItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .title {
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & figure {
    position: relative;
    margin: 10px 0 12px;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    aspect-ratio: 100/100;

    & img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
    text-decoration: underline;
    font-size: 16px;
    font-weight: 700;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .num {
    display: none;
  }
  &.target .num,
  &.outline .num {
    z-index: 10;
    position: absolute;
    left: -12px;
    top: 12px;
    background-color: rgba(30, 158, 255, 1);
    display: block;
    z-index: 1;
    width: 46px;
    height: 46px;
    border-radius: 50rem;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1700px) {
      width: 40px;
      height: 40px;
      font-size: 20px;
      left: -5px;
      top: 15px;
    }
    @media (max-width: 1024px) {
      width: 24px;
      height: 24px;
      font-size: 16px;
      left: -3px;
      top: 17px;
    }
  }
  &.target figure {
    border: 10px solid rgba(30, 158, 255, 1);
    @media (max-width: 1024px) {
      border: 4px solid rgba(30, 158, 255, 1);
    }
    & img {
      width: 110%;
    }
  }
`;
