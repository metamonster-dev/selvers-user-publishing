import { Category } from "@/type";
import { CategoryListWrap, CateItem } from "./categoryListStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  categoryList: Category[];
};

const CategoryList = ({ categoryList }: Props) => {
  return (
    <CategoryListWrap className="maxframe">
      <Swiper
        slidesPerView={2.5}
        centeredSlides={false}
        spaceBetween={3}
        loop={false}
        touchRatio={1}
        breakpoints={{
          1400: {
            slidesPerView: 14,
            touchRatio: 0,
          },
          800: {
            slidesPerView: 6.5,
            touchRatio: 1,
          },
          500: {
            slidesPerView: 4.5,
            touchRatio: 1,
          },
          400: {
            slidesPerView: 3.5,
            touchRatio: 1,
          },
        }}
        className="category_swiper"
      >
        {categoryList.map((data) => {
          return (
            <SwiperSlide key={data.id}>
              <CateItem>{data.label}</CateItem>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </CategoryListWrap>
  );
};

export default CategoryList;
