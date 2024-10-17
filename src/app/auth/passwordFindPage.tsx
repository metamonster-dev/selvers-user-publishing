import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  PasswordFindWrap,
  TitleBox,
  FindFormWrap,
  SubmitBtn,
} from "./passwordFindPageStyle";
import { useAlret } from "@/hook/useAlret";
import { InputTextA } from "@components/form/inputText";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
});

const PasswordFindPage = () => {
  const { openModal } = useAlret();

  const alretData = {
    text: "메일로 임시 비밀번호를 발송했습니다.",
  };
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(() => openModal(alretData));
  console.log(isValid);
  return (
    <PasswordFindWrap>
      <TitleBox>
        <h2>비밀번호 찾기</h2>
        <span>가입하신 이메일로 임시 비밀번호를 전송해드립니다.</span>
      </TitleBox>
      <FindFormWrap onSubmit={onSubmit}>
        <InputTextA
          label="이메일(ID)"
          type="text"
          id="email"
          placeholder="이메일 입력"
          register={register}
        />

        <p className="err_msg">{errors.email?.message?.toString()}</p>

        <SubmitBtn>임시 비밀번호 받기</SubmitBtn>
      </FindFormWrap>
    </PasswordFindWrap>
  );
};

export default PasswordFindPage;
