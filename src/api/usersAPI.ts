import axios from "axios";
import { JoinType } from "@/type";

//사용자 등록
export const postJoin = async (method: string, data: JoinType) => {
  const response = await axios({
    method: method,
    url: "/api/users",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  });
  return response.data;
};

export const getUserInformation = async () => {};
