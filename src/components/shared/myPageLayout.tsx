import SideMenu from "@components/sideMenu";
import { Outlet } from "react-router-dom";
import { MyPageLayoutWrap, PageTitle, ContentWrap } from "./myPageLayoutStyle";

const MyPageLayout = () => {
  return (
    <MyPageLayoutWrap>
      <SideMenu />
      <ContentWrap>
        <PageTitle>신청 행사</PageTitle>
        <Outlet />
      </ContentWrap>
    </MyPageLayoutWrap>
  );
};
export default MyPageLayout;
