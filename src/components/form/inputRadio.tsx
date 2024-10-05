// id: 선택 radio data id
// name: radio box 범위
// label: 화면에 보여지는 텍스트

import { InputRadioWrapA, InputRadioWrapB } from "./inputRadioStyle";
import { UseFormRegister, FieldValues } from "react-hook-form";

type Props = {
  id: string;
  name: string;
  label: string;
  register?: UseFormRegister<FieldValues>;
  defaultChecked?: boolean;
};

// text radio
export const InputRadioA = ({ label, id, name, register }: Props) => {
  return (
    <InputRadioWrapA>
      <input
        type="radio"
        id={id}
        value={id}
        {...(register && register(name))}
      />
      <label htmlFor={id}>{label}</label>
    </InputRadioWrapA>
  );
};

// round radio
export const InputRadioB = ({
  label,
  id,
  name,
  register,
  defaultChecked,
}: Props) => {
  return (
    <InputRadioWrapB>
      <input
        type="radio"
        id={id}
        value={id}
        name={name}
        {...(register && register(name))}
        defaultChecked={defaultChecked}
      />
      <label htmlFor={id}>{label}</label>
    </InputRadioWrapB>
  );
};
