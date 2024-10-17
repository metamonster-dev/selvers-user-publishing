import { PaginationWrap } from "./paginationStyle";
import PrevIcon from "@/assets/icon/page_prev.svg?react";
import NextIcon from "@/assets/icon/page_next.svg?react";
import { Dispatch, SetStateAction, useState, useEffect } from "react";

type PaginationProps = {
  totalItem: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  pageCount: number;
};

const Pagination = ({
  totalItem,
  page,
  setPage,
  pageCount,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItem / pageCount);
  const [start, setStart] = useState(1); // 시작 페이지
  const noPrev = start === 1; //이전 페이지가 없는 경우
  const noNext = start + pageCount - 1 >= totalPages; // 다음 페이지가 없는 경우

  useEffect(() => {
    if (page === start + pageCount) {
      setStart((prev) => prev + pageCount);
    }
    if (page < start) {
      setStart((prev) => prev - pageCount);
    }
  }, [page, pageCount, start]);

  return (
    <PaginationWrap className="pagination">
      <button onClick={() => setPage((state) => state - 1)} className="icon">
        <PrevIcon />
      </button>
      {Array.from({ length: pageCount }).map((_, index) => {
        return (
          <button
            onClick={() => setPage(start + index)}
            key={index}
            className={`${page === start + index && "on"}`}
          >
            {start + index}
          </button>
        );
      })}
      <button onClick={() => setPage((state) => state + 1)} className="icon">
        <NextIcon />
      </button>
    </PaginationWrap>
  );
};

export default Pagination;
