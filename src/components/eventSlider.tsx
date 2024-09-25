import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { EventSliderWrap, TitleBox, SliderArea } from "./eventSliderStyle";
import { MaxFrame } from "@/styles/commonStyle";
import EventItem from "./eventItem";

type Props = {
  title?: string;
  subTitle: string;
  eventList: {
    id: number;
    imgUrl: string;
    title: string;
    date: string;
    location: string;
    dDay: string;
    price: string;
    likeNum: number;
  }[];
};

const EventSlider = ({ title, subTitle, eventList }: Props) => {
  return (
    <MaxFrame>
      <EventSliderWrap>
        <TitleBox>
          {title && <h3>{title}</h3>}
          <span>{subTitle}</span>
        </TitleBox>
        <SliderArea>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            navigation={true}
            modules={[Navigation]}
            loop={true}
            className="event_swiper"
          >
            {eventList.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <EventItem
                    id={data.id}
                    imgUrl={data.imgUrl}
                    title={data.title}
                    date={data.date}
                    location={data.location}
                    dDay={data.dDay}
                    price={data.price}
                    likeNum={data.likeNum}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SliderArea>
      </EventSliderWrap>
    </MaxFrame>
  );
};

export default EventSlider;
