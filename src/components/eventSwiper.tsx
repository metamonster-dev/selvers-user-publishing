import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { EventSliderWrap, TitleBox, SliderArea } from "./eventSwiperStyle";
import EventCard from "./eventCard";
import { EventList } from "@/type";

type Props = {
  title?: string;
  subTitle: string;
  eventList: EventList[];
};

const EventSwiper = ({ title, subTitle, eventList }: Props) => {
  return (
    <EventSliderWrap className="maxframe">
      <TitleBox>
        {title && <h3>{title}</h3>}
        <span>{subTitle}</span>
      </TitleBox>
      <SliderArea>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          loopAdditionalSlides={1}
          observer={true}
          observeParents={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1650: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="event_swiper"
        >
          {eventList.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <EventCard
                  id={data.id}
                  imgUrl={data.imgUrl}
                  title={data.title}
                  date={data.date}
                  location={data.location}
                  dDay={data.dDay}
                  price={data.price}
                  likeNum={data.likeNum}
                  like={data.like}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </SliderArea>
    </EventSliderWrap>
  );
};

export default EventSwiper;
