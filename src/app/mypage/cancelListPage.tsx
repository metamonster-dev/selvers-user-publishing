import { CancelListPageWrap } from "./cancelListPageStyle";
import Pagination from "@components/shared/pagination";
import MyEventList from "@components/myEventList";
import { useMyEventQuery } from "@/api/users/users.query";
import { MyEventQueryType } from "@/type";
import { useState } from "react";

const CancelListPage = () => {
  const [page, setPage] = useState<number>(1);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const data: MyEventQueryType = {
    token: token,
    user_id: userId,
    type: 2,
    page: page,
  };
  const useMyEvent = useMyEventQuery(data);

  return (
    <CancelListPageWrap>
      <MyEventList list={useMyEvent.data?.data.items} />
      {useMyEvent.data?.data.total >= 4 && (
        <Pagination
          totalItem={useMyEvent.data?.total}
          page={page}
          setPage={setPage}
          pageCount={4}
        />
      )}
    </CancelListPageWrap>
  );
};

export default CancelListPage;
