import SideMenu from "@components/sideMenu";
import { Outlet } from "react-router-dom";
import { MyPageLayoutWrap, PageTitle } from "./myPageLayoutStyle";

const MyPageLayout = () => {
  return (
    <MyPageLayoutWrap>
      <SideMenu />
      <div>
        <PageTitle>신청 행사</PageTitle>
        <div>
          <Outlet />
        </div>
      </div>
    </MyPageLayoutWrap>
  );
};
export default MyPageLayout;
