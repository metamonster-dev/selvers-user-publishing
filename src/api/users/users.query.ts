import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { WishEventType, MyEventQueryType } from "@/type";

//사용자의 행사 관련 정보 조회
export const useMyEventQuery = (data: MyEventQueryType) => {
  return useQuery({
    queryKey: ["myEvent", data],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/users/${data.user_id}/events`,
        params: {
          type: data.type,
          page: data.page,
        },
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
  });
};

// 관심 행사 등록
export const useWishEventMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: WishEventType) => {
      const response = await axios({
        method: "POST",
        url: `/api/users/${data.user_id}/events/${data.event_id}`,
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${data.token}`,
        },
      });
      return response.data;
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["eventList"] });
      await queryClient.invalidateQueries({ queryKey: ["eventSearch"] });
    },
  });
};
