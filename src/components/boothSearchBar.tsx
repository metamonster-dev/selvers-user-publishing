import { useRef, useState } from "react";
import SearchIcon from "@/assets/icon/search.svg?react";
import {
  BoothSearchBarWrap,
  SearchForm,
  FilterWrap,
  FilterContent,
  FilterItem,
} from "./boothSearchBarStyle";
import { useMediaQuery } from "usehooks-ts";

const BoothSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState(false);
  const filterBox = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const focusOnHandler = () => {
    setFilter(true);
    if (isMobile === true) {
      document.body.style.overflow = "hidden";
    }
  };

  const focusOutHandler = () => {
    setFilter(false);
    if (isMobile === true) {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <BoothSearchBarWrap>
      <SearchForm $filter={filter}>
        <input
          type="text"
          placeholder="방문하고싶은 부스를 검색해보세요!"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
          onFocus={focusOnHandler}
          onBlur={focusOutHandler}
        />
        <button className="search_btn">
          <SearchIcon />
        </button>
        {filter && (
          <FilterWrap ref={filterBox}>
            <FilterContent>
              <FilterItem>
                <span className="text">마인즈그라운드</span>
                <button className="add_btn">관심부스추가</button>
              </FilterItem>
              <FilterItem>
                <span className="text">마인즈그라운드</span>
                <button className="add_btn">관심부스추가</button>
              </FilterItem>
              <FilterItem>
                <span className="text">마인즈그라운드</span>
                <button className="add_btn">관심부스추가</button>
              </FilterItem>
            </FilterContent>
          </FilterWrap>
        )}
      </SearchForm>
    </BoothSearchBarWrap>
  );
};

export default BoothSearchBar;
