import { AgreeWrap } from "./agreePageStyle";

const MarketingInformation = () => {
  return (
    <AgreeWrap>
      <h2 className="title">[마케팅 정보 수신 동의]</h2>
      <div className="desc pb_20">
        마케팅 정보 수신 동의
        <br />
        <br />
        마이스메이트 (주식회사 마인즈그라운드)는 개인정보보호법 및
        정보통신망이용촉진 및 정보보호 등에 관한 법률 등 관계법령에 따라 광고성
        정보를 전송하기 위해 이용자의 사전 수신 동의를 받고 있습니다. 마케팅
        정보 수신 동의 시 마케팅 수신에 일괄 동의한 것으로 처리됩니다.
        <br />
        마이스메이트 광고성정보 수신동의 서비스 이용자의 개인정보를 수집하는
        목적은 다음과 같습니다.
      </div>
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
            <td width="50%">- 신규 기능 및 서비스 홍보 및 이용 권유</td>
            <td width="20%">이메일, 이름, 회사명</td>
            <td width="30%">회원탈퇴 또는 동의철회 시</td>
          </tr>
        </tbody>
      </table>
      <div className="desc">
        동의를 거부할 권리가 있으며, 동의 거부 시 회원가입을 통한 기본서비스
        이용은 가능하나, 광고 및 이벤트 안내 등의 서비스가 제한됩니다.
      </div>
    </AgreeWrap>
  );
};

export default MarketingInformation;
