import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import AlretModal from "@components/modal/alretModal";
import {
  PasswordFindWrap,
  TitleBox,
  FindFormWrap,
  SubmitBtn,
} from "./passwordFindPageStyle";
import { InputTextA } from "@components/form/inputText";
import { useState } from "react";

const schema = z.object({
  email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
});

const PasswordFindPage = () => {
  const [alret, setAlret] = useState(false);
  //react hook form
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(() => setAlret(true));
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
      {alret && (
        <AlretModal text="취소가 완료되었습니다." setAlret={setAlret} />
      )}
    </PasswordFindWrap>
  );
};

export default PasswordFindPage;
