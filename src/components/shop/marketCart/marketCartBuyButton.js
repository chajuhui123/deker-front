import React from "react";
import { Link } from "react-router-dom";
import classes from "./marketCartBuyButton.module.css";

function MarketCartBuyButton(props) {
  console.log("props.paymentAmt: " + props.paymentAmt);
  console.log("props.deliAmt: " + props.deliAmt);
  return (
    <Link
      to={{
        pathname: "/payment",
        state: {
          paymentAmt: props.paymentAmt,
          deliAmt: props.deliAmt,
          // cartItemArray: props.cartItemArray,
        },
      }}
    >
      <button className={classes.buyButton}>상품 구매하기</button>
    </Link>
  );
}

export default MarketCartBuyButton;
