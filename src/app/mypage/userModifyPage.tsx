import { InputTextC } from "@components/form/inputText";
import { InputRadioB } from "@components/form/inputRadio";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import favoriteList from "@/mockData/favoritList.json";

import {
  UserModifyPageWrap,
  UserInfoBox,
  FormTable,
  ButtonArea,
} from "./userModifyPageStyle";
import { Link } from "react-router-dom";

const UserModifyPage = () => {
  return (
    <UserModifyPageWrap>
      <UserInfoBox>
        <div>
          <span className="label">이름</span>
          <span className="info">김고은</span>
        </div>
        <div>
          <span className="label">이메일(ID)</span>
          <span className="info">abcd@mindsground.com</span>
        </div>
        <div>
          <span className="label">기업명</span>
          <span className="info">마인즈그라운드</span>
        </div>
      </UserInfoBox>
      <FormTable>
        <InputTextC
          label="전화번호"
          type="tel"
          id="phone"
          placeholder="전화번호를 입력하세요"
        />
        <InputTextC
          label="비밀번호 변경"
          type="password"
          id="changePassword"
          placeholder="비밀번호를 입력하세요"
        />
        <div className="radio_box">
          <p className="label">성별</p>
          <InputRadioB
            label="남"
            id="man"
            name="gender"
            defaultChecked={true}
          />
          <InputRadioB label="여" id="woman" name="gender" />
        </div>
        <InputTextC
          label="생년월일"
          type="date"
          id="birth"
          placeholder="생년월일을 입력하세요"
        />
        <div className="favorite_box">
          <p className="label">관심분야</p>
          <div className="favorite_list">
            {favoriteList.favoriteList.map((data) => {
              return (
                <InputCheckboxA key={data.id} label={data.label} id={data.id} />
              );
            })}
          </div>
        </div>
        <ButtonArea>
          <button className="submit_btn">저장</button>
          <Link to="">마이스 메이트 탈퇴하기</Link>
        </ButtonArea>
      </FormTable>
    </UserModifyPageWrap>
  );
};

export default UserModifyPage;
