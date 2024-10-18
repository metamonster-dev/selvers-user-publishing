import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { CancelEventRequest } from "@/type";
import { useAlret } from "@/hook/useAlret";

/*행사 리스트 조회*/
export const useEventList = (type: number, token: string) => {
  return useQuery({
    queryKey: ["eventList", type, token],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/events?type=${type}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

/*사용자 행사 검색*/
export const useEventSearch = (token: string) => {
  const location = useLocation();
  return useQuery({
    queryKey: ["eventSearch", location.search],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/events/search${location.search}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
  });
};

/*행사 취소*/
export const useCancelEvent = () => {
  const { openAlret } = useAlret();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: CancelEventRequest) => {
      const response = await axios({
        method: "DELETE",
        url: `/api/events/${data.event_id}/cancel`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
    onSuccess: async () => {
      const cancelSuccessData = {
        text: "취소가 완료되었습니다.",
      };
      openAlret(cancelSuccessData);
      await queryClient.invalidateQueries({ queryKey: ["myEvent"] });
    },
  });
};
