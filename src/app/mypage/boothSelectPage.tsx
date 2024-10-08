import {
  BoothSelectPageWrap,
  TitleBox,
  Title,
  OffsetBox,
  Desc,
  BoothListSwiper,
  ButtonArea,
} from "./boothSelectPageStyle";
import BoothItemList from "@components/boothItemList";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import InfoIcon from "@/assets/icon/info.svg?react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BoothSelectPage = () => {
  const [offsetOn, setOffsetOn] = useState(true);

  const offsetHandler = () => {
    setOffsetOn((prev) => !prev);
  };

  return (
    <BoothSelectPageWrap>
      <TitleBox>
        <Title>
          <span className="main_title">AI 추천 부스</span>
          <button onClick={offsetHandler} className="offset_btn">
            <InfoIcon />
          </button>
          {offsetOn && (
            <OffsetBox>
              <span className="tit">AI 추천 부스 서비스 이용방법</span>
              <span>
                · 기업은 순위대로 5개 이상 골라주셔야 좀 더 정확한 추천이
                가능해요.
              </span>
              <span>
                · 참가기업에 대한 자세한 정보는 웹페이지를 참고해주세요.
              </span>
            </OffsetBox>
          )}
        </Title>

        <Desc>
          몇 가지 정보만 알려주시면 평균 5개 이상의 추천부스를 받을 수 있어요!
        </Desc>
      </TitleBox>

      <BoothListSwiper>
        <Swiper
          slidesPerView={1}
          navigation={true}
          modules={[Navigation]}
          spaceBetween={15}
          loop={true}
          breakpoints={{
            1400: {
              spaceBetween: 10,
            },
            1700: {
              spaceBetween: 22,
            },
          }}
          className="booth_list_swiper"
        >
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <BoothItemList />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </BoothListSwiper>
      <ButtonArea>
        <Link to="/mypage/apply-list/booth-check/01">다음</Link>
      </ButtonArea>
    </BoothSelectPageWrap>
  );
};

export default BoothSelectPage;
