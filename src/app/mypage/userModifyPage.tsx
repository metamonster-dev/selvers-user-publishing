import {
  UserModifyPageWrap,
  FormTable,
  TrForm,
  TdForm,
} from "./userModifyPageStyle";

const UserModifyPage = () => {
  return (
    <UserModifyPageWrap>
      <FormTable>
        <TrForm>
          <TdForm>
            <span>이름</span>
            <span>김고은</span>
          </TdForm>
        </TrForm>
      </FormTable>
    </UserModifyPageWrap>
  );
};

export default UserModifyPage;
