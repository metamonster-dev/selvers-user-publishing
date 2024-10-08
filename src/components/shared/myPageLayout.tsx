import SideMenu from "@components/sideMenu";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MyPageLayoutWrap, PageTitle, ContentWrap } from "./myPageLayoutStyle";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import NextIcon from "@/assets/icon/page_arrow.svg?react";
import PrevIcon from "@/assets/icon/prev.svg?react";

type Title = {
  title?: string;
  subTitle?: string;
};

const MyPageLayout = () => {
  const [pageTitle, setPageTitle] = useState<Title>();
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:1024px)");

  useEffect(() => {
    if (location.pathname === "/mypage/apply-list") {
      setPageTitle({ title: "신청 행사" });
    } else if (location.pathname === "/mypage/cancel-list") {
      setPageTitle({ title: "취소 내역" });
    } else if (location.pathname === "/mypage/wish-list") {
      setPageTitle({ title: "관심 행사" });
    } else if (location.pathname === "/mypage/past-list") {
      setPageTitle({ title: "지난 행사" });
    } else if (location.pathname === "/mypage/user-modify") {
      setPageTitle({ title: "내 정보 수정" });
    } else if (location.pathname === `/mypage/apply-list/booth-select/01`) {
      setPageTitle({
        title: "신청 행사",
        subTitle: "2024 케이펫페어 서울",
      });
    } else if (location.pathname === `/mypage/apply-list/booth-check/01`) {
      setPageTitle({
        title: "신청 행사",
        subTitle: "2024 케이펫페어 서울",
      });
    } else if (location.pathname === `/mypage/user-modify/with-draw`) {
      setPageTitle({ title: "탈퇴하기" });
    } else {
      setPageTitle({});
    }
  }, [location.pathname]);

  return (
    <MyPageLayoutWrap className="maxframe">
      {!isMobile && <SideMenu />}
      <ContentWrap>
        {pageTitle && (
          <PageTitle $subPage={pageTitle?.subTitle}>
            {pageTitle.subTitle && (
              <span
                onClick={() => {
                  navigate(-1);
                }}
                className="prev_btn"
              >
                <PrevIcon />
              </span>
            )}
            <span className="title">{pageTitle.title}</span>
            {pageTitle.subTitle && (
              <>
                <NextIcon className="sub_icon" />
                <span className="sub_title">{pageTitle.subTitle}</span>
              </>
            )}
          </PageTitle>
        )}
        <Outlet />
      </ContentWrap>
    </MyPageLayoutWrap>
  );
};
export default MyPageLayout;
