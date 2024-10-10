import { useState } from "react";
import SortSelectBox from "@components/form/sortSelectBox";
import Pagination from "@components/shared/pagination";
import { useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { useMediaQuery } from "usehooks-ts";
import {
  AlretChang,
  ReviewListWrap,
  ReviewHeader,
  RatingsWrap,
  ReviewBody,
  Item,
} from "./reviewListStyle";
import { starPath } from "@/styles/iconPath";
import LikeIconFill from "@/assets/icon/hand_up_fill.svg?react";
import LikeIcon from "@/assets/icon/hand_up_path.svg?react";
import CloseIcon from "@/assets/icon/close.svg?react";

const sortOptions = [
  { text: "베스트순", value: "best" },
  { text: "최신순", value: "newest" },
];

//셀렉트 박스 변경시

const ReviewList = () => {
  const [infoClose, setInfoClose] = useState(true);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const navigate = useNavigate();
  const handleTypeChange = (target: string) => {
    navigate(`?type=${target}`);
  };

  return (
    <>
      {infoClose && (
        <AlretChang>
          <span>
            전시회 참여 후 리뷰를 작성해주세요.
            <br />
            고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다
          </span>
          <button onClick={() => setInfoClose(false)}>
            <CloseIcon />
          </button>
        </AlretChang>
      )}
      <ReviewListWrap>
        <ReviewHeader>
          <RatingsWrap>
            <div className="stars">
              <StarRatings
                rating={4.4}
                starRatedColor={"rgba(30, 158, 255, 1)"}
                starEmptyColor={"rgba(85, 85, 85, 1)"}
                starDimension="22px"
                starSpacing="0"
                svgIconPath={starPath}
              />
              <p className="total">4,423개 평점</p>
            </div>
            <div className="average">4.4</div>
          </RatingsWrap>
          <SortSelectBox
            options={sortOptions}
            width={122}
            selectedValue={"최신순"}
            onChange={handleTypeChange}
          />
        </ReviewHeader>
        <ReviewBody>
          {Array.from(isMobile ? { length: 5 } : { length: 10 }).map(
            (_, index) => {
              return (
                <Item key={index}>
                  <StarRatings
                    rating={3.1}
                    starRatedColor={"rgba(30, 158, 255, 1)"}
                    starEmptyColor={"rgba(85, 85, 85, 1)"}
                    starDimension="10px"
                    starSpacing="2px"
                    svgIconPath={starPath}
                  />
                  <p className="writer_info">
                    마이스미츄&nbsp;·&nbsp;2024년 08월 23일
                  </p>
                  <p className="desc">
                    극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도 재미있네요.
                    아쿠아맨2도 쿠플에서 볼 수 있기를...극장에서 보고 두번째는
                    쿠플에서 봤는데 다시봐도 재미있네요. 아쿠아맨2도 쿠플에서 볼
                    수 있기를...극장에서 보고 두번째는 쿠플에서 봤는데 다시봐도
                    재미있네요. 아쿠아맨2도 쿠플에서 볼 수 있기를...
                  </p>
                  <button className="like_btn">
                    <span className="icon">
                      {index === 0 ? <LikeIconFill /> : <LikeIcon />}
                    </span>
                    <span className="num">30</span>
                  </button>
                </Item>
              );
            }
          )}
        </ReviewBody>
        <Pagination />
      </ReviewListWrap>
    </>
  );
};

export default ReviewList;
