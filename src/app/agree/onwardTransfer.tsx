import { Link } from "react-router-dom";
import { AgreeWrap } from "./agreePageStyle";
const OnwardTransfer = () => {
  return (
    <div>
      <AgreeWrap>
        <h2 className="title">[제 3자 제공 동의]</h2>
        <div className="desc">
          국내 제3자 제공 동의서
          <br />
          <br />
          행사 참가자 관리 및 행사운영에 필요한 서비스 제공
          <br />
          (메일 및 문자 발송 등)
          <br />
          <br />
          마이스메이트 관리(주식회사 마인즈그라운드)의 개인정보 수집 이용 목적은
          다음과 같습니다. 내용을 자세히 읽어 보신 후 동의 여부를 결정하여
          주시기 바랍니다.
          <br />
          <br />
          제공받는 자: 마인즈그라운드
          <br />
          제공 목적: 행사 참가자 관리 및 행사운영에 필요한 서비스 제공
          <br />
          제공 항목: 이름/이메일/기타 업로드 파일 내 포함된 주최사가 수집한
          개인정보
          <br />
          제공 받은 자의 보유·이용기간: 주최사가 등록된 정보를 삭제하거나
          주최사의 회원탈퇴 까지
          <br />
          자세한 내용은 <Link to="/privacy-policy">개인정보처리방침</Link>을
          확인해주세요.
        </div>
      </AgreeWrap>
    </div>
  );
};

export default OnwardTransfer;
