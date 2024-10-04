import { MyEventCardWrap, ThumbnailArea, InfoArea } from "./myEventCardStyle";

const MyEventCard = () => {
  return (
    <MyEventCardWrap>
      <ThumbnailArea>
        <img src="./dummy_image_01.png" />
      </ThumbnailArea>
      <InfoArea>
        <div>
          <div className="apply">
            <span className="state">참가 신청 완료</span>
            <span className="date">신청일 : 2024.08.24</span>
          </div>
          <div>
            <span>2024 케이펫페어</span>
            <span>2024/08/24 ~ 2024/08/24</span>
            <span>SETEC 제1전시장</span>
          </div>
        </div>
        <div>
          <button>AI 추천 부스 받기</button>
        </div>
        <div>
          <button>수정</button>
          <button>취소</button>
        </div>
      </InfoArea>
    </MyEventCardWrap>
  );
};

export default MyEventCard;
