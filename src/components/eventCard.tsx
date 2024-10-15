import { EventItemWrap, LikeBtn, Thumbnail, TextBox } from "./eventCardStyle";
import LikeIcon from "@/assets/icon/heart_fill.svg?react";
import UnLikeIcon from "@/assets/icon/heart_strok.svg?react";
import { EventListType } from "@/type";
import { dateFormat, priceFormat } from "@/util/stringTransition";
import { ddayCount } from "@/util/ddayCount";
import { Link } from "react-router-dom";

const EventCard = ({
  id,
  title,
  img,
  event_start_date,
  event_end_date,
  position,
  price,
  likes,
  like_state,
}: EventListType) => {
  return (
    <EventItemWrap>
      <Link to={`detail/${id}`}>
        <LikeBtn>
          <span>{likes}</span>
          <span className="heart_icon">
            {like_state ? <LikeIcon /> : <UnLikeIcon />}
          </span>
        </LikeBtn>
        <Thumbnail>
          <img src={img} />
        </Thumbnail>
        <TextBox>
          <div>
            <p className="title">{title}</p>
            <p className="infomation">
              {`${dateFormat(event_start_date)} ~ ${dateFormat(
                event_end_date
              )}`}
              <br />
              {position}
            </p>
          </div>
          <div>
            <p className="dday">{`D-${ddayCount(event_end_date)}`}</p>
            <p className="price">{`${priceFormat(price.toString())}원`}</p>
          </div>
        </TextBox>
      </Link>
    </EventItemWrap>
  );
};

export default EventCard;
