import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "@components/shared/layout";
import Main from "@/app/page";
import Join from "@/app/auth/join/page";
import EmailJoin from "@/app/auth/join/email/page";

const router = createBrowserRouter([
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
        path: "join/email",
        element: <EmailJoin />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default Router;
