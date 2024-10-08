import styled from "styled-components";

export const PaginationWrap = styled.div`
  padding-top: 97px;
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  @media (max-width: 1024px) {
    padding-top: 58px;
    justify-content: center;
    gap: 10px;
  }
  @media (max-width: 1024px) {
    justify-content: center;
    gap: 5px;
  }

  & button {
    background-color: rgba(41, 46, 55, 1);
    color: #fff;
    font-size: 16px;
    min-width: 40px;
    min-height: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .icon {
    min-width: 48px;
  }
  & .on {
    background-color: rgba(35, 94, 243, 1);
  }
`;
