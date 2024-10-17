import { useLayoutEffect, useState } from "react";
import {
  MyEventCardWrap,
  ThumbnailArea,
  InfoArea,
  TextBox,
  EditButtonBox,
  WishBtnBox,
  LinkBox,
} from "./myEventCardStyle";
import { MyEventListType } from "@/type";
import WishIcon from "@/assets/icon/heart_fill.svg?react";
import { Link, useLocation } from "react-router-dom";
import { dateFormat } from "@/util/stringTransition";
import { useConfirm } from "@/hook/useConfirm";

const MyEventCard = ({
  id,
  title,
  img,
  event_start_date,
  event_end_date,
  position,
  date,
  is_booth,
  url,
}: MyEventListType) => {
  const [eventState, setEventState] = useState("");
  const location = useLocation();
  const { openModal } = useConfirm();
  const confirmData = {
    text: "취소하시겠습니까? 취소 확정 후에는 복구하실 수 없습니다.",
    onConfirm: () => {
      console.log("Confirmed");
    },
  };
  const eventCancelHandler = () => {
    openModal(confirmData);
  };

  useLayoutEffect(() => {
    if (location.pathname === "/mypage/apply-list") {
      setEventState("참가 신청 완료");
    } else if (location.pathname === "/mypage/cancel-list") {
      setEventState("취소 완료");
    } else if (location.pathname === "/mypage/wish-list") {
      setEventState("관심 행사");
    } else if (location.pathname === "/mypage/past-list") {
      setEventState("종료 행사");
    }
  }, [location]);

  return (
    <MyEventCardWrap>
      <ThumbnailArea>
        <Link to={`/detail/${id}`}>
          {location.pathname === "/mypage/cancel-list" && (
            <span className="blind">{eventState}</span>
          )}
          <img src={`https://api-test.micemate.io/storage/${img}`} />
        </Link>
      </ThumbnailArea>
      <InfoArea>
        <TextBox>
          {date && (
            <div className="apply">
              <span className="state">{eventState}</span>
              <span className="date">신청일 : {date}</span>
            </div>
          )}

          <div className="txt_box">
            <span className="title">{title}</span>
            <span className="date">{`${dateFormat(
              event_start_date
            )} ~ ${dateFormat(event_end_date)}`}</span>
            <span className="location">{position}</span>
          </div>
        </TextBox>
        {location.pathname === "/mypage/apply-list" && (
          <EditButtonBox>
            <button>수정</button>&nbsp;&nbsp;|&nbsp;&nbsp;
            <button onClick={eventCancelHandler}>취소</button>
          </EditButtonBox>
        )}
        {location.pathname === "/mypage/apply-list" && (
          <LinkBox>
            {is_booth && (
              <Link to="/mypage/apply-list/booth-select/01">
                AI 추천 부스 받기
              </Link>
            )}
            {url && (
              <Link to={url} target="_blank">
                행사 접속하기
              </Link>
            )}
          </LinkBox>
        )}

        {location.pathname === "/mypage/wish-list" && (
          <WishBtnBox>
            <button>
              <WishIcon />
            </button>
          </WishBtnBox>
        )}
      </InfoArea>
    </MyEventCardWrap>
  );
};

export default MyEventCard;
