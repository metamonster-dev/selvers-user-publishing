import { Link } from "react-router-dom";
import { ApplyAgreeFromWrap } from "./applyAgreeFromStyle";
import { InputCheckboxA } from "./inputCheckbox";

const ApplyAgreeFrom = ({ pageState }: { pageState: string }) => {
  return (
    <ApplyAgreeFromWrap>
      <h3>신청 내용</h3>
      <div className="apply_desc">
        <div className="type">
          <span className="tit">신청 유형</span>
          <span className="info">
            {pageState === "개인 신청" ? "개인 신청" : "단체 신청"}
          </span>
        </div>
        <div className="type">
          <span className="tit">신청 비용</span>
          <span className="info">사전등록 무료</span>
        </div>
      </div>
      <div className="all_chk">
        <InputCheckboxA label="전체 동의하기" id="allChk" />
      </div>
      <div className="agree_list">
        <div>
          <InputCheckboxA label="(필수) 성별 생년 정보 제공 동의" id="agree1" />
          <p className="link">
            <Link to="/gender-birth-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA label="(필수) 개인정보 수집 이용 동의" id="agree2" />
          <p className="link">
            <Link to="/personal-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA label="(필수) 제 3자 제공 동의" id="agree3" />
          <p className="link">
            <Link to="/onward-transfer" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
        <div>
          <InputCheckboxA label="(선택) 마케팅 정보 수신 동의" id="agree4" />
          <p className="link">
            <Link to="/markeyting-information" target="blank_">
              자세히 보기
            </Link>
          </p>
        </div>
      </div>
      <div className="submit_btn">
        <button>사전 신청하기</button>
      </div>
    </ApplyAgreeFromWrap>
  );
};

export default ApplyAgreeFrom;
