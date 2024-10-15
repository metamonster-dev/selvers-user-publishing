import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userState } from "@/store/UserState";
import {
  EventDetailPageWrap,
  MainContentWrap,
  ContentWrap,
  SideTab,
} from "./eventDetailPageStyle";
import Thumbnail from "@components/eventDetail/thumbnailArea";
import Content from "@components/eventDetail/content";
import Community from "@components/eventDetail/community";
import EventSwiper from "@components/eventSwiper";
import { getEventList } from "@/api/events/eventsAPI";
import { EventListType } from "@/type";

const EventDetailPage = () => {
  const [aiEventList, setAiEventList] = useState<EventListType[]>([]);
  const user = useRecoilState(userState);
  const token = user[0].data.token;

  useEffect(() => {
    getEventList(1, token)
      .then((res) => setAiEventList(res.data.items))
      .catch((err) => console.log(err));
  }, []);

  return (
    <EventDetailPageWrap className="maxframe">
      <MainContentWrap>
        <ContentWrap>
          <Thumbnail applyBtn={true} />
          <Content />
        </ContentWrap>
        <SideTab>
          <Community />
        </SideTab>
      </MainContentWrap>
      <EventSwiper
        title="AI 메이트가 맞추는 ‘OOOO’님의 취향저격 전시 "
        eventList={aiEventList}
      />
    </EventDetailPageWrap>
  );
};

export default EventDetailPage;
