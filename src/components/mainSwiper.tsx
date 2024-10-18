import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MainSwiperWrap } from "./mainSwiperStyle";
import { Link } from "react-router-dom";

type ImgsProps = {
  bannerImgs?: { img: string[]; url: string }[];
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
                <Link to={data.url}>
                  <figure>
                    <img
                      src={`https://api-test.micemate.io/storage/${data.img}`}
                      alt={`메인배너_${index}`}
                    />
                  </figure>
                </Link>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </MainSwiperWrap>
  );
};

export default MainSwiper;
