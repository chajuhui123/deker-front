import React from "react";
import classes from "./marketCartItem.module.css";
import noImg from "img/noImg.png";
import MarketCartQuantityNumberPicker from "./marketCartQuantityNumberPicker";

function MarketCartItem({ cartItemObject }) {
  const {
    productImg,
    productName,
    productSelectedOption,
    maxQuantity,
    productFee,
  } = cartItemObject;
  return (
    <div className={classes.cartItemDiv}>
      <div className={classes.cartItemCheck}>
        <input type="checkbox" />
      </div>
      <div className={classes.cartItemBox}>
        <div>
          <img
            className={classes.cartItemImg}
            src={productImg || noImg}
            alt=""
          />
        </div>
        <div className={classes.cartItemInfoDiv}>
          <div>{productName}</div>
          <div>{productSelectedOption}</div>
          <div className={classes.cartItemOptionUpdate}>옵션변경</div>
          <div className={classes.cartItemFeeBox}>
            {/* 최대 cartItemObject.maxQuantity 까지 선택 가능 */}
            <div>
              <MarketCartQuantityNumberPicker maxQuantity={maxQuantity} />
            </div>
            <div>{productFee.toLocaleString()} 원</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketCartItem;
