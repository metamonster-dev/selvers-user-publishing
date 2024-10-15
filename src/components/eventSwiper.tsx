import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { EventSliderWrap, TitleBox, SliderArea } from "./eventSwiperStyle";
import EventCard from "./eventCard";
import { EventListType } from "@/type";

type Props = {
  title: string;
  subTitle?: string;
  eventList?: EventListType[];
};

const EventSwiper = ({ title, subTitle, eventList }: Props) => {
  return (
    <EventSliderWrap className="maxframe EventSliderWrap">
      <TitleBox className="TitleBox">
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
          {eventList &&
            eventList.map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <EventCard
                    id={data.id}
                    title={data.title}
                    img={data.img}
                    event_start_date={data.event_start_date}
                    event_end_date={data.event_end_date}
                    position={data.position}
                    price={data.price}
                    likes={data.likes}
                    like_state={data.like_state}
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
