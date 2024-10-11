import { Link } from "react-router-dom";
import { AgreeWrap } from "./agreePageStyle";

const GenderBirthInformation = () => {
  return (
    <AgreeWrap>
      <h2 className="title">[성별 생년 정보 제공 동의]</h2>
      <table className="table">
        <thead>
          <tr>
            <th>수집목적</th>
            <th>수집항목</th>
            <th>보유/이용기간</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width="50%">
              신규 서비스 개발 및 마케팅에 활용. 통계학적 특성, 이용 형태 등에
              따른 맞춤형 서비스 제공, 광고 게재, 이벤트 참여 기회 제 공, 접속
              빈도 파악, 회원의 서비스 이용에 대한 통계
            </td>
            <td width="20%">생년, 성별</td>
            <td width="30%">회원탈퇴 또는 동의철회 시</td>
          </tr>
        </tbody>
      </table>
      <div className="desc">
        자세한 내용은 <Link to="/privacy-policy">개인정보 처리방침</Link>을
        참고하시기 바랍니다.
      </div>
    </AgreeWrap>
  );
};

export default GenderBirthInformation;
