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

//카테고리
export interface LoginType {
  email: number;
  password: string;
  remember: boolean;
}
//카테고리
export interface CategoryListType {
  id: number;
  name: string;
}
