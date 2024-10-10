import Logo from "@/assets/logo_w_center.svg?react";
import { Link } from "react-router-dom";
import { FinishApplyPageWrap } from "./finishApplyPageStyle";

const FinishApplyPage = () => {
  return (
    <FinishApplyPageWrap>
      <div>
        <p className="logo">
          <Logo />
        </p>
        <p className="msg">행사 신청이 완료되었습니다</p>
        <div className="link_box">
          <span className="home">
            <Link to="/">홈으로 돌아가기</Link>
          </span>
          <span className="apply_list">
            <Link to="/mypage/apply-list">신청 내역 확인하기 &gt;</Link>
          </span>
        </div>
      </div>
    </FinishApplyPageWrap>
  );
};

export default FinishApplyPage;
