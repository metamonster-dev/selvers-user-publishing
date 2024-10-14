import axios from "axios";
import { CategoryListType } from "@/type";

export const getCategory = async (): Promise<CategoryListType[]> => {
  const response = await axios.get(`/api/categories`);
  return response.data.data;
};
