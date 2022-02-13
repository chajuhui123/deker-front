import { useState } from "react";
import classes from "./totalPaymentAmt.module.css";

/**
 * 페이지 메인 TITLE component
 * @param {String} paymentAmt 총 상품 금액
 * @param {String} deliAmt 배송비
 * @returns
 */

const TotalPaymentAmt = (props) => {
  var paymentAmt = Number(props.paymentAmt);
  var deliAmt = Number(props.deliAmt);
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
