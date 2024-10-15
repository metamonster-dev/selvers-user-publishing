// 이벤트 리스트
export interface EventList {
  id: string;
  imgUrl: string;
  title: string;
  date: string;
  location: string;
  dDay: string;
  price: string;
  likeNum: number;
  like: boolean;
}

export interface Category {
  id: string;
  label: string;
}

//나의 이벤트 리스트
export interface MyEventListType {
  id?: string;
  state: string;
  applyDate: string;
  title: string;
  date: string;
  location: string;
  linkBtn?: string;
}

//####################### fix #############################

//로그인 data
export interface LoginType {
  email: number;
  password: string;
  remember: boolean;
}
//회원가입 data
export interface JoinType {
  name: string;
  email: string;
  password: string;
  c_password: string;
  birth: string;
  sex: boolean;
  interests: number[];
  terms_of_uses: { [key: string]: string };
}
//카테고리
export interface CategoryListType {
  id: number;
  name: string;
}
// 행사 리스트
export interface EventListType {
  id: number;
  title: string;
  img: string;
  event_start_date: string;
  event_end_date: string;
  position: string;
  price: number;
  likes: number;
  like_state: boolean;
}

// 행사 검색 및 필터링
