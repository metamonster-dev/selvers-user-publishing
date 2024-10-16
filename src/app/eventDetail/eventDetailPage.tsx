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
import { useEventList } from "@/api/events/events.query";
import LoadingScreen from "@components/shared/LoadingScreen";

const EventDetailPage = () => {
  const token = localStorage.getItem("token");
  const {
    data: aiEventList,
    isLoading: isLoadingAI,
    error: errorAI,
  } = useEventList(1, token);

  if (isLoadingAI) {
    return <LoadingScreen />;
  }
  if (errorAI) {
    return <div>데이터 없음</div>;
  }

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
        eventList={aiEventList.data.items}
      />
    </EventDetailPageWrap>
  );
};

export default EventDetailPage;
