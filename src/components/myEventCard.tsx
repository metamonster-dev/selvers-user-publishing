import {
  MyEventCardWrap,
  ThumbnailArea,
  InfoArea,
  TextBox,
  EditButtonBox,
  WishBtnBox,
  LinkBox,
} from "./myEventCardStyle";
import { MyEventListType, CancelEventRequest } from "@/type";
import WishIcon from "@/assets/icon/heart_fill.svg?react";
import { Link } from "react-router-dom";
import { dateFormat } from "@/util/stringTransition";
import { useConfirm } from "@/hook/useConfirm";
import { useAlret } from "@/hook/useAlret";
import { useCancelEvent } from "@/api/events/events.query";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { confirmState } from "@/store/modalState";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface Props extends MyEventListType {
  eventState: { state: string; label: string };
}

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
  eventState,
}: Props) => {
  const useCancel = useCancelEvent();
  const { openConfirm } = useConfirm();
  const { openAlret } = useAlret();
  const queryClient = useQueryClient();
  const [confirmAgree, setConfirmAgree] = useState(false);
  const [targetEvent, setTargetEvent] = useState("");
  const confirmValue = useRecoilValue(confirmState);
  const confirmReset = useResetRecoilState(confirmState);

  const cancelBtnHandler = (eventId: string) => {
    const cancelConfirmData = {
      text: "취소하시겠습니까? 취소 확정 후에는 복구하실 수 없습니다.",
    };
    setTargetEvent(eventId);
    openConfirm(cancelConfirmData);
  };

  useEffect(() => {
    setConfirmAgree(confirmValue.confirm);
  }, [confirmValue.confirm]);

  useEffect(() => {
    if (confirmAgree === true && targetEvent.length > 0) {
      const token = localStorage.getItem("token");
      const cancelData: CancelEventRequest = {
        token: token,
        event_id: targetEvent,
      };
      useCancel.mutate(cancelData);
    }
  }, [confirmAgree]);

  useEffect(() => {
    if (useCancel.isSuccess) {
      const cancelSuccessData = {
        text: "취소가 완료되었습니다.",
      };

      setConfirmAgree(false);
      confirmReset();
      setTargetEvent("");

      openAlret(cancelSuccessData);
      queryClient.invalidateQueries({ queryKey: ["myEvent"] });
    }
    if (useCancel.isError) {
      setConfirmAgree(false);
      setTargetEvent("");
    }
  }, [useCancel.isSuccess, useCancel.isError]);

  return (
    <MyEventCardWrap>
      <ThumbnailArea>
        <Link to={`/detail/${id}`}>
          {eventState.state === "cancel" && (
            <span className="blind">취소완료</span>
          )}
          <img src={`https://api-test.micemate.io/storage/${img}`} />
        </Link>
      </ThumbnailArea>
      <InfoArea>
        <TextBox>
          {date && (
            <div className="apply">
              <span className="state">{eventState.label}</span>
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
        {eventState.state === "apply" && (
          <EditButtonBox>
            <button>수정</button>&nbsp;&nbsp;|&nbsp;&nbsp;
            <button onClick={() => cancelBtnHandler(JSON.stringify(id))}>
              취소
            </button>
          </EditButtonBox>
        )}
        {eventState.state === "apply" && (
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

        {eventState.state === "wish" && (
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
