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
import CommSelect from "components/common/CommSelect";

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
    array.forEach((i) => {
      if (i.id === 1) {
        i.isFollow = true;
      }
    });
    console.log(array);
  };
  const selectArray = [
    { value: "경영사무", label: "경영사무" },
    { value: "미디어", label: "미디어" },
    { value: "전문특수직", label: "전문특수직" },
    { value: "영업고객상담", label: "영업고객상담" },
    { value: "IT인터넷", label: "IT인터넷" },
    { value: "연구개발설계", label: "연구개발설계" },
    { value: "건설", label: "건설" },
    { value: "마케팅광고홍보", label: "마케팅광고홍보" },
    { value: "생산제조", label: "생산제조" },
    { value: "의료", label: "의료" },
    { value: "무역유통", label: "무역유통" },
    { value: "디자인", label: "디자인" },
    { value: "교육", label: "교육" },
    { value: "서비스", label: "서비스" },
  ];
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
        <li>
          <button onClick={arrayTest}>배열테스트</button>
        </li>
        <li>
          <CommSelect
            options={selectArray}
            defaultValue={selectArray.filter((s) => s.includes("J01"))}
          ></CommSelect>
        </li>
      </ul>
    </div>
  );
}

export default ModalTest;
