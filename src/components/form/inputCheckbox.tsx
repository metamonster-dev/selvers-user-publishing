import { InputCheckboxWrapA, InputCheckboxWrapB } from "./inputCheckboxStyle";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormEvent } from "react";
type Props = {
  label: string;
  id: string;
  register?: UseFormRegister<FieldValues>;
  onChange?: (e: FormEvent<HTMLInputElement>) => void;
  required?: boolean;
};

export const InputCheckboxA = ({ label, id, register, required }: Props) => {
  return (
    <InputCheckboxWrapA className="InputCheckboxA">
      <input type="checkbox" id={id} {...(register && register(id))} />
      <label htmlFor={id}>
        {label}
        {required && <span className="req">&nbsp;*</span>}
      </label>
    </InputCheckboxWrapA>
  );
};

export const InputCheckboxB = ({ label, id, register, onChange }: Props) => {
  return (
    <InputCheckboxWrapB>
      <input
        type="checkbox"
        id={`${id}`}
        {...(register && register(`${id}`))}
        onChange={onChange}
        value={label}
      />

      <label htmlFor={`${id}`}>{label}</label>
    </InputCheckboxWrapB>
  );
};
