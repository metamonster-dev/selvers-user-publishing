import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { InputTextC } from "@components/form/inputText";
import { InputRadioB } from "@components/form/inputRadio";
import { InputCheckboxA } from "@components/form/inputCheckbox";
import {
  UserModifyPageWrap,
  UserInfoBox,
  FormTable,
  ButtonArea,
} from "./userModifyPageStyle";
import { Link } from "react-router-dom";
import { useMyInformationQuery } from "@/api/users/users.query";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useEffect } from "react";

const EditSchema = z.object({
  phone: z
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
});

const UserModifyPage = () => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  const userGetData = { token: token, user_id: userId };
  const userPutData = {};

  const { data: userData } = useMyInformationQuery(userGetData);
  const { data: category } = useCategoryQuery();

  const {
    register,
    handleSubmit,
    setValue,
    // setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditSchema),
  });

  console.log(userData);

  useEffect(() => {
    if (userData) {
      setValue("phone", userData.data.contact);
      setValue("birth", userData.data.birth);
      // setValue("phone", userData.data.contact);
    }
  }, []);

  const onSubmit = handleSubmit(() => {});

  return (
    <UserModifyPageWrap>
      {userData && (
        <>
          <UserInfoBox>
            <div>
              <span className="label">이름</span>
              <span className="info">{userData.data.name}</span>
            </div>
            <div>
              <span className="label">이메일(ID)</span>
              <span className="info">{userData.data.email}</span>
            </div>
            <div>
              <span className="label">기업명</span>
              <span className="info">마인즈그라운드</span>
            </div>
          </UserInfoBox>
          <FormTable onSubmit={onSubmit}>
            <InputTextC
              label="전화번호"
              type="tel"
              id="phone"
              placeholder="전화번호를 입력하세요"
              register={register}
            />
            <InputTextC
              label="비밀번호 변경"
              type="password"
              id="changePassword"
              placeholder="비밀번호를 입력하세요"
              register={register}
            />
            <div className="radio_box">
              <p className="label">성별</p>
              <InputRadioB
                label="남"
                id="man"
                name="gender"
                defaultChecked={userData.data.sex === false ? true : false}
                register={register}
              />
              <InputRadioB
                label="여"
                id="woman"
                name="gender"
                defaultChecked={userData.data.sex === true ? true : false}
              />
            </div>
            <InputTextC
              label="생년월일"
              type="date"
              id="birth"
              placeholder="생년월일을 입력하세요"
              register={register}
            />
            <div className="favorite_box">
              <p className="label">관심분야</p>
              <div className="favorite_list">
                {category &&
                  category.map((data) => {
                    return (
                      <InputCheckboxA
                        key={data.id}
                        label={data.name}
                        id={JSON.stringify(data.id)}
                        // checked={userData.data.interests.includes(data.id)}
                      />
                    );
                  })}
              </div>
            </div>
            <ButtonArea>
              <button className="submit_btn">저장</button>
              <Link to="/mypage/user-modify/with-draw">
                마이스 메이트 탈퇴하기
              </Link>
            </ButtonArea>
          </FormTable>
        </>
      )}
    </UserModifyPageWrap>
  );
};

export default UserModifyPage;
