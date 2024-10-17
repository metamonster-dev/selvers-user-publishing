import MainSwiper from "@components/mainSwiper";
import SearchBar from "@components/searchBar";
import EventSwiper from "@components/eventSwiper";
import SubBanner from "@components/shared/subBanner";
import { MainPageWrap } from "./pageStyle";
import { useEventList } from "@/api/events/events.query";
import LoadingScreen from "@components/shared/LoadingScreen";

const bannerImgs = [
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
];

const MainPage = () => {
  const token = localStorage.getItem("token");

  // 각 데이터의 로딩 및 에러 상태를 처리
  const {
    data: aiEventList,
    isLoading: isLoadingAI,
    error: errorAI,
  } = useEventList(1, token);
  const {
    data: newEventList,
    isLoading: isLoadingNew,
    error: errorNew,
  } = useEventList(2, token);
  const {
    data: hotEventList,
    isLoading: isLoadingHot,
    error: errorHot,
  } = useEventList(3, token);
  const {
    data: bestEventList,
    isLoading: isLoadingBest,
    error: errorBest,
  } = useEventList(4, token);

  if (isLoadingAI || isLoadingNew || isLoadingHot || isLoadingBest) {
    return <LoadingScreen />;
  }

  if (errorAI || errorNew || errorHot || errorBest) {
    return <div>오류가 발생했습니다. 데이터를 불러올 수 없습니다.</div>;
  }

  return (
    <MainPageWrap>
      <SearchBar />

      <MainSwiper bannerImgs={bannerImgs} />

      <EventSwiper
        title="AI 메이트가 맞추는 취향저격 전시"
        subTitle="마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨"
        eventList={aiEventList.data.items}
      />
      <EventSwiper
        title="New! 따끈따끈 신규행사"
        subTitle="마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨"
        eventList={newEventList.data.items}
      />
      <SubBanner />
      <EventSwiper
        title="마이스 메이트 인기 전시 모음 "
        subTitle="가장 관심을 많이 받고있는 인기 행사 놓치지마세요!"
        eventList={hotEventList.data.items}
      />
      <EventSwiper
        title="마이스 메이트 주말 특급 정보"
        subTitle="이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨"
        eventList={bestEventList.data.items}
      />
    </MainPageWrap>
  );
};

export default MainPage;
