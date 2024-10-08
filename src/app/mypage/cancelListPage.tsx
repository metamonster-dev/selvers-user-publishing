import { CancelListPageWrap } from "./cancelListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";

const cencelList = [
  {
    id: "0",
    state: "cancel",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "1",
    state: "cancel",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "2",
    state: "cancel",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "3",
    state: "cancel",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
];

const CancelListPage = () => {
  return (
    <CancelListPageWrap>
      <MyEventList list={cencelList} />
      <Pagination />
    </CancelListPageWrap>
  );
};

export default CancelListPage;
