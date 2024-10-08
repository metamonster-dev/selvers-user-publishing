import { PastListPageWrap } from "./pastListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";

const pastList = [
  {
    id: "0",
    state: "past",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "1",
    state: "past",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "2",
    state: "past",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "3",
    state: "past",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
];

const PastListPage = () => {
  return (
    <PastListPageWrap>
      <MyEventList list={pastList} />
      <Pagination />
    </PastListPageWrap>
  );
};

export default PastListPage;
