import styled from "styled-components";

export const AgreeWrap = styled.div`
  max-width: 1496px;
  margin: 67px auto 180px;
  padding: 0 30px;
  color: #fff;
  line-height: 1.5;
  & a,
  & button {
    font-weight: 700;
    text-decoration: underline;
    color: #fff;
  }
  & .pb_20 {
    padding-bottom: 20px;
  }

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
  & .box {
    padding: 0 0 10px 5px;
    font-size: 15px;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
    & .num {
      font-size: 9px;
    }
  }
  & h3 {
    font-weight: 700;
    padding-bottom: 15px;
  }
  & h4 {
    padding-bottom: 10px;
    font-size: 14px;
  }
  & h5 {
    padding-bottom: 10px;
    font-size: 14px;
  }

  /* table */
  & .table {
    width: 70%;
    text-align: left;
    border-collapse: collapse;
    border-color: #fff;
    margin-bottom: 20px;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & .table th,
  & .table td {
    padding: 5px 20px;
    border: 1px solid #fff;
    font-size: 16px;
    font-weight: 500px;
    word-break: keep-all;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .table th {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
