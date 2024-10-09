import { StarRatingWrap, IconItem } from "./starRatingStyle";
import StarIcon from "@/assets/icon/star.svg?react";
import { useState } from "react";

const StarRating = () => {
  const STAR_IDX_ARR = ["first", "second", "third", "fourth", "five"];
  const [rating, setRating] = useState(0);
  console.log(rating);
  return (
    <StarRatingWrap>
      {STAR_IDX_ARR.map((item, index) => {
        return (
          <IconItem
            key={item}
            onClick={() => setRating(index + 1)}
            className={rating > index ? "fill" : "stroke"}
          >
            <StarIcon />
          </IconItem>
        );
      })}
    </StarRatingWrap>
  );
};
export default StarRating;
