import axios from "axios";

//사용자 행사 검색
// export const getEventSearch = async (token, data) => {
//   const response = await axios({
//     method: "GET",
//     url: `/api/events/search?${data}`,
//     headers: {
//       "Content-Type": "application/json",
//       authorization: `bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// 행사 리스트 조회
//회원 종류(1: AI, 2: 신규, 3: 인기, 4: 추천)
export const getEventList = async (type: number, token: string | null) => {
  const response = await axios({
    method: "GET",
    url: `/api/events?type=${type}`,
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${token}`,
    },
  });
  return response.data;
};
