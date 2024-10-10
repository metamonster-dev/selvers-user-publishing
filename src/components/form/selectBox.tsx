import { useState, useRef, useEffect } from "react";
import { ReactNode } from "react";
import {
  SelectWrapA,
  SelectOptionA,
  OptionBoxA,
  SelectWrapB,
  SelectWrapC,
} from "./selectBoxStyle";
import ArrowIcon from "@/assets/icon/select_arrow.svg?react";
import ArrowIconW from "@/assets/icon/arrow_sort_box.svg?react";

type Props = {
  text: string;
  children?: ReactNode;
};

type SelectProps = {
  label: string;
  required: boolean;
  ontionList: string[];
  children?: ReactNode;
};

//회원가입 페이지 사용(관심분야)
export const SelectBoxA = ({ text, children }: Props) => {
  const [isOn, setIsOn] = useState(false);

  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <SelectWrapA>
      <SelectOptionA onClick={toggleDropdown} $isOn={isOn}>
        {text}
        <span>
          <ArrowIcon />
        </span>
      </SelectOptionA>
      <OptionBoxA $isOn={isOn}>{children}</OptionBoxA>
    </SelectWrapA>
  );
};

//신청하기 페이지 사용(단일 선택)
export const SelectBoxB = ({ label, required, ontionList }: SelectProps) => {
  const [isOn, setIsOn] = useState(false);
  const [targetOption, setTargetOption] = useState(ontionList[0]);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
  };
  const handleSelect = (target: string) => {
    setTargetOption(target);
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
  return (
    <SelectWrapB ref={selectBoxRef} $isOn={isOn}>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <div onClick={toggleDropdown} className="select">
          <span>{targetOption}</span>
          <span className="icon">
            <ArrowIconW />
          </span>
        </div>
        <ul className="option_box">
          {ontionList.map((data, index) => {
            return (
              <li
                key={index}
                onClick={() => handleSelect(data)}
                className="option"
              >
                {data}
              </li>
            );
          })}
        </ul>
      </div>
    </SelectWrapB>
  );
};

//신청하기 페이지 사용(다중선택)
export const SelectBoxC = ({
  label,
  required,
  ontionList,
  children,
}: SelectProps) => {
  const [isOn, setIsOn] = useState(false);
  const selectBoxRef = useRef<HTMLDivElement>(null);
  const toggleDropdown = () => {
    setIsOn((prev) => !prev);
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
  return (
    <SelectWrapC ref={selectBoxRef} $isOn={isOn}>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <div onClick={toggleDropdown} className="select">
          <div>
            {ontionList.map((data, index) => {
              return <span key={index}>{data}/</span>;
            })}
          </div>
          <span className="icon">
            <ArrowIconW />
          </span>
        </div>
        <div className="option_box">{children}</div>
      </div>
    </SelectWrapC>
  );
};
