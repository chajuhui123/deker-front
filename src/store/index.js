import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: { user: userSlice.reducer, model: modalSlice.reducer },
});

export default store;
