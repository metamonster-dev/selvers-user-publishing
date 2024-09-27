import styled from "styled-components";

export const EventSliderWrap = styled.div`
  padding: 160px 0 0;
  @media (max-width: 1024px) {
    padding: 0;
  }
`;

export const TitleBox = styled.div`
  word-break: keep-all;
  color: #fff;
  padding: 0 60px 40px;
  @media (max-width: 1650px) {
    padding: 0 30px 20px;
  }
  @media (max-width: 1024px) {
    text-align: center;
    padding: 30px 16px 20px;
  }
  & h3 {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 13px;
    @media (max-width: 1024px) {
      font-size: 16px;
      padding-bottom: 5px;
    }
  }
  & span {
    font-size: 24px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`;

export const SliderArea = styled.div`
  & > .event_swiper {
    padding: 0 60px;
    @media (max-width: 1650px) {
      padding: 0 30px;
    }
    @media (max-width: 1024px) {
      padding: 0 16px;
    }
  }
  & > .event_swiper::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 2;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }
  & > .event_swiper::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    width: 60px;
    z-index: 1;
    @media (max-width: 1650px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      width: 16px;
    }
  }

  /* navigation */
  & > .event_swiper .swiper-button-prev,
  & > .event_swiper .swiper-button-next {
    width: 76px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    top: var(--swiper-navigation-top-offset, 43%);
    @media (max-width: 1650px) {
      width: 50px;
      height: 43px;
    }
    @media (max-width: 1024px) {
      width: 35px;
      height: 31px;
    }
  }
  & > .event_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      left: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1650px) {
      right: var(--swiper-navigation-sides-offset, 8px);
    }
    @media (max-width: 1024px) {
      right: var(--swiper-navigation-sides-offset, 5px);
    }
  }
  & > .event_swiper .swiper-button-prev::after,
  & > .event_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1650px) {
      background-size: 174%;
    }
  }
  & > .event_swiper .swiper-button-prev::after {
    background-image: url("./arrow_prev.svg");
  }
  & > .event_swiper .swiper-button-next::after {
    background-image: url("./arrow_next.svg");
  }
`;
