import React, { useCallback, useEffect, useState } from "react";
import { testApi } from "../../../api/fetch-api";
import classes from "./delivery-tracking.module.css";
import InfoProduct from "../accountReview/accountReviewModal/infoProduct";

const initailData = {
  product_id: "NaN",
  product_name: "NaN",
  product_brand: "NaN",
  product_img: "NaN",
  product_options: [],
  rec_user_name: "NaN",
  rec_user_addr: "NaN",
  rec_deli_comp: "NaN",
  rec_deli_no: "NaN",
  deli_arry: [],
};

function DeliveryTracking(props) {
  const [resData, setResData] = useState(initailData);

  const fnCallback = useCallback((res) => {
    setResData(res);
  }, []);

  useEffect(() => {
    //postApi("", props.id, fnCallback);
    testApi("", props.id, fnCallback);
  }, [props.id, fnCallback]);

  return (
    <div className={classes.deliveryTracking}>
      <div className={classes.title}>
        <p>배송 조회</p>
      </div>
      <div className={classes.contArea}>
        <div className={classes.title}>
          <p>주문 정보</p>
        </div>
        <InfoProduct
          productImg={resData.product_img}
          brandName={resData.product_brand}
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
            {resData.deli_arry.map((deli) => (
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
