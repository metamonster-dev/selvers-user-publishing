import styled from "styled-components";

export const SearchForm = styled.form`
  & > div {
    position: relative;
    width: 666px;
    margin: 0 auto;
  }
  & input {
    width: 100%;
    background-color: #292e37;
    padding: 21px 63px 21px 33px;
    font-size: 18px;
    color: #fff;
    border-radius: 50rem;
    line-height: 1;
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
  }
  & button {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
