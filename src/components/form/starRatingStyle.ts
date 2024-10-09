import styled from "styled-components";

export const StarRatingWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  @media (max-width: 400px) {
    gap: 5px;
  }
`;

export const IconItem = styled.span`
  cursor: pointer;
  &.fill svg path {
    fill: #1e9eff;
  }
  &.stroke svg path {
    fill: #555;
  }
`;
