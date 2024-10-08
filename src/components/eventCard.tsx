import { EventItemWrap, LikeBtn, Thumbnail, TextBox } from "./eventCardStyle";
import LikeIcon from "@/assets/icon/heart_fill.svg?react";
import UnLikeIcon from "@/assets/icon/heart_strok.svg?react";
import { EventList } from "@/type";
import { Link } from "react-router-dom";

const EventCard = ({
  imgUrl,
  title,
  date,
  location,
  dDay,
  price,
  likeNum,
  like,
}: EventList) => {
  return (
    <EventItemWrap>
      <Link to="/detail/01">
        <LikeBtn>
          <span>{likeNum}</span>
          <span className="heart_icon">
            {like ? <LikeIcon /> : <UnLikeIcon />}
          </span>
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
      </Link>
    </EventItemWrap>
  );
};

export default EventCard;
