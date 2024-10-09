import {
  CommunityWrap,
  TabMenu,
  AlretChang,
  TabContent,
} from "./communityStyle";
import { useState } from "react";
import ReviewList from "./reviewList";
import CompanyList from "./companyList";
import CloseIcon from "@/assets/icon/close.svg?react";

const Community = () => {
  const [activeTab, setActiveTab] = useState("review");
  const [infoClose, setInfoClose] = useState(true);
  return (
    <CommunityWrap>
      <TabMenu>
        <button
          onClick={() => setActiveTab("review")}
          className={activeTab === "review" ? "active" : ""}
        >
          리뷰
        </button>
        <button
          onClick={() => setActiveTab("company")}
          className={activeTab === "company" ? "active" : ""}
        >
          참여 기업
        </button>
      </TabMenu>
      {infoClose && (
        <AlretChang>
          <span>
            전시회 참여 후 리뷰를 작성해주세요.
            <br />
            고객님의 리뷰는 다른 사용자들에게 큰 도움이 됩니다
          </span>
          <button onClick={() => setInfoClose(false)}>
            <CloseIcon />
          </button>
        </AlretChang>
      )}
      <TabContent>
        {activeTab === "review" && <ReviewList />}
        {activeTab === "company" && <CompanyList />}
      </TabContent>
    </CommunityWrap>
  );
};

export default Community;
