import styled from "styled-components";

export const CategoryListWrap = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const CategorySwiper = styled.div`
  & .swiper-slide {
    /* width: auto !important; */
  }
`;

export const CateItem = styled.li`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  @media (max-width: 1024px) {
    padding: 16px 0;
  }
`;
