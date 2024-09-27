import { useRef, useState } from "react";
import SearchIcon from "@/assets/icon/search.svg?react";
import BackBtn from "@/assets/icon/arrow_back.svg?react";
import {
  SearchBarWrap,
  SearchForm,
  FilterWrap,
  SearchHistory,
  SearchCategory,
  FilterContent,
} from "./searchBarStyle";
import { Link } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

const SearchBar = () => {
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
    <SearchBarWrap>
      <SearchForm $filter={filter}>
        <div>
          <input
            type="text"
            placeholder="마이스 메이트에서 나의 맞춤 행사를 찾아보세요!"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
            onFocus={focusOnHandler}
            onBlur={focusOutHandler}
          />
          <button>
            <SearchIcon />
          </button>
        </div>
      </SearchForm>

      {filter && (
        <FilterWrap ref={filterBox}>
          <button className="back_btn">
            <BackBtn />
          </button>
          <FilterContent>
            <SearchHistory>
              <p className="title">최근 검색어</p>
              <div className="btn_area">
                <button>검색 기록 끄기</button>
                <button>검색 기록 삭제</button>
              </div>
              <ul>
                <li>
                  <Link to={""}>마케팅</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온온온온온온온라인</Link>
                </li>
                <li>
                  <Link to={""}>최근 검색어</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>농축산농축산농축산</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>환경</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>test</Link>
                </li>
                <li>
                  <Link to={""}>온라인</Link>
                </li>
                <li>
                  <Link to={""}>교육</Link>
                </li>
              </ul>
            </SearchHistory>
            <SearchCategory>
              <p className="title">카테고리</p>
              <ul className="category">
                <li>
                  <Link to={""}>전체</Link>
                </li>
                <li>
                  <Link to={""}>농축산/식음료</Link>
                </li>
                <li>
                  <Link to={""}>뷰티/화장품</Link>
                </li>
                <li>
                  <Link to={""}>에너지/환경</Link>
                </li>
                <li>
                  <Link to={""}>금융/부동산</Link>
                </li>
                <li>
                  <Link to={""}>섬유/의류</Link>
                </li>
                <li>
                  <Link to={""}>교육</Link>
                </li>
                <li>
                  <Link to={""}>금속/기계</Link>
                </li>
                <li>
                  <Link to={""}>임신/출산/육아</Link>
                </li>
                <li>
                  <Link to={""}>보건/의료</Link>
                </li>
                <li>
                  <Link to={""}>웨딩</Link>
                </li>
                <li>
                  <Link to={""}>건설/건축</Link>
                </li>
                <li>
                  <Link to={""}>문화/예술</Link>
                </li>
                <li>
                  <Link to={""}>가정용품</Link>
                </li>
                <li>
                  <Link to={""}>레저/관광</Link>
                </li>
              </ul>
            </SearchCategory>
          </FilterContent>
        </FilterWrap>
      )}
    </SearchBarWrap>
  );
};

export default SearchBar;
