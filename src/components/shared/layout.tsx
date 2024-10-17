import ScrollToTop from "./scrollToTop";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";
import { Main } from "./layoutStyle";
import AlretModal from "@components/modal/alretModal";
import ConfirmModal from "@components/modal/confirmModal";

const Layout = () => {
  return (
    <ScrollToTop>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
      <ConfirmModal />
      <AlretModal />
    </ScrollToTop>
  );
};

export default Layout;
