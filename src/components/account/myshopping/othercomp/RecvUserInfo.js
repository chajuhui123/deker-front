import React from "react";
import classes from "./RecvUserInfo.module.css";

function RecvUserInfo(props) {
  return (
    <>
      <div className={classes.recUserInfoArea}>
        <div className={classes.recUserInfoTitle}>
          <p>받는 사람</p>
          <p>받는 주소</p>
          <p>택배사</p>
          <p>송장번호</p>
        </div>
        <div className={classes.recUserInfoComp}>
          <p>{props.addNmae}</p>
          <p>
            ({props.addZip}) {props.address}
          </p>
          <p>{props.deliveryName}</p>
          <p>{props.waybill}</p>
        </div>
      </div>
    </>
  );
}

export default RecvUserInfo;
