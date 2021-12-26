import { createSlice } from "@reduxjs/toolkit";
import DeliveryTracking from "../components/account/delivery-tracking";

const initialModalState = {
  modalId: "testId",
  isOpen: true,
  // cont: null,
  cont: <DeliveryTracking />,
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
