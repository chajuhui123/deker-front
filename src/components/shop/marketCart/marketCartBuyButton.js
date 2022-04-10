import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./marketCartBuyButton.module.css";

function MarketCartBuyButton(props) {
  console.log("props.paymentAmt: " + props.paymentAmt);
  console.log("props.deliAmt: " + props.deliAmt);
  const history = useHistory();

  return (
    <button
      className={classes.buyButton}
      onClick={() => {
        history.push({
          pathname: "/payment",
          state: {
            paymentAmt: props.paymentAmt,
            deliAmt: props.deliAmt,
          },
        });
      }}
    >
      상품 구매하기
    </button>
  );
}

export default MarketCartBuyButton;
