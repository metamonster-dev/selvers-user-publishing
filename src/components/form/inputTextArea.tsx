import { InputTextAreaWrap } from "./inputTextAreaStyle";

type Props = {
  placeholder: string;
};

export const InputTextArea = ({ placeholder }: Props) => {
  return (
    <InputTextAreaWrap>
      <textarea placeholder={placeholder} />
    </InputTextAreaWrap>
  );
};
