import { ApplyFormWrap, ExcelArea } from "./applyFormStyle";
import { InputTextD } from "./inputText";
import { SelectBoxB, SelectBoxC } from "./selectBox";
import { InputCheckboxA } from "./inputCheckbox";
import { InputTextAreaB } from "./inputTextArea";
import ExcelIcon from "@/assets/icon/excel_download.svg?react";
import IIcon from "@/assets/icon/info.svg?react";

const applyType = ["개인 신청", "단체 신청"];
const optionList = ["항목1", "항목2", "항목3", "항목4"];

const ApplyForm = () => {
  return (
    <ApplyFormWrap>
      <div className="field">
        <SelectBoxB label="신청 유형" required={true} ontionList={applyType} />
        <div className="requird">
          사전 신청시 무료 / 현장 등록 시 유료(5,000원)
        </div>
      </div>

      <h3>신청자 기본정보</h3>
      <div className="field">
        <InputTextD label="이름" type="text" id="name" required={true} />
        <InputTextD label="이메일" type="email" id="email" required={true} />
        <InputTextD label="휴대폰번호" type="tel" id="tel" required={true} />
        <InputTextD
          label="소속 (회사/학교/기관)"
          type="text"
          id="team"
          required={true}
        />
      </div>

      <h3>사전 설문</h3>
      <div className="field">
        <SelectBoxB
          label="행사 참여 목적"
          required={true}
          ontionList={optionList}
        />
        <SelectBoxC label="관심분야" required={true} ontionList={optionList}>
          <InputCheckboxA label="항목1" id="type1" />
          <InputCheckboxA label="항목2" id="type2" />
          <InputCheckboxA label="항목3" id="type3" />
          <InputCheckboxA label="항목4" id="type4" />
        </SelectBoxC>
        <InputTextAreaB label="세미나에서 궁금한 점 또는 기대되는 점을 기재해주세요" />
      </div>

      <h3>단체신청</h3>
      <ExcelArea>
        <div className="title_area">
          <span className="tit">참가자 엑셀 등록하기</span>
          <span className="sub">
            엑셀 양식으로 업로드하여 한번에 참가자를 등록할 수 있습니다. (지원
            파일 양식 : xlsx)
          </span>
        </div>
        <button className="download_btn">
          <span className="icon">
            <ExcelIcon />
          </span>
          <span className="txt">엑셀 양식 내려받기</span>
        </button>
        <p className="alret_chang">
          <span>
            <IIcon />
          </span>
          <span>정보/그룹을 수정한 경우 새로운 양식으로 등록해주세요.</span>
        </p>
        <p className="sub">
          개인정보 보호를 위해 제3자 제공 동의가 완료된 참가자 명단을 등록할 수
          있습니다.
        </p>
        <InputCheckboxA
          label="네, 제3자 제공 동의를 받은 개인 정보입니다."
          id="agree1"
        />
        <p className="sub">엑셀 양식을 업로드해주세요.</p>
        <div className="upload">
          <input type="file" />
        </div>
      </ExcelArea>
    </ApplyFormWrap>
  );
};

export default ApplyForm;
