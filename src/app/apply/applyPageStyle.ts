import styled from "styled-components";

export const ApplyPageWrap = styled.div``;

export const FormWrap = styled.form`
  padding: 26px 80px 170px;
  display: flex;
  gap: 55px;
  @media (max-width: 1650px) {
    padding: 26px 30px 170px;
    gap: 20px;
  }
  @media (max-width: 1300px) {
    padding: 26px 20px 170px;
    gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 24px 16px 84px;
    flex-direction: column;
  }
`;

export const Main = styled.div`
  max-width: 1204px;
`;

export const MainForm = styled.div``;

export const SideForm = styled.div`
  flex: 1 1 auto;
  width: 477px;
  min-width: 380px;
  color: #fff;
  @media (max-width: 1024px) {
    width: 100%;
    min-width: auto;
  }
`;
