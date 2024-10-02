import { useState } from "react";
import { ReactNode } from "react";
import { SelectWrap, SelectOption, OptionBox } from "./selectBoxStyle";
import ArrowIcon from "@/assets/icon/select_arrow.svg?react";

type Props = {
  text: string;
  children: ReactNode;
};

export const SelectBoxA = ({ text, children }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SelectWrap>
      <SelectOption onClick={toggleDropdown} $isOn={isOn}>
        {text}
        <span>
          <ArrowIcon />
        </span>
      </SelectOption>
      <OptionBox $isOn={isOn}>{children}</OptionBox>
    </SelectWrap>
  );
};

export const SelectBoxB = ({ text, children }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SelectWrap>
      <SelectOption onClick={toggleDropdown} $isOn={isOn}>
        {text}
        <span>
          <ArrowIcon />
        </span>
      </SelectOption>
      <OptionBox $isOn={isOn}>{children}</OptionBox>
    </SelectWrap>
  );
};
