import { ThumbnailWrap, InfoBox } from "./thumbnailAreaStyle";
import WishIcon from "@/assets/icon/heart_btn.svg?react";
import ShardIcon from "@/assets/icon/shard_btn.svg?react";
import StarIcon from "@/assets/icon/star_fill.svg?react";
import { useState } from "react";
// import { Link } from "react-router-dom";

const Thumbnail = ({ applyBtn }: { applyBtn: boolean }) => {
  const [btnTest, setBtnTest] = useState(true);

  return (
    <ThumbnailWrap>
      <figure className="thumb_img">
        <img src="./dummy_thumb.png" />
      </figure>
      <InfoBox>
        <div className="title_box">
          <h2>2024 케이펫페어 서울</h2>
          <p className="d_day">D-1</p>
        </div>
        <div className="desc_box">
          <span className="date">2024년 09월 05일 ~ 2024월 09월 08일</span>
          <span className="location">양재 AT센터 제1전시장 A홀</span>
        </div>
        <div className="rating_box">
          <span className="icon">
            <StarIcon />
          </span>
          <span className="rating">4.4</span>
          <span className="count">&#40;4,423&#41;</span>
        </div>
        <div className="public_btn_box">
          <div className="icon_btn">
            <WishIcon />
          </div>
          <div className="icon_btn">
            <ShardIcon />
          </div>
        </div>
        {applyBtn && (
          <div className="apply_btn_box">
            {btnTest && (
              <div
                onClick={() => setBtnTest((prev) => !prev)}
                className="btn primary"
              >
                사전 신청하기
              </div>
            )}
            {!btnTest && (
              <div
                onClick={() => setBtnTest((prev) => !prev)}
                // disabled
                className="btn disable"
              >
                모집이 종료되었습니다.
              </div>
            )}
          </div>
        )}
      </InfoBox>
    </ThumbnailWrap>
  );
};

export default Thumbnail;
