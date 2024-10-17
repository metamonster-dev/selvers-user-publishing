import MyEventCard from "@components/myEventCard";
import { MyEventListWrap } from "./myEventListStyle";
import { MyEventListType } from "@/type";

const MyEventList = ({ list }: { list: MyEventListType[] }) => {
  return (
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
            />
          );
        })}
    </MyEventListWrap>
  );
};

export default MyEventList;
