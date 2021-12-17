import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  type: "",
  isOpen: false,
  message: "",
};

const modalSlice = createSlice({
  name: "modal",
  initialModalState: initialModalState,
  reducers: {
    modalPopup: (state, action) => {
      state.type = action.payload.type;
      state.isOpen = action.payload.isOpen;
      state.message = action.payload.message;
    },
  },
});

export const userAction = modalSlice.actions;

export default modalSlice;
