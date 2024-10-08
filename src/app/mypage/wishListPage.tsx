import { WishListPageWrap } from "./wishListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";

const wishList = [
  {
    id: "0",
    state: "",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "1",
    state: "",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "2",
    state: "",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
  {
    id: "3",
    state: "",
    applyDate: "2024.08.24",
    title: "2024 케이펫페어",
    date: "2024/08/24 ~ 2024/08/24",
    location: "SETEC 제1전시장",
  },
];

const WishListPage = () => {
  return (
    <WishListPageWrap>
      <MyEventList list={wishList} />
      <Pagination />
    </WishListPageWrap>
  );
};

export default WishListPage;
