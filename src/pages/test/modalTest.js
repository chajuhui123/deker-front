import React from "react";
import { useDispatch } from "react-redux";
import classes from "./modalTest.module.css";
import DeliverySelect from "components/account/myshopping/othercomp/deliverySelect";
import DeliveryTracking from "components/account/myshopping/othercomp/deliveryTracking";
import { modalAction } from "store/modal-slice";
import ProductSalesLink from "components/community/productSalesLinkPage";
import CommBtn from "components/common/commBtn";
import { useState } from "react";
import CommPopup from "components/common/commPopup";
import { postApi, sseApi } from "api/fetch-api";
import { spinnerAction } from "store/spinner-slice";
import CommAlert from "components/common/commAlert";
import PresentFriendPopup from "../shop/presentFriendPopup";
import CommSelect from "components/common/CommSelect";

function ModalTest(props) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const spinnerHandler = () => {
    setIsLoading(prev => !prev);
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
  const fnCallback = res => {
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
            title="???????????? ???????????????."
            message="????????? ?????? ?????????.????????? ?????? ?????????.????????? ?????? ?????????.????????? ?????? ?????????.????????? ?????? ?????????.????????? ?????? ?????????.????????? ?????? ?????????."
            onClick={alertCloseHandler}
          />
        ),
      })
    );
  };
  const alertCloseHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  const arrayTest = () => {
    const array = [
      { id: 1, isFollow: false },
      { id: 2, isFollow: false },
      { id: 1, isFollow: false },
      { id: 4, isFollow: false },
      { id: 5, isFollow: false },
      { id: 1, isFollow: false },
      { id: 7, isFollow: false },
      { id: 8, isFollow: false },
    ];
    array.forEach(i => {
      if (i.id === 1) {
        i.isFollow = true;
      }
    });
    console.log(array);
  };
  const selectArray = [
    { value: "J01", label: "????????????" },
    { value: "J02", label: "?????????" },
    { value: "J03", label: "???????????????" },
    { value: "J04", label: "??????????????????" },
    { value: "J05", label: "IT?????????" },
    { value: "J06", label: "??????????????????" },
    { value: "J07", label: "??????" },
    { value: "J08", label: "?????????????????????" },
    { value: "J09", label: "????????????" },
    { value: "J10", label: "??????" },
    { value: "J11", label: "????????????" },
    { value: "J12", label: "?????????" },
    { value: "J13", label: "??????" },
    { value: "J14", label: "?????????" },
  ];
  const selectHandler = v => {
    console.log(v);
  };
  return (
    <div className={classes.modalTest}>
      <CommBtn btnText="????????? ?????????" isLoading={isLoading} btnWidth="30%" />
      <ul>
        <li>
          <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
        </li>
        <li>
          <button onClick={deliverySelectHandler}>DeliverySelect</button>
        </li>
        <li>
          <button onClick={productSalesLinkHandler}>productSalesLink</button>
        </li>
        <li>
          <button onClick={presentLinkHandler}>????????????</button>
        </li>
        <li>
          <button onClick={spinnerHandler}>????????? ?????? Trigger</button>
        </li>
        <li>
          <button onClick={commPopupTestHandler}>?????? ?????? ?????????</button>
        </li>
        <li>
          <button onClick={tokenTest}>?????? ?????????</button>
        </li>
        <li>
          <button onClick={testSpinner}>?????? ????????? ?????????</button>
        </li>
        <li>
          <button onClick={testSse}>SSE TEST</button>
        </li>
        <li>
          <button onClick={testCommAlert}>????????????</button>
        </li>
        <li>
          <button onClick={arrayTest}>???????????????</button>
        </li>
        <li>
          <CommSelect
            options={selectArray}
            value="J01"
            onChange={selectHandler}
          ></CommSelect>
        </li>
      </ul>
    </div>
  );
}

export default ModalTest;
