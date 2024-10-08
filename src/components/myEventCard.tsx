import { useLayoutEffect, useState } from "react";
import {
  MyEventCardWrap,
  ThumbnailArea,
  InfoArea,
  TextBox,
  EditButtonBox,
  LinkBox,
  WishBtnBox,
} from "./myEventCardStyle";
import { MyEventListType } from "@/type";
import WishIcon from "@/assets/icon/heart_fill.svg?react";
import ConfirmModal from "./modal/confirmModal";
import { Link } from "react-router-dom";
const MyEventCard = ({
  applyDate,
  state,
  title,
  date,
  location,
  linkBtn,
}: MyEventListType) => {
  const [eventState, setEventState] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  useLayoutEffect(() => {
    if (state === "apply") {
      setEventState("참가 신청 완료");
    } else if (state === "cancel") {
      setEventState("취소 완료");
    } else if (state === "wish") {
      setEventState("관심 행사");
    } else if (state === "past") {
      setEventState("종료 행사");
    }
  }, []);

  return (
    <>
      <MyEventCardWrap>
        <ThumbnailArea>
          <Link to="/detail/01">
            {(state === "cancel" || state === "past") && (
              <span className="blind">{eventState}</span>
            )}

            <img src="/dummy_image_01.png" />
          </Link>
        </ThumbnailArea>
        <InfoArea>
          <TextBox>
            {(state === "apply" || state === "cancel") && (
              <div className="apply">
                <span className="state">{eventState}</span>
                <span className="date">신청일 : {applyDate}</span>
              </div>
            )}

            <div className="txt_box">
              <span className="title">{title}</span>
              <span className="date">{date}</span>
              <span className="location">{location}</span>
            </div>
          </TextBox>
          {state === "apply" && (
            <EditButtonBox>
              <button>수정</button>&nbsp;&nbsp;|&nbsp;&nbsp;
              <button
                onClick={() => {
                  setShowConfirm(true);
                }}
              >
                취소
              </button>
            </EditButtonBox>
          )}

          {linkBtn && (
            <LinkBox>
              {linkBtn === "AI 추천 부스 받기" && (
                <Link to="/mypage/apply-list/booth-select/01">{linkBtn}</Link>
              )}
              {linkBtn === "AI 추천 부스 확인" && (
                <Link to="/mypage/apply-list/booth-check/01">{linkBtn}</Link>
              )}
            </LinkBox>
          )}
          {eventState.length <= 0 && (
            <WishBtnBox>
              <button>
                <WishIcon />
              </button>
            </WishBtnBox>
          )}
        </InfoArea>
      </MyEventCardWrap>
      {showConfirm && (
        <ConfirmModal
          text="취소하시겠습니까? 취소 확정 후에는 복구하실 수 없습니다."
          setConfirm={setConfirm}
          setShowConfirm={setShowConfirm}
        />
      )}
    </>
  );
};

export default MyEventCard;
