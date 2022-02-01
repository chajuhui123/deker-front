import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  modalId: "testId",
  isOpen: false,
  top: "",
  left: "",
  cont: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    modalPopup: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.top = action.payload.top;
      state.left = action.payload.left;
      state.cont = action.payload.cont;
    },
  },
});

export const modalAction = modalSlice.actions;

export default modalSlice;
