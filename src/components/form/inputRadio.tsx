import { InputRadioWrapA, InputRadioWrapB } from "./inputRadioStyle";
import { UseFormRegister, FieldValues } from "react-hook-form";

type Props = {
  id: string;
  name: string;
  label: string;
  register: UseFormRegister<FieldValues>;
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
export const InputRadioB = () => {
  return <InputRadioWrapB></InputRadioWrapB>;
};
