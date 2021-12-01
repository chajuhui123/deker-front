import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  token: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialUserState: initialUserState,
  reducers: {
    login: (state, action) => {
      // 1. action payload에서 id, password 가져옴
      // 2. backend에 요청
      // 3. response.ok가 오면 localStorage 및 store에 token값 및 만료시간 적용
      // 4. setTimeout 설정 및 isLoggedIn true 변경
      // 5. error면 alert 띄우고 login page로 redirect
    },
    logout: (state) => {
      // 1. localStorage 및 store에서 token 및 expireTime 삭제
      // 2. isLoggedIn false로 변경
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
