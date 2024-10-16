import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { CategoryListType } from "@/type";

export const useCategoryQuery = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: async (): Promise<CategoryListType[]> => {
      const response = await axios.get(`/api/categories`);
      return response.data.data;
    },
  });
};
