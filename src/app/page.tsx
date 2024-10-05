import MainSwiper from "@components/mainSwiper";
import SearchBar from "@components/searchBar";
import EventSwiper from "@components/eventSwiper";
import SubBanner from "@components/shared/subBanner";
import { MainPageWrap } from "./pageStyle";
import eventList from "@/mockData/eventList.json";

const bannerImgs = [
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
];

const MainPage = () => {
  return (
    <MainPageWrap>
      <SearchBar />
      <MainSwiper bannerImgs={bannerImgs} />
      <EventSwiper
        title={"AI 메이트가 맞추는 취향저격 전시"}
        subTitle={
          "마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨"
        }
        eventList={eventList.eventList}
      />
      <EventSwiper
        title={"New! 따끈따끈 신규행사"}
        subTitle={"마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨"}
        eventList={eventList.eventList}
      />
      <SubBanner />
      <EventSwiper
        title={"마이스 메이트 인기 전시 모음 "}
        subTitle={"가장 관심을 많이 받고있는 인기 행사 놓치지마세요!"}
        eventList={eventList.eventList}
      />
      <EventSwiper
        title={"마이스 메이트 주말 특급 정보"}
        subTitle={"이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨"}
        eventList={eventList.eventList}
      />
    </MainPageWrap>
  );
};

export default MainPage;
