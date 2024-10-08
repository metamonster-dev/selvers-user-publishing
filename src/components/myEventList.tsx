import MyEventCard from "@components/myEventCard";
import { MyEventListWrap } from "./myEventListStyle";
import { MyEventListType } from "@/type";

const MyEventList = ({ list }: { list: MyEventListType[] }) => {
  return (
    <MyEventListWrap>
      {list.map((data) => {
        return (
          <MyEventCard
            key={data.id}
            state={data.state}
            applyDate={data.applyDate}
            title={data.title}
            date={data.date}
            location={data.location}
            linkBtn={data.linkBtn}
          />
        );
      })}
    </MyEventListWrap>
  );
};

export default MyEventList;
