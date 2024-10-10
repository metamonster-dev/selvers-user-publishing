import styled from "styled-components";

export const AlretChang = styled.div`
  position: relative;
  word-break: keep-all;
  padding: 15px 50px 15px 20px;
  background-color: rgba(8, 66, 152, 1);
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  line-height: 1.3;
  margin-bottom: 7px;
  & button {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    padding: 6px;
    & svg {
      width: 10px;
      height: 10px;
      display: block;
    }
  }
`;

export const ReviewListWrap = styled.div`
  padding: 16px 0;
  background-color: rgba(41, 46, 55, 0.5);
  border-radius: 10px;
  & .pagination {
    padding-top: 30px;
    justify-content: center;
  }
`;
export const ReviewHeader = styled.div`
  padding: 0 16px;
`;

export const RatingsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  & .stars {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    @media (max-width: 1500px) {
      gap: 5px;
    }
    & .star-ratings {
      display: flex !important;
      gap: 6px;
      @media (max-width: 1500px) {
        gap: 3px;
      }
    }
  }
  & .stars .total {
    font-size: 16px;
    font-weight: 500;
    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
  & .average {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const ReviewBody = styled.ul`
  padding: 10px 0 0;
`;

export const Item = styled.li`
  position: relative;
  padding: 12px 16px 55px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  & .writer_info {
    color: rgba(176, 184, 193, 1);
    font-size: 14px;
    padding: 14px 0;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .desc {
    font-size: 14px;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media (max-width: 1024px) {
      font-size: 12px;
    }
  }
  & .like_btn {
    min-width: 50px;
    padding: 5px 0;
    position: absolute;
    right: 16px;
    bottom: 12px;
    background-color: rgba(35, 94, 243, 1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    & .num {
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      @media (max-width: 1024px) {
        font-size: 12px;
      }
    }
  }
`;
