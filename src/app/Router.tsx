import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "@components/shared/layout";
import MyPageLayout from "@components/shared/myPageLayout";
import Main from "@/app/page";
import Join from "@/app/auth/join/joinPage";
import JoinForm from "@/app/auth/join/form/joinFormPage";
import Login from "@/app/auth/login/loginPage";
import PasswordFindPage from "./auth/passwordFindPage";
import MyPage from "./mypage/myPage";
import CancelListPage from "./mypage/cancelListPage";
import WishListPage from "./mypage/wishListPage";
import PastListPage from "./mypage/pastListPage";
import EditInfomationPage from "./mypage/editInfomationPage";

import LinkPage from "./link";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "join",
          element: <Join />,
        },
        {
          path: "join/form",
          element: <JoinForm />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "login/password-find",
          element: <PasswordFindPage />,
        },
        {
          path: "mypage",
          element: <MyPageLayout />,
          children: [
            { path: "/mypage", element: <MyPage /> },
            { path: "cancel-list", element: <CancelListPage /> },
            { path: "wish-list", element: <WishListPage /> },
            { path: "past-list", element: <PastListPage /> },
            { path: "edit-infomation", element: <EditInfomationPage /> },
          ],
        },
      ],
      errorElement: <div style={{ color: "#fff" }}>없는 페이지 입니다.</div>,
    },
    {
      path: "/link",
      element: <LinkPage />,
      errorElement: <div style={{ color: "#fff" }}>없는 페이지 입니다.</div>,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/micemate-front" }
);
const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
