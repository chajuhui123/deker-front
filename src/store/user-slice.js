import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  token: "",
  isLoggedIn: false,
  isReady: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    login: (state, action) => {
      const jwtToken = action.payload.jwtToken;
      state.isLoggedIn = true;
      state.token = jwtToken;
      state.isReady = true;
    },
    logout: (state) => {
      // 1. localStorage 및 store에서 token 및 expireTime 삭제
      state.isLoggedIn = false;
      // 2. isLoggedIn false로 변경
      state.token = "";
      state.isReady = true;
    },
    onLoad: (state) => {
      state.isReady = true;
    },
  },
});

export const userAction = userSlice.actions;

export default userSlice;
