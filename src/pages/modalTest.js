import React from "react";
import { useDispatch } from "react-redux";
import DeliverySelect from "../components/account/accountShop/delivery-select";
import DeliveryTracking from "../components/account/accountShop/delivery-tracking";
import { modalAction } from "../store/modal-slice";
import ProductSalesLink from "../components/community/productSalesLinkPage";

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
  const productSalesLinkHandler = () => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <ProductSalesLink /> })
    );
  };
  return (
    <div>
      <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
      <button onClick={deliverySelectHandler}>DeliverySelect</button>
      <button onClick={productSalesLinkHandler}>productSalesLink</button>
    </div>
  );
}

export default ModalTest;
