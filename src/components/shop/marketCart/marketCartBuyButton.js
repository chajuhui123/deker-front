import CommBtn from "components/common/commBtn";
import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./marketCartBuyButton.module.css";

function MarketCartBuyButton(props) {
  // console.log("props.paymentAmt: " + props.paymentAmt);
  // console.log("props.deliAmt: " + props.deliAmt);
  const history = useHistory();

  const buyBtnHandler = () => {
    history.push({
      pathname: "/payment",
      state: {
        paymentAmt: props.paymentAmt,
        deliAmt: props.deliAmt,
        cartItemArray: props.cartItemArray,
      },
    });
  };

  return (
    <div className={classes.buyBtn}>
      <CommBtn
        btnText="상품구매하기"
        btnWidth="100%"
        btnHeight="40px"
        border="3px solid rgb(66, 66, 226)"
        bgColor="rgbrgb(66, 66, 226)"
        radius="4px"
        txColor="rgb(248, 248, 248)"
        fnClick={buyBtnHandler}
      />
    </div>
  );
}

export default MarketCartBuyButton;
