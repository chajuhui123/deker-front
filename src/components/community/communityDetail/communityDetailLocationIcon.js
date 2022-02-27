import React from "react";
import classes from "./communityDetailLocationIcon.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import { useHistory } from "react-router";

function CommunityDetailLocationIcon({ selectedProductObj }) {
  const {
    offsetX,
    offsetY,
    productId,
    productImgUrl,
    productName,
    productPayment,
  } = selectedProductObj;
  const history = useHistory();
  return (
    <div
      className={classes.locationIconWrapper}
      style={{ top: offsetX, left: offsetY }}
    >
      <div
        className={classes.locationIconDiv}
        style={{ top: offsetX, left: offsetY }}
      >
        <p className={classes.locationIcon}>+</p>
        <div
          className={classes.locationToolTip}
          onClick={() => {
            history.push(`/market/detail/${productId}`);
          }}
        >
          <img
            className={classes.toolTipImg}
            src={`${BASE_URL}${productImgUrl}` || noImg}
            alt=""
          />
          <div className={classes.toolTipText}>
            <p>{productName}</p>
            <p>{productPayment.toLocaleString("ko-KR")}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailLocationIcon;
