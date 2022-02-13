import React from "react";
import { useDispatch } from "react-redux";
import classes from "./modalTest.module.css";
import DeliverySelect from "components/account/accountShop/deliverySelect";
import DeliveryTracking from "components/account/accountShop/deliveryTracking";
import { modalAction } from "store/modal-slice";
import ProductSalesLink from "components/community/productSalesLinkPage";
import CommBtn from "components/common/commBtn";
import { useState } from "react";
import CommPopup from "components/common/commPopup";
import { postApi, sseApi } from "api/fetch-api";
import { spinnerAction } from "store/spinner-slice";
import CommAlert from "components/common/commAlert";
import PresentFriendPopup from "./shop/presentFriendPopup";
import DeliveryAdd from "components/account/accountShop/deliveryAdd";

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
  const deliveryAddHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: true, cont: <DeliveryAdd /> }));
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
  const testCommAlert = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <CommAlert
            title="리뷰작성 감사합니다."
            message="테스트 내용 입니다.테스트 내용 입니다.테스트 내용 입니다.테스트 내용 입니다.테스트 내용 입니다.테스트 내용 입니다.테스트 내용 입니다."
            onClick={alertCloseHandler}
          />
        ),
      })
    );
  };
  const alertCloseHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  return (
    <div className={classes.modalTest}>
      <CommBtn btnText="스피너 테스트" isLoading={isLoading} btnWidth="30%" />
      <ul>
        <li>
          <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
        </li>
        <li>
          <button onClick={deliverySelectHandler}>DeliverySelect</button>
        </li>
        <li>
          <button onClick={deliveryAddHandler}>DeliveryAdd</button>
        </li>
        <li>
          <button onClick={productSalesLinkHandler}>productSalesLink</button>
        </li>
        <li>
          <button onClick={presentLinkHandler}>선물하기</button>
        </li>
        <li>
          <button onClick={spinnerHandler}>스피터 적용 Trigger</button>
        </li>
        <li>
          <button onClick={commPopupTestHandler}>공통 팝업 테스트</button>
        </li>
        <li>
          <button onClick={tokenTest}>토큰 테스트</button>
        </li>
        <li>
          <button onClick={testSpinner}>공통 스피너 테스트</button>
        </li>
        <li>
          <button onClick={testSse}>SSE TEST</button>
        </li>
        <li>
          <button onClick={testCommAlert}>공통얼럿</button>
        </li>
      </ul>
    </div>
  );
}

export default ModalTest;
