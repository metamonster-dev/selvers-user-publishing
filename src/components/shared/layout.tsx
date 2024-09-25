import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Main } from "./layoutStyle";

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout;
