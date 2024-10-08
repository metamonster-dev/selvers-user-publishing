import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MainSwiperWrap } from "./mainSwiperStyle";

type ImgsProps = {
  bannerImgs?: string[];
  ImageArr?: string[];
};

const MainSwiper = ({ bannerImgs }: ImgsProps) => {
  return (
    <MainSwiperWrap>
      <Swiper
        slidesPerView={1.05}
        centeredSlides={true}
        spaceBetween={5}
        navigation={true}
        pagination={true}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            spaceBetween: 24,
          },
        }}
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

export default MainSwiper;
