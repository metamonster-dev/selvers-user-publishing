import { ApplyListPageWrap } from "./applyListStyled";
import MyEventCard from "@components/myEventCard";

const ApplyListPage = () => {
  return (
    <ApplyListPageWrap>
      <MyEventCard />
      <MyEventCard />
    </ApplyListPageWrap>
  );
};

export default ApplyListPage;
