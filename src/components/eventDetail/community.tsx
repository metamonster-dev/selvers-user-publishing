import { CommunityWrap, TabMenu, TabContent } from "./communityStyle";
import { useState } from "react";
import ReviewList from "./reviewList";
import CompanyList from "./companyList";

const Community = () => {
  const [activeTab, setActiveTab] = useState("review");
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

      <TabContent>
        {activeTab === "review" && <ReviewList />}
        {activeTab === "company" && <CompanyList />}
      </TabContent>
    </CommunityWrap>
  );
};

export default Community;
