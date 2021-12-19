import { createSlice } from "@reduxjs/toolkit";

const initialModalState = {
  modalId: "",
  isOpen: false,
  width: 100,
  height: 100,
  left: 100,
  top: 100,
};

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    modalPopup: (state, action) => {
      state.modalId = action.payload.modalId;
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const modalAction = modalSlice.actions;

export default modalSlice;
