import { PastListPageWrap } from "./pastListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";
import { useMyEventQuery } from "@/api/users/users.query";
import { MyEventQueryType } from "@/type";
import { useState } from "react";

const PastListPage = () => {
  const [page, setPage] = useState<number>(1);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const data: MyEventQueryType = {
    token: token,
    user_id: userId,
    type: 1,
    page: page,
  };
  const useMyEvent = useMyEventQuery(data);
  return (
    <PastListPageWrap>
      <MyEventList list={useMyEvent.data?.data.items} />
      <Pagination
        totalItem={useMyEvent.data?.total}
        page={page}
        setPage={setPage}
        pageCount={4}
      />
    </PastListPageWrap>
  );
};

export default PastListPage;
