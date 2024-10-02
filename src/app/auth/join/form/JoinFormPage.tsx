import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "react-router-dom";
import { InputTextB } from "@components/form/inputText";
import { InputRadioA } from "@components/form/inputRadio";
import { InputCheckboxB } from "@components/form/inputCheckbox";
import { SelectBoxA } from "@components/form/selectBox";
import HashBox from "@components/form/hashBox";
import {
  JoinFormWrap,
  JoinForm,
  TdForm,
  InputRadioWrap,
  FavoriteListBox,
  AgreeBox,
  SubmitBtn,
} from "./joinFormPageStyle";
import { FormEvent, useState } from "react";
import favoriteList from "@/mockData/favoritList.json";

interface FavorList {
  id: string;
  label: string;
}

const schema = z
  .object({
    email: z.string().email({ message: "올바른 이메일을 입력해주세요." }),
    password: z
      .string()
      .trim()
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
        " 영문,숫자조합 8자리 이상 입력해주세요."
      ),
    passwordChk: z.string().trim().min(1, "비밀번호를 확인해주세요."),
    name: z.string(),
    birth: z.coerce.number().gte(8),
    gender: z.string(),
    agree_01: z.literal(true),
  })
  .superRefine(({ passwordChk, password }, ctx) => {
    if (passwordChk !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "비밀번호를 확인해주세요.",
        path: ["passwordChk"],
      });
    }
  });

const JoinFormPage = () => {
  const [favorList, setFavorList] = useState<FavorList[]>([]);
  // 약관동의 전체선택(임시)
  const selectAllHandler = (e: FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) {
      setValue("agree_01", true);
      setValue("agree_02", true);
      setValue("agree_03", true);
      setValue("agree_04", true);
      setValue("agree_05", true);
    } else {
      setValue("agree_01", false);
      setValue("agree_02", false);
      setValue("agree_03", false);
      setValue("agree_04", false);
      setValue("agree_05", false);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit = handleSubmit((data) => console.log(data));

  const favoriteLists = (e: FormEvent<HTMLInputElement>) => {
    const label = e.currentTarget.value;
    const id = e.currentTarget.id;
    if (e.currentTarget.checked) {
      setFavorList((prev) => [...prev, { id: id, label: label }]);
    } else {
      setFavorList((prev) => prev.filter((item) => console.log(item)));
    }
  };
  const hashDeleteHandler = (id: string) => {
    setValue(id, false);
    setFavorList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <JoinFormWrap>
      <JoinForm onSubmit={onSubmit}>
        <TdForm>
          <InputTextB
            type="text"
            id="email"
            register={register}
            placeholder="이메일(ID)"
          />
        </TdForm>
        {errors.email?.message && (
          <p className="err_msg">{errors.email?.message?.toString()}</p>
        )}
        <TdForm className="password">
          <InputTextB
            type="password"
            id="password"
            register={register}
            placeholder="비밀번호"
          />
          <InputTextB
            type="password"
            id="passwordChk"
            register={register}
            placeholder="비밀번호 확인"
          />
        </TdForm>
        {errors.password?.message && (
          <p className="err_msg">{errors.password?.message?.toString()}</p>
        )}
        {errors.passwordChk?.message && (
          <p className="err_msg">{errors.passwordChk?.message?.toString()}</p>
        )}
        <TdForm>
          <InputTextB
            type="text"
            id="name"
            register={register}
            placeholder="이름"
          />
        </TdForm>
        {errors.name?.message && (
          <p className="err_msg">{errors.name?.message?.toString()}</p>
        )}
        <TdForm>
          <InputTextB
            type="number"
            id="birth"
            register={register}
            placeholder="생년월일"
          />
          <InputRadioWrap>
            <InputRadioA
              id="man"
              label="남"
              name="gender"
              register={register}
            />
            <InputRadioA
              id="woman"
              label="여"
              name="gender"
              register={register}
            />
          </InputRadioWrap>
        </TdForm>
        {errors.name?.message && (
          <p className="err_msg">{errors.name?.message?.toString()}</p>
        )}
        <TdForm>
          <SelectBoxA text="관심 분야">
            <FavoriteListBox>
              {favoriteList.favoriteList.map((data) => {
                return (
                  <InputCheckboxB
                    key={data.id}
                    label={data.label}
                    id={data.id}
                    register={register}
                    onChange={favoriteLists}
                  />
                );
              })}
            </FavoriteListBox>
          </SelectBoxA>
        </TdForm>
        {favorList.length >= 1 && (
          <HashBox hashList={favorList} onClick={hashDeleteHandler} />
        )}
        <AgreeBox>
          <InputCheckboxB
            label="선택 포함 전체 약관 동의"
            id="allChk"
            register={register}
            onChange={selectAllHandler}
          />
          <div>
            <div className="required_box">
              <InputCheckboxB
                label="이용약관 동의 (필수)"
                id="agree_01"
                register={register}
              />
              <p className="link">
                <Link to={""}>약관 보기</Link>
              </p>
            </div>
            <InputCheckboxB
              label="이벤트 혜택 알림 수신 동의 (선택)"
              id="agree_02"
              register={register}
            />
            <div className="required_box">
              <InputCheckboxB
                label="성별, 생년 정보 제공 동의 (필수)"
                id="agree_03"
                register={register}
              />
              <p className="link">
                <Link to={""}>내용 확인</Link>
              </p>
            </div>
            <div className="required_box">
              <InputCheckboxB
                label="개인 정보 수집 및 이용 동의 (필수)"
                id="agree_04"
                register={register}
              />
              <p className="link">
                <Link to={""}>내용 확인</Link>
              </p>
            </div>
          </div>
        </AgreeBox>

        <SubmitBtn className="btn">회원가입</SubmitBtn>
      </JoinForm>
    </JoinFormWrap>
  );
};

export default JoinFormPage;
