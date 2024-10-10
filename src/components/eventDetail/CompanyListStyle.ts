import styled from "styled-components";

export const CompanyListWrap = styled.div`
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & {
    padding: 12px 0 54px;
  }
  & li {
    padding: 24px 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }

  & .text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`;
