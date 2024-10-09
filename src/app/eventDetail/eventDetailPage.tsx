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
import eventList from "@/mockData/eventList.json";

const EventDetailPage = () => {
  return (
    <EventDetailPageWrap className="maxframe">
      <MainContentWrap>
        <ContentWrap>
          <Thumbnail />
          <Content />
        </ContentWrap>
        <SideTab>
          <Community />
        </SideTab>
      </MainContentWrap>
      <EventSwiper
        title="AI 메이트가 맞추는 ‘OOOO’님의 취향저격 전시 "
        eventList={eventList.eventList}
      />
    </EventDetailPageWrap>
  );
};

export default EventDetailPage;
