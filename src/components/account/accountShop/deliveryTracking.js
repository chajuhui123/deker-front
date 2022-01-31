import React, { useEffect, useState } from "react";
import { postApi } from "api/fetch-api";
import classes from "./deliveryTracking.module.css";
import InfoProduct from "components/account/accountReview/accountReviewModal/infoProduct";
import ModalTitle from "components/common/modalTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";
import DeliveryInfo from "./DeliveryInfo";
import RecvUserInfo from "./RecvUserInfo";

const initailData = {
  productId: "PDTID_00000000000001", // 상품아이디
  productBrand: "DEKER", // 상품브랜드명
  productName: "상품명", // 상품명 (추가 해야함)
  productImg:
    "https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/163186046269160074.PNG?gif=1&w=640&h=640&c=c", // 상품이미지
  productOption: ["Large", "red"], // 상품옵션 (사이즈, 색상)
  addNmae: "홍길동", // 받는사람명
  addZip: "000000", // 받는주소 (zip, address)
  address: "서울시 용산구 무슨로 999동 999호",
  deliveryCode: "06", // 택배사
  deliveryName: "로젠택배",
  waybill: "31732607830", // 송장번호
  trackingList: [
    {
      body: null,
      code: null,
      estimate: null,
      invoiceNo: null,
      itemName: null,
      kind: "터미널입고",
      level: 3,
      levelNm: "배송중",
      msg: null,
      result: null,
      telno: "",
      time: 1642597320000,
      timeFormat: "2022-01-19 22:02:00",
      timeString: "2022-01-19 22:02:00",
      trackingDetails: null,
      where: "대구센터",
    },
  ],
};

function DeliveryTracking(props) {
  const dispatch = useDispatch();
  const [resData, setResData] = useState(initailData);

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
        <InfoProduct
          productId={resData.productId}
          productImg={resData.productImg}
          brandName={resData.productBrand}
          productName={resData.productName}
          productOption={resData.productOption}
        />
        <RecvUserInfo
          addNmae={resData.addNmae}
          addZip={resData.addZip}
          address={resData.address}
          deliveryName={resData.deliveryName}
          waybill={resData.waybill}
        />
        <DeliveryInfo trackingList={resData.trackingList} />
      </div>
    </div>
  );
}

export default DeliveryTracking;
