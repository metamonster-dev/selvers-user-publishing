import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useJoinMutation } from "@/api/auth/auth.query";
import { useCategoryQuery } from "@/api/etc/category.query";
import { FormEvent, useEffect, useState, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InputTextB } from "@components/form/inputText";
import { InputRadioA } from "@components/form/inputRadio";
import { InputCheckboxB } from "@components/form/inputCheckbox";
import { SelectBoxA } from "@components/form/selectBox";
import { useAlret } from "@/hook/useAlret";
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
import { JoinType, CustomError } from "@/type";

interface FavorList {
  id: number;
  name: string;
}

const joinSchema = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, "아이디를 입력해주세요.")
      .email({ message: "올바른 이메일을 입력해주세요." }),
    password: z
      .string()
      .trim()
      .min(1, "비밀번호를 입력해주세요.")
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
        " 영문,숫자조합 8자리 이상 입력해주세요."
      ),
    passwordChk: z.string(),
    name: z
      .string()
      .trim()
      .min(1, "이름을 입력해주세요.")
      .min(2, "이름을 확인해주세요."),
    birth: z
      .string()
      .trim()
      .min(1, "생년월일을 입력해주세요.")
      .regex(/^\d{4}-\d{2}-\d{2}$/),
    gender: z.string({ message: "성별을 선택해주세요." }),
    allChk: z.boolean().default(false).optional(),
    agree_01: z.boolean(),
    agree_02: z.boolean().default(false).optional(),
    agree_03: z.boolean(),
    agree_04: z.boolean(),
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
  const [interestList, setInterestList] = useState<number[]>([]);
  const [favorList, setFavorList] = useState<FavorList[]>([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const useJoin = useJoinMutation();
  const { openModal } = useAlret();
  const navigate = useNavigate();

  //카테고리 api
  const { data: category } = useCategoryQuery();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(joinSchema),
  });
  // 생년월일 문자금지 하이픈 추가
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.replace(/\D/g, "");
    if (input.length > 4 && input.length <= 6) {
      input = input.slice(0, 4) + "-" + input.slice(4);
    } else if (input.length > 6) {
      input =
        input.slice(0, 4) + "-" + input.slice(4, 6) + "-" + input.slice(6, 8);
    }
    setValue("birth", input);
  };

  // 관심 분야 체크 or 체크 해제시
  const interests = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.value;
    const id = Number(e.currentTarget.id);
    if (e.currentTarget.checked) {
      setInterestList((prev) => (prev ? [...prev, id] : [id]));
      setFavorList((prev) => [...prev, { id: id, name: name }]);
    } else {
      setInterestList((prev) => prev.filter((item) => item !== id));
      setFavorList((prev) => prev.filter((item) => item.id !== id));
    }
  };
  // 관심 분야 해시 박스 삭제 버튼 클릭시
  const hashDeleteHandler = (id: number) => {
    setValue(`${id}`, false);
    setInterestList((prev) => prev.filter((item) => item !== id));
    setFavorList((prev) => prev.filter((item) => item.id !== id));
  };
  // 약관동의 전체선택
  const allChk = watch("allChk");
  const agree01 = watch("agree_01");
  const agree03 = watch("agree_03");
  const agree04 = watch("agree_04");

  useEffect(() => {
    const checkList = ["agree_01", "agree_02", "agree_03", "agree_04"];

    if (allChk === true) {
      checkList.forEach((item) => setValue(item, true));
    } else {
      checkList.forEach((item) => setValue(item, false));
    }
  }, [allChk, setValue]);

  //약관 동의 필수 미선택시 sumit버튼 비활성화
  useEffect(() => {
    if (agree01 && agree03 && agree04) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [agree01, agree03, agree04]);

  const onSubmit = handleSubmit((data) => {
    const gender = () => {
      if (data.gender === "man") {
        return false;
      } else if (data.gender === "woman") {
        return true;
      }
    };

    const joinData: JoinType = {
      name: data.name,
      email: data.email,
      password: data.password,
      c_password: data.passwordChk,
      birth: data.birth,
      sex: gender() as boolean,
      interests: interestList,
      terms_of_uses: {
        "1": data.agree_01,
        "2": data.agree_02,
        "3": data.agree_03,
        "4": data.agree_04,
      },
    };
    //api 요청
    useJoin.mutate(joinData);
  });

  //회원가입 완료
  useEffect(() => {
    const alretData = {
      text: "회원가입이 완료되었습니다.\n이메일 인증 후 서비스를 이용할 수 있습니다.",
      callback: () => {
        navigate("/login");
      },
    };

    if (useJoin.isSuccess) {
      openModal(alretData);
    }
  }, [useJoin.isSuccess, openModal, navigate]);

  // 회원가입 실패
  useEffect(() => {
    if (useJoin.isError) {
      //이메일 인증
      const customError = useJoin.error as CustomError;
      if (
        customError.response?.data.data.error ===
        "The email has already been taken."
      ) {
        setError("apiError", {
          type: "manual",
          message: "사용중인 이메일 입니다.",
        });
      }
    }
  }, [useJoin.isError, setError, useJoin.error]);

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
            id="birth"
            register={register}
            placeholder="생년월일 8자리"
            onChange={handleDateChange}
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
        {errors.birth?.message && (
          <p className="err_msg">{errors.birth?.message?.toString()}</p>
        )}
        {errors.gender?.message && (
          <p className="err_msg">{errors.gender?.message?.toString()}</p>
        )}
        <TdForm>
          <SelectBoxA text="관심 분야">
            <FavoriteListBox>
              {category &&
                category.map((data) => {
                  return (
                    <InputCheckboxB
                      key={data.id}
                      label={data.name}
                      id={`${data.id}`}
                      register={register}
                      onChange={interests}
                    />
                  );
                })}
            </FavoriteListBox>
          </SelectBoxA>
        </TdForm>
        {favorList.length >= 1 && (
          <HashBox hashList={favorList} onClick={hashDeleteHandler} />
        )}
        {errors.interestListError && (
          <p className="err_msg">
            {errors.interestListError?.message?.toString()}
          </p>
        )}
        <AgreeBox>
          <InputCheckboxB
            label="선택 포함 전체 약관 동의"
            id="allChk"
            register={register}
          />
          <div>
            <div className="required_box">
              <InputCheckboxB
                label="이용약관 동의 (필수)"
                id="agree_01"
                register={register}
              />
              <p className="link">
                <Link to="/terms-service" target="blank_">
                  약관 보기
                </Link>
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
                <Link to="/gender-birth-information" target="blank_">
                  내용 확인
                </Link>
              </p>
            </div>
            <div className="required_box">
              <InputCheckboxB
                label="개인 정보 수집 및 이용 동의 (필수)"
                id="agree_04"
                register={register}
              />
              <p className="link">
                <Link to="/personal-information" target="blank_">
                  내용 확인
                </Link>
              </p>
            </div>
          </div>
        </AgreeBox>
        {errors.apiError && (
          <p className="err_msg">{errors.apiError?.message?.toString()}</p>
        )}
        <SubmitBtn disabled={!isFormValid} className="btn">
          회원가입
        </SubmitBtn>
      </JoinForm>
    </JoinFormWrap>
  );
};

export default JoinFormPage;
