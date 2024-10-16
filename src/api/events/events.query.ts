import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

/*행사 리스트 조회*/
export const useEventList = (type: number, token: string | null) => {
  return useQuery({
    queryKey: ["eventList", type, token],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/events?type=${type}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

/*사용자 행사 검색*/
export const useEventSearch = (token: string | null) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["eventSearch", location.search],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/events/search${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};
