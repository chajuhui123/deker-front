import React from "react";
import MarketCartBuyButton from "./marketCartBuyButton";
import classes from "./marketCartPaymentBox.module.css";

function MarketCartPaymentBox() {
  return (
    <>
      <div className={classes.cartPaymentBox}>
        <div className={classes.payFlexBox}>
          <div className={classes.payTitle}>총 상품금액</div>
          <div className={classes.payCost}> 10000</div>
        </div>
        <div className={classes.payFlexBox}>
          <div className={classes.payTitle}>배송비</div>
          <div className={classes.payCost}>3000</div>
        </div>
        <div className={classes.payFlexBox}>
          <div className={classes.payTotalTitle}>최종 결제금액</div>
          <div className={classes.payTotalCost}>13000</div>
        </div>
      </div>
      <MarketCartBuyButton />
    </>
  );
}

export default MarketCartPaymentBox;
