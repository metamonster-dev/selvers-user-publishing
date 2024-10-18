import styled from "styled-components";

export const Nodata = styled.div`
  display: flex;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;

export const MyEventListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1024px) {
    gap: 20px;
  }
`;
