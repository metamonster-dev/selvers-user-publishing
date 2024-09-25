import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
// import "./swiperStyle.css";
import { MainSwiperWrap } from "./swiperStyle";

type ImgsProps = {
  bannerImgs?: string[];
  ImageArr?: string[];
};

export const MainSwiper = ({ bannerImgs }: ImgsProps) => {
  return (
    <MainSwiperWrap>
      <Swiper
        slidesPerView={1.1}
        centeredSlides={true}
        spaceBetween={24}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        loop={true}
        className="main_swiper"
      >
        {bannerImgs &&
          bannerImgs.map((data, index) => {
            return (
              <SwiperSlide key={index}>
                <figure>
                  <img src={data} alt={`메인배너_${index}`} />
                </figure>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </MainSwiperWrap>
  );
};
