import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { userState } from "@/store/UserState";
import { JoinType, LoginType } from "@/type";

/*회원가입(사용자 등록)*/
export const useJoinMutation = () => {
  return useMutation({
    mutationFn: async (data: JoinType) => {
      const response = await axios({
        method: "POST",
        url: "/api/users",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      });
      return response.data;
    },
  });
};

/*로그인(인증)*/
export const useLoginMutation = () => {
  const setUserState = useSetRecoilState(userState);
  return useMutation({
    mutationFn: async (data: LoginType) => {
      const response = await axios({
        method: "POST",
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
    },
    onSuccess: (data) => {
      const userResponse = {
        isLogin: true,
        isLoginError: false,
        data: {
          user_id: data.data.user_id,
          name: data.data.name,
          token: data.data.token,
        },
      };
      setUserState({ ...userResponse });
    },
  });
};

/*토큰 유효성 체크*/
export const useTokenValidationQuery = (token: string) => {
  return useQuery({
    queryKey: ["token", token],
    queryFn: async () => {
      const response = await axios({
        method: "GET",
        url: "/api/auth",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    },
    //로그인 유지 선택 안했을떄 토큰 유효기간 3시간
    //3시간 마다 한번씩 실행
    refetchInterval: 10800000,
    //token값 없을때 실행 안함
    enabled: !!token,
  });
};
