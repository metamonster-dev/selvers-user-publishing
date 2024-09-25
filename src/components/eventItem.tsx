import { EventItemWrap, LikeBtn, Thumbnail, TextBox } from "./eventItemStyle";
import LikeIcon from "@/assets/icon/heart_fill.svg?react";
// import UnLikeIcon from "@/assets/icon/heart_strok.svg?react";

type Props = {
  id: number;
  imgUrl: string;
  title: string;
  date: string;
  location: string;
  dDay: string;
  price: string;
  likeNum: number;
};

const EventItem = ({
  imgUrl,
  title,
  date,
  location,
  dDay,
  price,
  likeNum,
}: Props) => {
  return (
    <EventItemWrap>
      <LikeBtn>
        <span>{likeNum}</span>
        <LikeIcon />
      </LikeBtn>
      <Thumbnail>
        <img src={imgUrl} />
      </Thumbnail>
      <TextBox>
        <div>
          <p className="title">{title}</p>
          <p className="infomation">
            {date}
            <br />
            {location}
          </p>
        </div>
        <div>
          <p className="dday">{dDay}</p>
          <p className="price">{price}</p>
        </div>
      </TextBox>
    </EventItemWrap>
  );
};

export default EventItem;
