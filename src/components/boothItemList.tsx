import { Link } from "react-router-dom";
import { BoothList, BoothItem } from "./boothItemListStyle";

const BoothItemList = () => {
  return (
    <BoothList>
      {Array.from({ length: 21 }).map((_, index) => {
        let className = "";

        if (index === 3) {
          className = "target";
        } else if ([10, 15, 18, 20].includes(index)) {
          className = "outline";
        }
        return (
          <BoothItem key={index} className={className}>
            <span className="num">
              {index === 3
                ? 1
                : index == 10
                ? 2
                : index === 15
                ? 3
                : index === 18
                ? 4
                : index === 20
                ? 5
                : ""}
            </span>
            <p className="title">로이카 E-18</p>
            <figure>
              <img src="./dummy_image_02.png" alt="로이카 E-18" />
            </figure>
            <Link to="">홈페이지 바로가기</Link>
          </BoothItem>
        );
      })}
    </BoothList>
  );
};

export default BoothItemList;
