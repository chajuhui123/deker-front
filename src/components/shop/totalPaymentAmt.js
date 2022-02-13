import { useState } from "react";
import classes from "./totalPaymentAmt.module.css";

const TotalPaymentAmt = (props) => {
  var paymentAmt = props.paymentAmt;
  var deliAmt = props.deliAmt;
  var ttlPaymentAmt = Number(paymentAmt) + Number(deliAmt);

  return (
    <div>
      <div className={classes.paymentAmtArea}>
        <div className={classes.dtlText}>총 상품 금액</div>
        <div className={classes.goRight}>
          <textarea
            type="text"
            className={classes.paymentAmt}
            value={paymentAmt.toLocaleString("ko-KR")}
            readOnly
          />
        </div>
      </div>
      <div className={classes.paymentAmtArea}>
        <div className={classes.dtlText}>배송비</div>
        <div className={classes.goRight}>
          <textarea
            type="text"
            className={classes.paymentAmt}
            value={deliAmt.toLocaleString("ko-KR")}
            readOnly
          />{" "}
        </div>
      </div>
      <div className={classes.paymentAmtArea}>
        <div className={classes.dtlText2}>최종결제금액</div>
        <div className={classes.goRight}>
          <textarea
            type="text"
            className={classes.paymentAmt2}
            value={ttlPaymentAmt.toLocaleString("ko-KR")}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default TotalPaymentAmt;
