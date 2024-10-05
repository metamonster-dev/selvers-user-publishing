import EventCard from "@components/eventCard";
import eventList from "@/mockData/eventList.json";
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
import categoryList from "@/mockData/categoryList.json";
import { useState } from "react";
import { InputRadioB } from "@components/form/inputRadio";
import HashBox from "@components/form/hashBox";
import SearchBar from "@components/searchBar";
import { useMediaQuery } from "usehooks-ts";

const EventListPage = () => {
  const [filterOn, setFilterOn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 1024px)");

  const filterHandler = () => {
    setFilterOn((prev) => !prev);
  };
  return (
    <EventListPageWrap>
      {isMobile && <SearchBar />}
      <CategoryList categoryList={categoryList.categoryList} />
      <ContentWrap>
        <PageInfo>
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
                { label: "무료", id: "01" },
                { label: "뷰티/화장품", id: "02" },
              ]}
              onClick={(target) => console.log(target)}
            />
          </FilterWrap>
        </PageInfo>
        <EventListWrap>
          {eventList.eventList.map((data) => {
            return (
              <EventCard
                key={data.id}
                id={data.id}
                imgUrl={data.imgUrl}
                title={data.title}
                date={data.date}
                location={data.location}
                dDay={data.dDay}
                price={data.price}
                likeNum={data.likeNum}
                like={data.like}
              />
            );
          })}
        </EventListWrap>
      </ContentWrap>
    </EventListPageWrap>
  );
};

export default EventListPage;
