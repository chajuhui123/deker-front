import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import DeliverySelect from "components/account/accountShop/deliverySelect";
import DeliveryTracking from "components/account/accountShop/deliveryTracking";
import { modalAction } from "store/modal-slice";
import ProductSalesLink from "components/community/productSalesLinkPage";
import CommBtn from "components/common/commBtn";
import { useState } from "react";
import CommPopup from "components/common/commPopup";
import { postApi } from "api/fetch-api";
import { fetchEventSource } from "@microsoft/fetch-event-source";

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
  const fnCallback = (res) => {
    console.log(res);
  };
  const tokenTest = () => {
    const data = {
      orderId: "odrId_99999999999999",
    };
    dispatch(postApi("mb/mkt/get/tracking", data, fnCallback));
  };

  useEffect(() => {
    const token = "Bearer " + localStorage.getItem("token");
    const fetchData = async () => {
      await fetchEventSource(`http://localhost:6012/mb/sse-start`, {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          Authorization: token,
        },
        onopen(res) {
          if (res.ok && res.status === 200) {
            console.log("Connection made ", res);
          } else if (
            res.status >= 400 &&
            res.status < 500 &&
            res.status !== 429
          ) {
            console.log("Client side error ", res);
          }
        },
        onmessage(event) {
          console.log(event.data);
          const parsedData = JSON.parse(event.data);
          console.log(parsedData);
        },
        onclose() {
          console.log("Connection closed by the server");
        },
        onerror(err) {
          console.log("There was an error from server", err);
        },
      });
    };
    fetchData();
  }, []);

  return (
    <div>
      <button onClick={deliveryTrackingHandler}>DeliveryTracking</button>
      <button onClick={deliverySelectHandler}>DeliverySelect</button>
      <button onClick={productSalesLinkHandler}>productSalesLink</button>
      <CommBtn btnText="스피너 테스트" isLoading={isLoading} btnWidth="30%" />
      <button onClick={spinnerHandler}>스피터 적용 Trigger</button>
      <button onClick={commPopupTestHandler}>공통 팝업 테스트</button>
      <button onClick={tokenTest}>토큰 테스트</button>
    </div>
  );
}

export default ModalTest;
