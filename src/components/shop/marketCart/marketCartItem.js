import React from "react";
import classes from "./marketCartItem.module.css";
import noImg from "img/noImg.png";

function MarketCartItem() {
  return (
    <div className={classes.cartItemDiv}>
      <div className={classes.cartItemCheck}>체크박스 V</div>
      <div className={classes.cartItemBox}>
        <div>
          <img className={classes.cartItemImg} src={noImg} alt="" />
        </div>
        <div className={classes.cartItemInfoDiv}>
          <div>상품명</div>
          <div>상품옵션</div>
          <div>옵션변경</div>
          <div className={classes.cartItemFeeBox}>
            <input type="number" />
            <div>10000</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketCartItem;
