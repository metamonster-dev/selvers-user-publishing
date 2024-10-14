import axios from "axios";
import { LoginType } from "@/type";

//토큰 발급
export const postLogin = async (method: string, data: LoginType) => {
  const response = await axios({
    method: method,
    url: "/api/auth",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      email: data.email,
      password: data.password,
      remember_me: data.remember,
    },
  });
  return response.data;
};
