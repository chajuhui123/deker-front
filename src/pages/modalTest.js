import React from "react";
import { useDispatch } from "react-redux";
import DeliverySelect from "components/account/accountShop/deliverySelect";
import DeliveryTracking from "components/account/accountShop/deliveryTracking";
import { modalAction } from "store/modal-slice";
import ProductSalesLink from "components/community/productSalesLinkPage";
import CommBtn from "components/common/commBtn";
import { useState } from "react";
import CommPopup from "components/common/commPopup";
import { postApi, sseApi } from "api/fetch-api";
import { spinnerAction } from "store/spinner-slice";
import PresentFriendPopup from "./shop/presentFriendPopup";

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
  const presentLinkHandler = () => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <PresentFriendPopup /> })
    );
  };
  const commPopupTestHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: true, cont: <CommPopup /> }));
  };
  const fnCallback = (res) => {
    console.log(res);
  };
  const tokenTest = () => {
    const data = {
      orderId: "odrId_99999999999999",
    };
    dispatch(postApi("mb/mkt/get/tracking", data, fnCallback));
  };
  const testSpinner = () => {
    dispatch(spinnerAction.loading());
  };
  const testSse = () => {
    dispatch(sseApi());
  };
  return (
    <div>
      <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
      <button onClick={deliverySelectHandler}>DeliverySelect</button>
      <button onClick={productSalesLinkHandler}>productSalesLink</button>
      <button onClick={presentLinkHandler}>선물하기</button>
      <CommBtn btnText="스피너 테스트" isLoading={isLoading} btnWidth="30%" />
      <button onClick={spinnerHandler}>스피터 적용 Trigger</button>
      <button onClick={commPopupTestHandler}>공통 팝업 테스트</button>
      <button onClick={tokenTest}>토큰 테스트</button>
      <button onClick={testSpinner}>공통 스피너 테스트</button>
      <button onClick={testSse}>SSE TEST</button>
    </div>
  );
}

export default ModalTest;
