import React, { useEffect, useState } from "react";
import { postApi } from "api/fetch-api";
import classes from "./deliveryTracking.module.css";
import InfoProduct from "components/account/accountReview/accountReviewModal/infoProduct";
import ModalTitle from "components/common/modalTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";

const initailData = {
  productId: "PDTID_00000000000001",
  productOptionId: "mpoId_00000000000001",
  productBrand: "deker()",
  productImg: null,
  option1: "COLOR",
  option1Data: "C01",
  option1Nm: "색상",
  option1DataNm: "흰색",
  option2: "SIZE",
  option2Data: "S01",
  option2Nm: "사이즈",
  option2DataNm: "260",
  deliveryCode: "06",
  deliveryName: "로젠택배",
  addNmae: "헿",
  addZip: "123", //우편번호
  address: "123 123", //주소
  waybill: "31732607830", //운송장번호
};

function DeliveryTracking(props) {
  const dispatch = useDispatch();
  const [resData, setResData] = useState(initailData);

  const fnCallback = (res) => {
    setResData(res.data);
  };

  useEffect(() => {
    // const dataOjb = {
    //   orderId: props.orderId,
    // };
    console.log("useEffect");
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
          productImg={resData.productImg}
          brandName={resData.productBrand}
          productName={resData.product_name}
          productOption={resData.product_option}
        />
        <div className={classes.recUserInfoArea}>
          <div className={classes.recUserInfoTitle}>
            <p>받는 사람</p>
            <p>받는 주소</p>
            <p>택배사</p>
            <p>송장번호</p>
          </div>
          <div className={classes.recUserInfoComp}>
            <p>{resData.rec_user_name}</p>
            <p>{resData.rec_user_addr}</p>
            <p>{resData.rec_deli_comp}</p>
            <p>{resData.rec_deli_no}</p>
          </div>
        </div>
        <div className={classes.deliTitle}>
          <p>배송 상태</p>
        </div>
        <table className={classes.deliTable}>
          <thead>
            <tr>
              <th>날짜</th>
              <th>배송 상태</th>
              <th>담당자/연락처</th>
            </tr>
          </thead>
          <tbody>
            {resData.deli_arry &&
              resData.deli_arry.map((deli) => (
                <tr key={deli.deli_date}>
                  <td>{deli.deli_date}</td>
                  <td>{deli.deli_status}</td>
                  <td>{deli.deli_tel}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DeliveryTracking;
