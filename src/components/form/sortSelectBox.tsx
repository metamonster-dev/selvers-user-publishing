import { useState, useRef, useEffect } from "react";
import {
  SelectWrap,
  SelectOption,
  OptionBox,
  Option,
} from "./sortSelectBoxStyle";
import SelectIcon from "@/assets/icon/arrow_sort_box.svg?react";

export type OptionType = {
  text: string;
  value: string;
};

export interface SelectBoxProps {
  options: OptionType[];
  selectedValue: string;
  loading?: boolean;
  onChange: (value: string) => void;
  width: number;
}

const SortSelectBox = ({
  options,
  selectedValue,
  // loading,
  // onChange,
  width,
}: SelectBoxProps) => {
  const [isOn, setIsOn] = useState(false);
  const [text, setText] = useState("베스트순");

  const selectBoxRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };

  const handleSelect = (text: string) => {
    setText(text);
    // onChange(value);
    setIsOn(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectBoxRef.current &&
      !selectBoxRef.current.contains(event.target as Node)
    ) {
      setIsOn(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const selectedOption = options.find(
      (option) => option.value === selectedValue
    );
    if (selectedOption) {
      setText(selectedOption.text);
    }
  }, [selectedValue, options]);

  return (
    <SelectWrap ref={selectBoxRef} $width={width}>
      <SelectOption onClick={toggleDropdown} $isOn={isOn}>
        <span className="txt">{text}</span>
        <span>{isOn ? <SelectIcon /> : <SelectIcon />}</span>
      </SelectOption>
      <OptionBox $isOn={isOn}>
        {options.map((data, index) => {
          return (
            <Option onClick={() => handleSelect(data.text)} key={index}>
              {data.text}
            </Option>
          );
        })}
      </OptionBox>
    </SelectWrap>
  );
};

export default SortSelectBox;
