// import { RouterProvider, createHashRouter } from "react-router-dom";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@components/shared/layout";
import Main from "@/app/page";
import Join from "@/app/auth/join/JoinPage";
import JoinForm from "@/app/auth/join/form/JoinFormPage";
import Login from "@/app/auth/login/LoginPage";
import PasswordFindPage from "./auth/passwordFindPage";

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
      ],
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
