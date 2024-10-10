import { InputTextAreaWrapA, InputTextAreaWrapB } from "./inputTextAreaStyle";

type Props = {
  label?: string;
  placeholder?: string;
  required?: boolean;
};
//리뷰 페이지 사용
export const InputTextAreaA = ({ placeholder }: Props) => {
  return (
    <InputTextAreaWrapA>
      <textarea placeholder={placeholder} />
    </InputTextAreaWrapA>
  );
};

//신청하기 페이지 사용
export const InputTextAreaB = ({ label, required }: Props) => {
  return (
    <InputTextAreaWrapB>
      <p className="label">
        <span className="txt">{label}</span>
        {required && <span className="req">&nbsp;*</span>}
      </p>
      <div className="select_box">
        <textarea />
      </div>
    </InputTextAreaWrapB>
  );
};
