import { WishListPageWrap } from "./wishListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";
import { useMyEventQuery } from "@/api/users/users.query";
import { MyEventQueryType } from "@/type";
import { useState } from "react";

const WishListPage = () => {
  const [page, setPage] = useState<number>(1);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const data: MyEventQueryType = {
    token: token,
    user_id: userId,
    type: 3,
    page: page,
  };
  const useMyEvent = useMyEventQuery(data);

  return (
    <WishListPageWrap>
      <MyEventList list={useMyEvent.data?.data.items} />
      <Pagination
        total={useMyEvent.data?.data.total}
        page={page}
        setPage={setPage}
      />
    </WishListPageWrap>
  );
};

export default WishListPage;
