import { PaginationWrap } from "./paginationStyle";
import PrevIcon from "@/assets/icon/page_prev.svg?react";
import NextIcon from "@/assets/icon/page_next.svg?react";
import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  total: number; //총 이벤트 수
  page: number; //현재 페이지
  setPage: Dispatch<SetStateAction<number>>; //현재 페이지 set
  limit?: number;
  size?: number; // 보여질 페이지 버튼의 개수
};

const Pagination = ({ total, page, setPage, size = 4 }: PaginationProps) => {
  const currentSet = Math.ceil(page / size); //현재 버튼이 몇번째 세트인지 나타내는 수
  const startPage = (currentSet - 1) * size + 1; // 현재 보여질 버튼의 첫번째 수
  const endPage = startPage + size - 1; // 현재 보여질 끝 버튼의 수
  console.log(total);
  return (
    <PaginationWrap className="pagination">
      <button
        type="button"
        onClick={() => setPage(startPage - 1)}
        className="icon"
      >
        <PrevIcon />
      </button>

      {Array(size)
        .fill(startPage)
        .map((_, i) => {
          return (
            <button
              key={i}
              onClick={() => setPage(startPage + i)}
              className={page === startPage + i ? "on" : ""}
            >
              {startPage + i}
            </button>
          );
        })}
      <button
        type="button"
        onClick={() => setPage(endPage + 1)}
        className="icon"
      >
        <NextIcon />
      </button>
    </PaginationWrap>
  );
};

export default Pagination;
