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
