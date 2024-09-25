import { ReactNode } from "react";
import { DrawerWrap, DrawerHeader, DrawerBody } from "./modalStyle";

const DrawerMenu = ({ children }: { children: ReactNode }) => {
  return (
    <DrawerWrap>
      <DrawerHeader>
        <div>ooo님</div>
      </DrawerHeader>
      <DrawerBody>{children}</DrawerBody>
    </DrawerWrap>
  );
};

export default DrawerMenu;
