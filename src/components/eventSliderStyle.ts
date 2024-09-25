import styled from "styled-components";

export const EventSliderWrap = styled.div`
  padding: 160px 0 0;
`;

export const TitleBox = styled.div`
  color: #fff;
  padding: 0 60px 40px;
  & h3 {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 13px;
  }
  & span {
    font-size: 24px;
  }
`;

export const SliderArea = styled.div`
  & > .event_swiper {
    padding: 0 60px;
  }
  & > .event_swiper .swiper-wrapper {
    overflow: hidden;
  }
  /* navigation */
  & > .event_swiper .swiper-button-prev,
  & > .event_swiper .swiper-button-next {
    width: 76px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    top: var(--swiper-navigation-top-offset, 43%);
  }
  & > .event_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
  }
  & > .event_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
  }
  & > .event_swiper .swiper-button-prev::after,
  & > .event_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & > .event_swiper .swiper-button-prev::after {
    background-image: url("src/assets/icon/arrow_prev.svg");
  }
  & > .event_swiper .swiper-button-next::after {
    background-image: url("src/assets/icon/arrow_next.svg");
  }
`;
