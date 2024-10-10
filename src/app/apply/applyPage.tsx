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
import { useState } from "react";

const ApplyPage = () => {
  const [pageState, setPageState] = useState("개인 신청");
  console.log(pageState);

  return (
    <ApplyPageWrap className="maxframe">
      <FormWrap>
        <Main>
          <Thumbnail applyBtn={false} />
          <MainForm>
            <ApplyForm pageState={pageState} setPageState={setPageState} />
          </MainForm>
        </Main>
        <SideForm>
          <ApplyAgreeFrom pageState={pageState} />
        </SideForm>
      </FormWrap>
    </ApplyPageWrap>
  );
};

export default ApplyPage;
