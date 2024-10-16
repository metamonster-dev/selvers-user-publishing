import EventCard from "@components/eventCard";
import { useEventSearch } from "@/api/events/events.query";
import {
  EventListPageWrap,
  ContentWrap,
  PageInfo,
  FilterWrap,
  Filter,
  EventListWrap,
} from "./eventListPageStyle";
import CategoryList from "@components/categoryList";
import FilterIcon from "@/assets/icon/filter.svg?react";
import { useCategoryQuery } from "@/api/etc/category.query";
import { useState } from "react";
import { InputRadioB } from "@components/form/inputRadio";
import HashBox from "@components/form/hashBox";
import SearchBar from "@components/searchBar";
import { useMediaQuery } from "usehooks-ts";
import LoadingScreen from "@components/shared/LoadingScreen";
import { EventListType } from "@/type";

const EventListPage = () => {
  const [filterOn, setFilterOn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const filterHandler = () => {
    setFilterOn((prev) => !prev);
    if (isMobile && !filterOn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  const token = localStorage.getItem("token");
  const { data: searchData, isLoading, isError } = useEventSearch(token);
  const { data: category } = useCategoryQuery();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return <div style={{ color: "#fff" }}>데이터 불러오기 실패</div>;
  }

  return (
    <EventListPageWrap>
      {isMobile && <SearchBar />}
      <CategoryList categoryList={category} />
      <ContentWrap>
        <PageInfo className="maxframe">
          <h2>검색결과</h2>
          <FilterWrap $filterOn={filterOn}>
            <button onClick={filterHandler} className="filter_btn">
              <FilterIcon />
              <span>필터</span>
            </button>
            {filterOn && (
              <Filter>
                <div className="title_area">
                  <span className="title">필터</span>
                  <span className="reset_btn">필터 초기화</span>
                </div>
                <div className="radio_box">
                  <span className="type">온/오프라인별</span>
                  <ul className="radio_list">
                    <li>
                      <InputRadioB
                        label="온/오프라인 모두"
                        id="typeAll"
                        name="type"
                        defaultChecked={true}
                      />
                    </li>
                    <li>
                      <InputRadioB label="온라인" id="online" name="type" />
                    </li>
                    <li>
                      <InputRadioB label="오프라인" id="offline" name="type" />
                    </li>
                  </ul>
                </div>
                <div className="radio_box">
                  <span className="type">날짜별</span>
                  <ul className="radio_list">
                    <li>
                      <InputRadioB
                        label="모든 날짜"
                        id="dateAll"
                        name="date"
                        defaultChecked={true}
                      />
                    </li>
                    <li>
                      <InputRadioB
                        label="이번주 행사"
                        id="thisWeek"
                        name="date"
                      />
                    </li>
                    <li>
                      <InputRadioB
                        label="지난 행사"
                        id="lastWeek"
                        name="date"
                      />
                    </li>
                  </ul>
                </div>
                <div className="radio_box">
                  <span className="type">참가비</span>
                  <ul className="radio_list">
                    <li>
                      <InputRadioB
                        label="유/무료 모두"
                        id="priceAll"
                        name="price"
                        defaultChecked={true}
                      />
                    </li>
                    <li>
                      <InputRadioB label="유료" id="charged" name="price" />
                    </li>
                    <li>
                      <InputRadioB label="무료" id="free" name="price" />
                    </li>
                  </ul>
                </div>
                <div className="btn_box">
                  <button onClick={filterHandler}>적용</button>
                </div>
              </Filter>
            )}
            <HashBox
              hashList={[
                { name: "무료", id: 1 },
                { name: "뷰티/화장품", id: 2 },
              ]}
              onClick={(target) => console.log(target)}
            />
          </FilterWrap>
        </PageInfo>
        <EventListWrap className="maxframe">
          {searchData.data.items &&
            searchData.data.items.map((data: EventListType) => {
              return (
                <EventCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  img={data.img}
                  event_start_date={data.event_start_date}
                  event_end_date={data.event_end_date}
                  position={data.position}
                  price={data.price}
                  likes={data.likes}
                  like_state={data.like_state}
                />
              );
            })}
        </EventListWrap>
      </ContentWrap>
    </EventListPageWrap>
  );
};

export default EventListPage;
