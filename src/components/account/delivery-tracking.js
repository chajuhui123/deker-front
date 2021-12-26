import React from "react";
import classes from "./delivery-tracking.module.css";

//  상품아이디 문자열
//  상품명 문자열
//  상품브랜드 문자열
//  상품이미지경로 문자열
//  상품옵션 배열

function DeliveryTracking(props) {
  return (
    <div className={classes.deliveryTracking}>
      <div className={classes.title}>
        <p>배송 조회</p>
      </div>
      <div className={classes.contArea}>
        <div className={classes.title}>
          <p>주문 정보</p>
        </div>
        <div className={classes.prodArea}>
          {/* TODO : 상품이미지 경로 연결 */}
          <div className={classes.prodImg}></div>
          <div className={classes.prodInfoArea}>
            <div className={classes.prodBrand}>상품브랜드</div>
            <div className={classes.prodName}>상품명</div>
            <div className={classes.prodBrand}>상품옵션</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryTracking;
