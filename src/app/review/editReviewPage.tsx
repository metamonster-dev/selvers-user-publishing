import {
  EditReviewPageWrap,
  ThumbnailArea,
  ReviewForm,
} from "./editReviewPageStyle";
import StarRating from "@components/form/starRating";
import { InputTextArea } from "@components/form/inputTextArea";

const EditReviewPage = () => {
  return (
    <EditReviewPageWrap>
      <ThumbnailArea>
        <img src="./dummy_image_01.png" />
      </ThumbnailArea>
      <ReviewForm>
        <div className="text_box">
          <span>ㅇㅇㅇ님, 참여한 행사는 어떠셨나요?</span>
          <span>
            리뷰를 남겨주시면 더 좋은 행사를 준비하는데에 큰 도움이 될 수
            있어요!
          </span>
        </div>
        <StarRating />
        <div className="input_text_area">
          <InputTextArea placeholder="참여한 행사에 대해 더 남겨주실 의견이 있으신가요?" />
        </div>
        <div className="submit_area">
          <button>리뷰 남기기</button>
        </div>
      </ReviewForm>
    </EditReviewPageWrap>
  );
};

export default EditReviewPage;
