import React from "react";
import { useDispatch } from "react-redux";
import DeliverySelect from "components/account/accountShop/deliverySelect";
import DeliveryTracking from "components/account/accountShop/deliveryTracking";
import { modalAction } from "store/modal-slice";
import ProductSalesLink from "components/community/productSalesLinkPage";
import CommBtn from "components/common/CommBtn";
import { useState } from "react";
import CommPopup from "components/common/commPopup";

function ModalTest(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const spinnerHandler = () => {
    setIsLoading((prev) => !prev);
  };
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
  const commPopupTestHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: true, cont: <CommPopup /> }));
  };
  return (
    <div>
      <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
      <button onClick={deliverySelectHandler}>DeliverySelect</button>
      <button onClick={productSalesLinkHandler}>productSalesLink</button>
      <CommBtn btnText="스피너 테스트" isLoading={isLoading} btnWidth="30%" />
      <button onClick={spinnerHandler}>스피터 적용 Trigger</button>
      <button onClick={commPopupTestHandler}>공통 팝업 테스트</button>
    </div>
  );
}

export default ModalTest;
