import { useState } from "react";
import SearchIcon from "@/assets/icon/search.svg?react";
import { SearchForm } from "./searchBarStyle";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  return (
    <SearchForm>
      <div>
        <input
          type="text"
          placeholder="마이스 메이트에서 나의 맞춤 행사를 찾아보세요!"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button>
          <SearchIcon />
        </button>
      </div>
    </SearchForm>
  );
};

export default SearchBar;
