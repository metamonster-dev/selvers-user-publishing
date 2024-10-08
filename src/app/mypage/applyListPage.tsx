import { ApplyListPageWrap } from "./applyListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";

const applyList = [
  {
    id: "0",
    state: "apply",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
    linkBtn: "AI 추천 부스 받기",
  },
  {
    id: "1",
    state: "apply",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "2",
    state: "apply",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
    linkBtn: "행사 접속하기",
  },
  {
    id: "3",
    state: "apply",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
    linkBtn: "AI 추천 부스 확인",
  },
];

const ApplyListPage = () => {
  return (
    <ApplyListPageWrap>
      <MyEventList list={applyList} />
      <Pagination />
    </ApplyListPageWrap>
  );
};

export default ApplyListPage;
