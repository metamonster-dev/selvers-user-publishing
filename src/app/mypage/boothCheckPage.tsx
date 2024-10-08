import {
  BoothCheckPageWrap,
  BoothMap,
  RecommendBoothBtn,
  SelectBoothList,
} from "./boothCheckPageStyle";
import BoothSearchBar from "@/components/boothSearchBar";
import DeleteIcon from "@/assets/icon/close.svg?react";

const BoothCheckPage = () => {
  return (
    <BoothCheckPageWrap>
      <BoothSearchBar />
      <BoothMap>
        <img src="./booth.png" />
      </BoothMap>
      <RecommendBoothBtn>
        <button>AI 추천 부스 확인</button>
      </RecommendBoothBtn>
      <SelectBoothList>
        <div>
          <p className="type_title">추천 부스 리스트</p>
          <ul className="booth_list commend">
            <li>A-02 네츄럴코어</li>
            <li>A-11 분독</li>
            <li>B-12 메이드인랩</li>
            <li>A-11 분독</li>
            <li>B-12 메이드인랩</li>
          </ul>
        </div>
        <div>
          <p className="type_title">관심 부스 리스트</p>
          <ul className="booth_list wish">
            <li>
              <span>A-02 마인즈그라운드</span>
              <span className="icon">
                <DeleteIcon />
              </span>
            </li>
          </ul>
        </div>
      </SelectBoothList>
    </BoothCheckPageWrap>
  );
};

export default BoothCheckPage;
