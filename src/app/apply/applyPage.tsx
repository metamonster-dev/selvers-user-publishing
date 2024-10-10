import {
  ApplyPageWrap,
  FormWrap,
  Main,
  MainForm,
  SideForm,
} from "./applyPageStyle";
import Thumbnail from "@components/eventDetail/thumbnailArea";
import ApplyForm from "@components/form/applyForm";
import ApplyAgreeFrom from "@components/form/applyAgreeFrom";

const ApplyPage = () => {
  return (
    <ApplyPageWrap className="maxframe">
      <FormWrap>
        <Main>
          <Thumbnail applyBtn={false} />
          <MainForm>
            <ApplyForm />
          </MainForm>
        </Main>
        <SideForm>
          <ApplyAgreeFrom />
        </SideForm>
      </FormWrap>
    </ApplyPageWrap>
  );
};

export default ApplyPage;
