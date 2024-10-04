import { Link, useLocation } from "react-router-dom";
import { SideMenuWrap, OptionBox, MenuList, MenuItem } from "./sideMenuStyle";
import ToggleIcon from "@/assets/icon/arrow_toggle.svg?react";
import { useState } from "react";

const SideMenu = () => {
  const [isOn, setIsOn] = useState(false);
  const location = useLocation();

  const sideMenuItems = [
    {
      id: "00",
      name: "참여 행사 관리",
      type: "toggleButton",
      subMenu: [
        { id: "00-00", path: "/mypage", name: "신청 행사" },
        { id: "00-01", path: "/mypage/cancel-list", name: "취소 내역" },
        { id: "00-02", path: "/mypage/wish-list", name: "관심 행사" },
        { id: "00-03", path: "/mypage/past-list", name: "지난 행사" },
      ],
    },
    { id: "01", path: "/mypage/user-modify", name: "내 정보 수정" },
    { id: "02", name: "로그아웃", type: "button" },
  ];

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SideMenuWrap>
      <h2>마이페이지</h2>
      <MenuList>
        {sideMenuItems.map((data) => {
          if (data.type === "toggleButton") {
            return (
              <div key={data.id}>
                {/* 메인 토글 버튼 */}
                <MenuItem onClick={toggleDropdown} $isOn={isOn}>
                  참여 행사 관리
                  <span>
                    <ToggleIcon />
                  </span>
                </MenuItem>
                {/* 토글 서브 메뉴 */}
                <OptionBox $isOn={isOn}>
                  {data.subMenu &&
                    data.subMenu.map((data) => {
                      return (
                        <MenuItem
                          $target={location.pathname === data.path}
                          key={data.id}
                        >
                          <Link to={data.path}>{data.name}</Link>
                        </MenuItem>
                      );
                    })}
                </OptionBox>
              </div>
            );
          } else {
            // 메인 메뉴
            if (data.type !== "button") {
              return (
                <MenuItem
                  $target={location.pathname === data.path}
                  key={data.id}
                >
                  <Link to={data.path as string}>{data.name}</Link>
                </MenuItem>
              );
            } else {
              return <MenuItem key={data.id}>{data.name}</MenuItem>;
            }
          }
        })}
      </MenuList>
    </SideMenuWrap>
  );
};

export default SideMenu;
