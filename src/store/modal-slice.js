import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  modalId: "testId",
  isOpen: false,
  cont: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    modalPopup: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.cont = action.payload.cont;
    },
  },
});

export const modalAction = modalSlice.actions;

export default modalSlice;
