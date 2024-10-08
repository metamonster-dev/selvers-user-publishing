import styled from "styled-components";

export const SearchBarWrap = styled.div`
  position: relative;
`;

export const SearchForm = styled.form<{ $filter?: boolean }>`
  @media (max-width: 1024px) {
    padding: 0 16px;
    position: ${(props) => props.$filter && "fixed"};
    z-index: ${(props) => props.$filter && "99"};
    top: ${(props) => props.$filter && "11px"};
    left: ${(props) => props.$filter && "40px"};
    right: ${(props) => props.$filter && "0"};
    margin-bottom: ${(props) => props.$filter && "11px"};
  }
  & > div {
    position: relative;
    width: 666px;
    margin: 0 auto;
    @media (max-width: 1024px) {
      width: 100%;
    }
  }
  & input {
    width: 100%;
    background-color: rgba(41, 46, 55, 0.7);
    padding: 21px 63px 21px 33px;
    font-size: 18px;
    color: #fff;
    border-radius: 50rem;
    line-height: 1;
    @media (max-width: 1024px) {
      padding: 12px 43px 12px 16px;
      font-size: 12px;
    }
  }
  & input::placeholder {
    color: #fff;
    font-size: 18px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & button {
    width: 30px;
    height: 30px;
    position: absolute;
    right: 28px;
    top: 50%;
    transform: translateY(-50%);
    & svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      right: 15px;
    }
  }
`;
// 검색필터
export const FilterWrap = styled.div`
  width: 924px;
  padding: 34px 25px;
  position: absolute;
  background-color: #000;
  border-radius: 10px;
  left: 50%;
  top: 73px;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 5;
  box-shadow: 0 1px 4px;
  @media (max-width: 1024px) {
    width: auto;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0;
    transform: translateX(0);
    flex-direction: column;
    padding: 60px 0;
  }
  & .back_btn {
    position: absolute;
    top: 21px;
    left: 17px;
    display: none;
    @media (max-width: 1024px) {
      display: block;
    }
  }
  & .title {
    color: #fff;
    font-weight: 700;
    flex: 0 0 auto;
  }
`;
export const FilterContent = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    padding: 25px;
    flex-direction: column;
    overflow-y: scroll;
    height: 90vh;
  }
`;
export const SearchHistory = styled.div`
  width: 50%;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  padding-top: 30px;
  @media (max-width: 1024px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-top: 0;
  }

  & .btn_area {
    position: absolute;
    bottom: -10px;
    right: 20px;
    color: rgba(255, 255, 255, 0.5);
    @media (max-width: 1024px) {
      top: 0;
      right: 0;
      bottom: auto;
    }
  }
  & .btn_area::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    background-color: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 1024px) {
      display: none;
    }
  }
  & .btn_area button {
    color: rgba(255, 255, 255, 0.5);
    padding: 0 12px;
  }
  & ul {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    column-gap: 32px;
    row-gap: 20px;
    @media (max-width: 1024px) {
      padding: 25px 0;
    }
  }
  & li {
    color: #fff;
  }
`;
export const SearchCategory = styled.div`
  width: 50%;
  display: flex;
  padding: 30px 0 0 50px;
  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    padding: 25px 0 0 0;
  }
  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-left: 32px;
    row-gap: 20px;
    padding-bottom: 20px;
    @media (max-width: 1024px) {
      padding-left: 0;
      padding: 25px 0;
    }
  }

  & .category {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 600;
  }
  & .category li {
    width: 50%;
    /* padding-bottom: 20px; */
  }
  & .category li:first-child {
    width: 100%;
  }
`;
