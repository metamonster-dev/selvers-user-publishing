import styled from "styled-components";

export const BoothSearchBarWrap = styled.div`
  position: relative;
`;

export const SearchForm = styled.form<{ $filter?: boolean }>`
  position: relative;
  width: 480px;
  margin-left: auto;
  background-color: rgba(41, 46, 55, 0.7);
  border-radius: ${(props) => (props.$filter ? "25px" : "50rem")};
  padding-bottom: ${(props) => (props.$filter ? "40px" : "0")};
  margin-bottom: ${(props) => (props.$filter ? "0" : "40px")};
  @media (max-width: 1200px) {
    width: 350px;
  }
  @media (max-width: 1024px) {
    width: 100%;
    padding-bottom: ${(props) => (props.$filter ? "12px" : "0")};
    margin-bottom: ${(props) => (props.$filter ? "0" : "12px")};
    border-radius: ${(props) => (props.$filter ? "20px" : "50rem")};
    border-bottom-left-radius: ${(props) => (props.$filter ? "0" : "50rem")};
    border-bottom-right-radius: ${(props) => (props.$filter ? "0" : "50rem")};
  }
  & input {
    width: 100%;
    padding: 16px 53px 16px 33px;
    background-color: transparent;
    font-size: 18px;
    color: #fff;
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
  & .search_btn {
    width: 23px;
    height: 23px;
    position: absolute;
    right: 28px;
    top: 16px;
    & svg {
      width: 100%;
      height: 100%;
    }
    @media (max-width: 1024px) {
      width: 20px;
      height: 20px;
      right: 15px;
      top: 10px;
    }
  }
`;
// 검색창
export const FilterWrap = styled.div`
  width: 100%;
  padding: 30px 33px;
  position: absolute;
  background-color: rgba(41, 46, 55, 1);
  border-radius: 20px;
  left: 50%;
  top: 50;
  transform: translateX(-50%);
  font-size: 16px;
  z-index: 5;
  @media (max-width: 1024px) {
    border-radius: 15px;
    padding: 25px 16px;
  }
  & .title {
    color: #fff;
    font-weight: 700;
    flex: 0 0 auto;
  }
`;
export const FilterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 24px;
  }
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  & .text {
    font-weight: 600;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .add_btn {
    background-color: rgba(245, 103, 103, 1);
    display: block;
    border-radius: 50rem;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
`;
