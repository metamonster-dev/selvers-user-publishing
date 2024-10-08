// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RouterProvider, createHashRouter } from "react-router-dom";

import Layout from "@components/shared/layout";
import MyPageLayout from "@components/shared/myPageLayout";
import Main from "@/app/page";
import JoinPage from "@/app/auth/join/joinPage";
import JoinFormPage from "@/app/auth/join/form/joinFormPage";
import LoginPage from "@/app/auth/login/loginPage";
import PasswordFindPage from "./auth/passwordFindPage";
import ApplyListPage from "./mypage/applyListPage";
import CancelListPage from "./mypage/cancelListPage";
import WishListPage from "./mypage/wishListPage";
import PastListPage from "./mypage/pastListPage";
import UserModifyPage from "./mypage/userModifyPage";
import EventListPage from "@/app/eventList/eventListPage";
import EventDetailPage from "@/app/eventDetail/eventDetailPage";
import BoothSelectPage from "@/app/mypage/boothSelectPage";
import BoothCheckPage from "@/app/mypage/boothCheckPage";

import LinkPage from "./link";

const router = createHashRouter(
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
          element: <JoinPage />,
        },
        {
          path: "join/form",
          element: <JoinFormPage />,
        },
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "login/password-find",
          element: <PasswordFindPage />,
        },
        {
          path: "mypage",
          element: <MyPageLayout />,
          children: [
            {
              path: "apply-list",
              element: <ApplyListPage />,
            },
            {
              path: "apply-list/booth-select/:id",
              element: <BoothSelectPage />,
            },
            { path: "apply-list/booth-check/:id", element: <BoothCheckPage /> },
            { path: "cancel-list", element: <CancelListPage /> },
            { path: "wish-list", element: <WishListPage /> },
            { path: "past-list", element: <PastListPage /> },
            { path: "user-modify", element: <UserModifyPage /> },
          ],
        },
        { path: "/list", element: <EventListPage /> },
        { path: "/detail/:id", element: <EventDetailPage /> },
      ],
      errorElement: <div style={{ color: "#fff" }}>없는 페이지 입니다.</div>,
    },
    {
      path: "/link",
      element: <LinkPage />,
      errorElement: <div style={{ color: "#fff" }}>없는 페이지 입니다.</div>,
    },
  ]
  // { basename: import.meta.env.DEV ? "/" : "/micemate-front" }
);
const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
