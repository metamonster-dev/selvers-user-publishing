import { ApplyFormWrap, ExcelArea } from "./applyFormStyle";
import { InputTextD } from "./inputText";
import { SelectBoxB, SelectBoxC } from "./selectBox";
import { InputCheckboxA } from "./inputCheckbox";
import { InputTextAreaB } from "./inputTextArea";
import ExcelIcon from "@/assets/icon/excel_download.svg?react";
import IIcon from "@/assets/icon/info.svg?react";
import React, { Dispatch } from "react";

const applyType = ["개인 신청", "단체 신청"];
const optionList = ["항목1", "항목2", "항목3", "항목4"];

const ApplyForm = ({
  pageState,
  setPageState,
}: {
  pageState: string;
  setPageState: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ApplyFormWrap>
      <div className="field">
        <div className="input_box">
          <SelectBoxB
            label="신청 유형"
            required={false}
            optionList={applyType}
            setState={setPageState}
          />
          <div className="requird mt_16">
            사전 신청시 무료 / 현장 등록 시 유료(5,000원)
          </div>
        </div>
      </div>

      <h3>신청자 기본정보</h3>
      <div className="field">
        <div className="input_box">
          <InputTextD label="이름" type="text" id="name" required={true} />
        </div>
        <div className="input_box">
          <InputTextD label="이메일" type="email" id="email" required={true} />
        </div>
        <div className="input_box">
          <InputTextD label="휴대폰번호" type="tel" id="tel" required={true} />
        </div>
        <div className="input_box">
          <InputTextD
            label="소속 (회사/학교/기관)"
            type="text"
            id="team"
            required={true}
          />
        </div>
      </div>
      {pageState === "개인 신청" && (
        <>
          <h3>사전 설문</h3>
          <div className="field">
            <div className="input_box">
              <SelectBoxB
                label="행사 참여 목적"
                required={true}
                optionList={optionList}
              />
            </div>
            <div className="input_box">
              <SelectBoxC
                label="관심분야"
                required={true}
                optionList={optionList}
              >
                <InputCheckboxA label="항목1" id="type1" />
                <InputCheckboxA label="항목2" id="type2" />
                <InputCheckboxA label="항목3" id="type3" />
                <InputCheckboxA label="항목4" id="type4" />
              </SelectBoxC>
            </div>
            <div className="input_box">
              <InputTextAreaB label="세미나에서 궁금한 점 또는 기대되는 점을 기재해주세요" />
            </div>
          </div>
        </>
      )}
      {pageState === "단체 신청" && (
        <>
          <h3>단체신청</h3>
          <ExcelArea>
            <div className="title_area">
              <span className="tit">참가자 엑셀 등록하기</span>
              <span className="sub">
                엑셀 양식으로 업로드하여 한번에 참가자를 등록할 수 있습니다.
                (지원 파일 양식 : xlsx)
              </span>
            </div>
            <button className="download_btn">
              <span className="icon">
                <ExcelIcon />
              </span>
              <span className="txt">엑셀 양식 내려받기</span>
            </button>
            <p className="alret_chang">
              <span className="icon">
                <IIcon />
              </span>
              <span className="txt">
                정보/그룹을 수정한 경우 새로운 양식으로 등록해주세요.
              </span>
            </p>
            <div className="agree">
              <p className="sub">
                개인정보 보호를 위해 제3자 제공 동의가 완료된 참가자 명단을
                등록할 수 있습니다.
              </p>
              <InputCheckboxA
                label="네, 제3자 제공 동의를 받은 개인 정보입니다."
                id="agree1"
                required={true}
              />
            </div>
            <p className="sub">엑셀 양식을 업로드해주세요.</p>
            <div className="upload">
              <label htmlFor="excelUpload" className="label">
                <span className="btn">업로드 파일 선택</span>
                <span className="txt">또는 여기에 끌어서 놓기</span>
              </label>
              <input type="file" id="excelUpload" />
            </div>
          </ExcelArea>
        </>
      )}
    </ApplyFormWrap>
  );
};

export default ApplyForm;
