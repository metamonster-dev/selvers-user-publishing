import axios from "axios";
import { useQuery } from "@tanstack/react-query";

//배너 조회
export const useBannerQuery = (type: number) => {
  return useQuery({
    queryKey: ["banner", type],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: `/api/banners?type=${type}`,
      });
      return response.data;
    },
  });
};
