import { FieldValues, UseFormRegister } from "react-hook-form";
import {
  InputTextWrapA,
  InputTextWrapB,
  InputTextWrapC,
  InputTextWrapD,
  InputDateAWrap,
} from "./inputTextStyle";
import { ChangeEvent } from "react";

type Props = {
  label?: string;
  type?: string;
  id: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues>;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

// 로그인 페이지 사용
export const InputTextA = ({
  label,
  type,
  id,
  placeholder,
  register,
}: Props) => {
  return (
    <InputTextWrapA>
      <label>{label}</label>
      <input
        type={type}
        id={id}
        {...(register && register(id))}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputTextWrapA>
  );
};

// 회원가입 페이지 사용
export const InputTextB = ({
  type,
  id,
  register,
  placeholder,
  onChange,
}: Props) => {
  return (
    <InputTextWrapB
      type={type}
      id={id}
      {...(register && register(id))}
      placeholder={placeholder}
      autoComplete="off"
      onChange={onChange}
    />
  );
};

export const InputDateA = ({ id, register, placeholder }: Props) => {
  return (
    <InputDateAWrap>
      <input
        type="text"
        id={id}
        {...(register && register(id))}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputDateAWrap>
  );
};

//내 정보 수정 페이지 사용
export const InputTextC = ({
  label,
  type,
  id,
  placeholder,
  register,
}: Props) => {
  return (
    <InputTextWrapC>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        {...(register && register(id))}
        placeholder={placeholder}
        autoComplete="off"
      />
    </InputTextWrapC>
  );
};

// 신청하기 페이지 사용
export const InputTextD = ({ label, type, id, required }: Props) => {
  return (
    <InputTextWrapD>
      <label htmlFor={id} className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </label>
      <div className="input_area">
        <input type={type} id={id} autoComplete="off" className="input" />
      </div>
    </InputTextWrapD>
  );
};
