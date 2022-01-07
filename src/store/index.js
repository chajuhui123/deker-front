import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
  reducer: { user: userSlice.reducer, modal: modalSlice.reducer },
  //non-serialize check 옵션 false로 설정하여 오류 발생 안하게 함, 보안상 문제가 생길 수도 있음
  //(&&typeof: Symbol.for('react.element') 보안상 사용하는 해당 코드를 사용하지 않아도 됨)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
