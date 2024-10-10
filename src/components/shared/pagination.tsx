import { PaginationWrap } from "./paginationStyle";
import PrevIcon from "@/assets/icon/page_prev.svg?react";
import NextIcon from "@/assets/icon/page_next.svg?react";

const Pagination = () => {
  return (
    <PaginationWrap className="pagination">
      <button className="icon">
        <PrevIcon />
      </button>
      <button className="on">1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button className="icon">
        <NextIcon />
      </button>
    </PaginationWrap>
  );
};

export default Pagination;
