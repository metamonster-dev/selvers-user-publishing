import { MainSwiper } from "@components/ui/swiper";
import SearchBar from "@components/searchBar";
import EventSlider from "@components/eventSlider";
import SubBanner from "@components/subBanner";

const bannerImgs = [
  "src/assets/banner_1.png",
  "src/assets/banner_2.png",
  "src/assets/banner_3.jpg",
];

const eventList = [
  {
    id: 0,
    imgUrl: "src/assets/card_1.png",
    title: "제 1회 북앤 콘텐츠 페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "송도 컨벤시아",
    dDay: "D-21",
    price: "15,000",
    likeNum: 1000,
  },
  {
    id: 1,
    imgUrl: "src/assets/card_2.png",
    title: "제 1회 북앤 콘텐츠 페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "송도 컨벤시아",
    dDay: "D-301",
    price: "무료",
    likeNum: 1000,
  },
  {
    id: 2,
    imgUrl: "src/assets/card_3.png",
    title: "제 1회 북앤 콘텐츠 페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "송도 컨벤시아",
    dDay: "D-1",
    price: "10,000원",
    likeNum: 1000,
  },
  {
    id: 4,
    imgUrl: "src/assets/card_4.png",
    title: "제 1회 북앤 콘텐츠 페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "송도 컨벤시아",
    dDay: "D-1",
    price: "무료",
    likeNum: 1000,
  },
  {
    id: 5,
    imgUrl: "src/assets/card_4.png",
    title: "제 1회 북앤 콘텐츠 페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "송도 컨벤시아",
    dDay: "D-1",
    price: "무료",
    likeNum: 1000,
  },
];

const MainPage = () => {
  return (
    <div>
      <SearchBar />
      <MainSwiper bannerImgs={bannerImgs} />
      <EventSlider
        title={"AI 메이트가 맞추는 취향저격 전시"}
        subTitle={
          "마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨"
        }
        eventList={eventList}
      />
      <EventSlider
        title={"New! 따끈따끈 신규행사"}
        subTitle={"마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨"}
        eventList={eventList}
      />
      <SubBanner />
      <EventSlider
        title={"마이스 메이트 인기 전시 모음 "}
        subTitle={"가장 관심을 많이 받고있는 인기 행사 놓치지마세요!"}
        eventList={eventList}
      />
      <EventSlider
        title={"마이스 메이트 주말 특급 정보"}
        subTitle={"이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨"}
        eventList={eventList}
      />
    </div>
  );
};

export default MainPage;
