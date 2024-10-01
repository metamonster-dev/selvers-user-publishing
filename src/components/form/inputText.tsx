import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputTextWrapA, InputTextWrapB } from "./inputTextStyle";

type Props = {
  label?: string;
  type: string;
  id: string;
  placeholder: string;
  register?: UseFormRegister<FieldValues>;
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
export const InputTextB = ({ type, id, register, placeholder }: Props) => {
  return (
    <InputTextWrapB
      type={type}
      id={id}
      {...(register && register(id))}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};
