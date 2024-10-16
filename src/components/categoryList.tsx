import { CategoryListType } from "@/type";
import { CategoryListWrap, CateItem } from "./categoryListStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from "usehooks-ts";

const CategoryList = ({
  categoryList,
}: {
  categoryList: CategoryListType[];
}) => {
  const isSwiper = useMediaQuery("(max-width:1400px)");
  return (
    <CategoryListWrap className="maxframe">
      {!isSwiper && (
        <ul className="none_swiper_wrap">
          {categoryList.map((data) => {
            return <CateItem>{data.name}</CateItem>;
          })}
        </ul>
      )}

      {isSwiper && (
        <Swiper
          slidesPerView={2.5}
          centeredSlides={false}
          spaceBetween={3}
          loop={false}
          breakpoints={{
            800: {
              slidesPerView: 6.5,
            },
            500: {
              slidesPerView: 4.5,
            },
            400: {
              slidesPerView: 3.5,
            },
          }}
          className="category_swiper"
        >
          {categoryList.map((data) => {
            return (
              <SwiperSlide key={data.id}>
                <CateItem>{data.name}</CateItem>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </CategoryListWrap>
  );
};

export default CategoryList;
