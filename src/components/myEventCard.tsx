import {
  MyEventCardWrap,
  ThumbnailArea,
  InfoArea,
  TextBox,
  EditButtonBox,
  LinkBox,
} from "./myEventCardStyle";

const MyEventCard = () => {
  return (
    <MyEventCardWrap>
      <ThumbnailArea>
        <img src="/dummy_image_01.png" />
      </ThumbnailArea>
      <InfoArea>
        <TextBox>
          <div className="apply">
            <span className="state">참가 신청 완료</span>
            <span className="date">신청일 : 2024.08.24</span>
          </div>
          <div className="txt_box">
            <span className="title">2024 케이펫페어</span>
            <span className="date">2024/08/24 ~ 2024/08/24</span>
            <span className="location">SETEC 제1전시장</span>
          </div>
        </TextBox>
        <EditButtonBox>
          <button>수정</button>
          <button>취소</button>
        </EditButtonBox>
        <LinkBox>
          <button>AI 추천 부스 받기</button>
        </LinkBox>
      </InfoArea>
    </MyEventCardWrap>
  );
};

export default MyEventCard;
