import { Link } from "react-router-dom";
import { WithdrawFinishPageWrap } from "./withdrawFinishPageStyle";

const WithdrawFinishPage = () => {
  return (
    <WithdrawFinishPageWrap>
      <p className="desc_box">
        <span>탈퇴가 완료되었습니다.</span>
        <span>그 동안 서비스를 이용해주셔서 감사합니다.</span>
        <Link to="/">홈으로 돌아가기</Link>
      </p>
    </WithdrawFinishPageWrap>
  );
};

export default WithdrawFinishPage;
