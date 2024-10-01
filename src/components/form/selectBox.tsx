import { useState } from "react";
import { ReactNode } from "react";
import { SelectWrap, SelectOption, OptionBox } from "./selectBoxStyle";
import ArrowIcon from "@/assets/icon/select_arrow.svg?react";

type Props = {
  children: ReactNode;
};

export const SelectBoxA = ({ children }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SelectWrap>
      <SelectOption onClick={toggleDropdown} $isOn={isOn}>
        관심 분야
        <span>
          <ArrowIcon />
        </span>
      </SelectOption>
      <OptionBox $isOn={isOn}>{children}</OptionBox>
    </SelectWrap>
  );
};
