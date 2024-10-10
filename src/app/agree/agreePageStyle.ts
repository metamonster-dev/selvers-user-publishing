import styled from "styled-components";

export const AgreeWrap = styled.div`
  max-width: 1496px;
  margin: 67px auto 180px;
  padding: 0 30px;
  color: #fff;
  line-height: 1.5;
  @media (max-width: 1024px) {
    margin: 30px auto 80px;
    padding: 0 16px;
  }
  & .title {
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 30px;
    @media (max-width: 1024px) {
      font-size: 20px;
    }
  }

  &.desc {
    word-break: keep-all;
    font-size: 16px;
    font-weight: 500px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;
