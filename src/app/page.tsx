import MainSwiper from "@components/mainSwiper";
import SearchBar from "@components/searchBar";
import EventSwiper from "@components/eventSwiper";
import SubBanner from "@components/shared/subBanner";
import { MainPageWrap } from "./pageStyle";
import { getEventList } from "@/api/events/eventsAPI";
import { Dispatch, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/store/UserState";
import { EventListType } from "@/type";

const bannerImgs = [
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
  "./banner_1.png",
  "./banner_2.png",
  "./banner_3.png",
];

const MainPage = () => {
  const user = useRecoilState(userState);
  const token = user[0].data.token;

  const [aiEventList, setAiEventList] = useState<EventListType[]>([]);
  const [newEventList, setNewEventList] = useState<EventListType[]>([]);
  const [hotEventList, setHotEventList] = useState<EventListType[]>([]);
  const [bestEventList, setBestEventList] = useState<EventListType[]>([]);

  const eventListMap: {
    [key: number]: Dispatch<React.SetStateAction<EventListType[]>>;
  } = {
    1: setAiEventList,
    2: setNewEventList,
    3: setHotEventList,
    4: setBestEventList,
  };

  useEffect(() => {
    const fetchEventList = (type: number, token: string | null) => {
      getEventList(type, token)
        .then((res) => eventListMap[type](res.data.items))
        .catch((err) => console.log(err));
    };
    [1, 2, 3, 4].forEach((type) => fetchEventList(type, token));
  }, []);

  return (
    <MainPageWrap>
      <SearchBar />
      <MainSwiper bannerImgs={bannerImgs} />
      <EventSwiper
        title="AI 메이트가 맞추는 취향저격 전시"
        subTitle="마이스 메이트가 추천해드려요! 회원가입하면 더 정확한 추천을 받을 수 있어요 ✨"
        eventList={aiEventList}
      />
      <EventSwiper
        title="New! 따끈따끈 신규행사"
        subTitle="마이스 메이트에 새롭게 등록된 행사를 모아봤어요 ✨"
        eventList={newEventList}
      />
      <SubBanner />
      <EventSwiper
        title="마이스 메이트 인기 전시 모음 "
        subTitle="가장 관심을 많이 받고있는 인기 행사 놓치지마세요!"
        eventList={hotEventList}
      />
      <EventSwiper
        title="마이스 메이트 주말 특급 정보"
        subTitle="이번 주말, 마이스 메이트가 추천하는 핫한 행사 ✨"
        eventList={bestEventList}
      />
    </MainPageWrap>
  );
};

export default MainPage;
