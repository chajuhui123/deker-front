import React from "react";
import { useDispatch } from "react-redux";
import DeliverySelect from "../components/account/accountShop/delivery-select";
import DeliveryTracking from "../components/account/accountShop/delivery-tracking";
import { modalAction } from "../store/modal-slice";

function ModalTest(props) {
  const dispatch = useDispatch();
  const deliveryTrackingHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: <DeliveryTracking />,
      })
    );
  };
  const deliverySelectHandler = () => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <DeliverySelect /> })
    );
  };
  return (
    <div>
      <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
      <button onClick={deliverySelectHandler}>DeliverySelect</button>
    </div>
  );
}

export default ModalTest;
