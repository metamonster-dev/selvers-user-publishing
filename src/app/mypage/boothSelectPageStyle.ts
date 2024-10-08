import styled from "styled-components";

export const BoothSelectPageWrap = styled.div`
  position: relative;
  padding: 0 0 97px;
  margin-bottom: 100px;
  color: #fff;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 20px;
  @media (max-width: 1024px) {
    padding: 0 0 24px;
    margin-bottom: 80px;
  }
`;

export const TitleBox = styled.div`
  padding: 30px 120px 82px;
  @media (max-width: 1700px) {
    padding: 30px 50px 82px;
  }
  @media (max-width: 1400px) {
    padding: 30px 30px 82px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px;
  }
`;

export const Title = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-height: 100px;
  @media (max-width: 1024px) {
    min-height: auto;
  }
  & .main_title {
    font-size: 40px;
    font-weight: 700;
    padding-right: 26px;
    @media (max-width: 1024px) {
      font-size: 20px;
      padding-right: 12px;
    }
  }
`;

export const OffsetBox = styled.div`
  position: absolute;
  left: 250px;
  width: 450px;
  background-color: #fff;
  padding: 15px 30px;
  border-radius: 10px;
  z-index: 10;
  @media (max-width: 1400px) {
    width: 400px;
  }
  @media (max-width: 1024px) {
    width: 310px;
    padding: 10px 15px 20px;
    left: 30px;
    top: 25px;
  }
  @media (max-width: 400px) {
    left: 0;
    width: 100%;
  }
  & span {
    font-weight: 500;
    display: block;
    font-size: 12px;
    color: #000;
    line-height: 1.3;
    @media (max-width: 1024px) {
      font-size: 10px;
    }
  }
  & .tit {
    font-weight: 600;
    padding-bottom: 8px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
  word-break: keep-all;
  @media (max-width: 1024px) {
    padding-top: 12px;
    font-size: 13px;
  }
`;

export const BoothListSwiper = styled.div`
  position: relative;
  & > .booth_list_swiper {
    padding: 0 120px;
    @media (max-width: 1700px) {
      padding: 0 50px;
    }
    @media (max-width: 1400px) {
      padding: 0 30px 160px;
    }
    @media (max-width: 1024px) {
      padding: 0 12px 74px;
    }
  }
  & > .booth_list_swiper::before,
  & > .booth_list_swiper::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    background-color: #15171c;
    width: 120px;
    z-index: 2;
    @media (max-width: 1700px) {
      width: 50px;
    }
    @media (max-width: 1400px) {
      width: 30px;
    }
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & > .booth_list_swiper::before {
    left: 0;
  }
  & > .booth_list_swiper::after {
    right: 0;
  }

  /* navigation */
  & > .booth_list_swiper .swiper-button-prev,
  & > .booth_list_swiper .swiper-button-next {
    width: 64px;
    height: 64px;
    border-radius: 50rem;
    overflow: hidden;
    @media (max-width: 1400px) {
      top: var(--swiper-navigation-top-offset, auto);
      bottom: 0;
    }
    @media (max-width: 1024px) {
      width: 40px;
      height: 40px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev {
    left: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      left: var(--swiper-navigation-sides-offset, 30px);
    }
    @media (max-width: 1024px) {
      left: var(--swiper-navigation-sides-offset, 12px);
    }
  }
  & > .booth_list_swiper .swiper-button-next {
    right: var(--swiper-navigation-sides-offset, 27px);
    @media (max-width: 1700px) {
      right: var(--swiper-navigation-sides-offset, 10px);
    }
    @media (max-width: 1400px) {
      right: var(--swiper-navigation-sides-offset, auto);
      left: 200px;
    }
    @media (max-width: 1024px) {
      left: 20%;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after,
  & > .booth_list_swiper .swiper-button-next::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    @media (max-width: 1024px) {
      background-size: 95px;
    }
  }
  & > .booth_list_swiper .swiper-button-prev::after {
    background-image: url("/arrow_prev_main.svg");
  }
  & > .booth_list_swiper .swiper-button-next::after {
    background-image: url("/arrow_next_main.svg");
  }
`;

export const ButtonArea = styled.div`
  padding: 60px 120px 0;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 1700px) {
    padding: 60px 60px 0;
  }
  @media (max-width: 1400px) {
    position: absolute;
    right: 30px;
    bottom: 97px;
    padding: 0;
  }
  @media (max-width: 1024px) {
    right: 12px;
    bottom: 20px;
  }
  & a {
    background-color: rgba(35, 94, 243, 1);
    border: 1px solid rgba(11, 12, 55, 1);
    padding: 15px 50px;
    color: #fff;
    border-radius: 10px;
    @media (max-width: 1024px) {
      font-size: 16px;
    }
  }
`;
