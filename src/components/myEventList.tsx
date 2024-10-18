import MyEventCard from "@components/myEventCard";
import { MyEventListWrap, Nodata } from "./myEventListStyle";
import { MyEventListType } from "@/type";
import { useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MyEventList = ({ list }: { list: MyEventListType[] }) => {
  const [eventState, setEventState] = useState({
    state: "",
    name: "",
    label: "",
  });
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/mypage/apply-list") {
      setEventState({
        state: "apply",
        name: "신청 행사",
        label: "참가 신청 완료",
      });
    } else if (location.pathname === "/mypage/cancel-list") {
      setEventState({ state: "cancel", name: "취소 행사", label: "취소 완료" });
    } else if (location.pathname === "/mypage/wish-list") {
      setEventState({ state: "wish", name: "관심 행사", label: "관심 행사" });
    } else if (location.pathname === "/mypage/past-list") {
      setEventState({ state: "end", name: "지난 행사", label: "지난 행사" });
    }
  }, [location]);

  return (
    <>
      {list && list.length <= 0 ? (
        <Nodata>
          <p>{`${eventState.name}가 없어요.`}</p>
        </Nodata>
      ) : (
        <MyEventListWrap>
          {list &&
            list.map((data) => {
              return (
                <MyEventCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  img={data.img}
                  event_start_date={data.event_start_date}
                  event_end_date={data.event_end_date}
                  position={data.position}
                  date={data.date}
                  is_booth={data.is_booth}
                  url={data.url}
                  eventState={eventState}
                />
              );
            })}
        </MyEventListWrap>
      )}
    </>
  );
};

export default MyEventList;
