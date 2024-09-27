import styled from "styled-components";

export const MainSwiperWrap = styled.div`
  & > .main_swiper {
    padding: 45px 0;
    @media (max-width: 1024px) {
      padding: 20px 0 0;
    }
  }
  & > .main_swiper .swiper-slide figure {
    position: relative;
    padding-top: 43.79%;
    overflow: hidden;
    border-radius: 30px;
    @media (max-width: 1024px) {
      border-radius: 10px;
    }
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  & > .main_swiper .swiper-slide figure img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* navigation */
  & > .main_swiper .swiper-button-prev,
  & > .main_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 139px);
  }
  & > .main_swiper .swiper-button-prev::after,
  & > .main_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
  }
  & > .main_swiper .swiper-button-prev::after {
    background-image: url("./arrow_prev_main.svg");
  }
  & > .main_swiper .swiper-button-next::after {
    background-image: url("./arrow_next_main.svg");
  }
  /* pagination */
  & > .main_swiper .swiper-pagination {
    bottom: var(--swiper-pagination-bottom, 0);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .main_swiper .swiper-pagination .swiper-pagination-bullet {
    background-color: #fff;
  }
`;
