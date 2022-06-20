import React, { useEffect, useState } from "react";
import { postApi } from "api/fetch-api";
import classes from "./deliveryTracking.module.css";
import InfoProduct from "components/account/myreview/modal/infoProduct";
import ModalTitle from "components/common/modalTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";
import DeliveryInfo from "./DeliveryInfo";
import RecvUserInfo from "./RecvUserInfo";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function DeliveryTracking(props) {
  const dispatch = useDispatch();
  const [resData, setResData] = useState(null);

  const fnCallback = (res) => {
    if (!!res) {
      setResData(res.data);
    }
  };

  useEffect(() => {
    // const dataOjb = {
    //   orderId: props.orderId,
    // };
    const dataOjb = {
      // TODO : TEST 용
      orderId: "odrId_99999999999999",
    };
    dispatch(postApi("mb/mkt/get/tracking", dataOjb, fnCallback));
  }, [dispatch]);

  return (
    <div className={classes.deliveryTracking}>
      <ModalTitle title="배송 조회" />
      <div className={classes.contArea}>
        <CommPageSemiTitle semiTitle="주문 정보" />
        {resData && (
          <>
            <InfoProduct
              productId={resData.productId}
              productImg={`${BASE_URL}${resData.productImg}`}
              brandName={resData.productBrand}
              productName={resData.productName}
              productOption={resData.productOption}
            />
            <RecvUserInfo
              addNmae={resData.addName}
              addZip={resData.addZip}
              address={resData.address}
              deliveryName={resData.deliveryName}
              waybill={resData.waybill}
            />
            <DeliveryInfo trackingList={resData.trackingList} />
          </>
        )}
      </div>
    </div>
  );
}

export default DeliveryTracking;
