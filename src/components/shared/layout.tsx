import ScrollToTop from "./scrollToTop";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Main } from "./layoutStyle";

const Layout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </ScrollToTop>
  );
};

export default Layout;
