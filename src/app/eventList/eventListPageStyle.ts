import styled from "styled-components";

export const EventListPageWrap = styled.div`
  padding: 20px 0 0;
  position: relative;
`;

export const ContentWrap = styled.div`
  background-color: #121212;
  border-radius: 10px;
`;
export const PageInfo = styled.div`
  position: relative;
  max-width: 1920px;
  margin: 0 auto;
  padding: 60px 40px 0;
  @media (max-width: 1024px) {
    padding: 24px 16px 0;
  }
  & > h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 700;
    padding-bottom: 40px;
    @media (max-width: 1024px) {
      font-size: 18px;
    }
  }
`;

export const FilterWrap = styled.div<{ $filterOn: boolean }>`
  padding-bottom: 50px;
  display: flex;
  & .filter_btn {
    margin-right: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
    padding: 6px 13px;
    font-weight: 500;
    font-size: 22px;
    color: #fff;
    border-radius: 6px;
    border: 1px solid #e6e6e6;
    border: 1px solid ${(props) => (props.$filterOn ? "#235EF3" : "#e6e6e6")};
    background-color: ${(props) => props.$filterOn && "#235EF3"};
    @media (max-width: 1024px) {
      position: absolute;
      top: 20px;
      right: 16px;
      margin-right: 0;
    }
  }
  & > ul {
    gap: 16px;
    & > li {
      font-size: 22px;
      & .close_btn {
        width: 13px;
        height: 13px;
      }
      & .label {
        padding-left: 25px;
      }
    }
  }
`;
export const Filter = styled.div`
  position: absolute;
  left: 0;
  top: 196px;
  width: 340px;
  padding: 35px 30px;
  background-color: #000000;
  border: 1px solid #292e37;
  border-left: none;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
  @media (max-width: 1024px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
  & .title_area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .title {
      color: #fff;
      font-size: 24px;
      font-weight: 700;
    }
    & .reset_btn {
      font-size: 14px;
      font-weight: 700;
      color: #b0b8c1;
      cursor: pointer;
    }
  }

  & .radio_box {
    padding-top: 34px;
    & .type {
      display: block;
      color: #fff;
      font-weight: 700;
      font-size: 16px;
      padding-bottom: 36px;
    }
    & .radio_list {
      display: flex;
      flex-direction: column;
      gap: 22px;
    }
  }
  & .btn_box {
    display: flex;
    padding-top: 40px;
    & button {
      margin-left: auto;
      border-radius: 10px;
      padding: 11px 50px;
      background-color: #235ef3;
      color: #fff;
      font-weight: 600;
      @media (max-width: 1024px) {
        width: 100%;
      }
    }
  }
`;

export const EventListWrap = styled.div`
  padding: 0 60px 80px;
  display: grid;
  column-gap: 24px;
  row-gap: 80px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 1920px;
  margin: 0 auto;
  @media (max-width: 1650px) {
    padding: 0 30px 80px;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 15px;
  }
  @media (max-width: 1024px) {
    padding: 0 16px 80px;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 10px;
  }
`;
