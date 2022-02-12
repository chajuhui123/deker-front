import CommBtn from "components/common/commBtn";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import { useState } from "react";
// import { Link } from "react-router-dom";
import classes from "./paymentPage.module.css";

const PaymentPage = () => {
  const [orderNo, setOerderNo] = useState("");
  const [userId, setUserId] = useState("");
  const [deliAddr, setDeliAddr] = useState("");
  const [deliMemo, setDdeliMemo] = useState("");
  const [totalPayAmt, setTotalPayAmt] = useState("");

  const replaceEvent = () => {
    setOerderNo("010101011010");
    setUserId("권예림");
    setDeliAddr("서울특별시 어쩌구 저쩌동 몇동 몇호");
    setDdeliMemo("집앞에 그냥 놔둬주세요");
    setTotalPayAmt("123,000");
    console.log("order no print: " + orderNo);
  };

  return (
    <div className={classes.paymentLayout}>
      <div className={classes.title}>
        <CommonPageTitle title="주문/결제" />
      </div>
      <div className={classes.paymentMain}>
        <div className={classes.orderman}>
          <div>
            <CommPageSemiTitle semiTitle="주문자" />
          </div>
          <textarea type="text" value={orderNo} />
        </div>
        <div className={classes.orderNoArea}>
          <div>
            <CommPageSemiTitle semiTitle="배송지" />
          </div>
          <textarea type="text" value={userId} />
        </div>
        <div className={classes.orderNoArea}>
          <div>
            <CommPageSemiTitle semiTitle="주문상품" />
          </div>
          <textarea type="text" value={deliAddr} />
        </div>
        <div className={classes.orderNoArea}>
          <div>
            <CommPageSemiTitle semiTitle="결제수단" />
          </div>
          <textarea type="text" value={deliMemo} />
        </div>
        <div className={classes.orderNoArea}>
          <div>
            <CommPageSemiTitle semiTitle="결제금액" />
          </div>
          <textarea type="text" value={totalPayAmt} />
        </div>
      </div>
      <div className={classes.goMoveBtn}>
        {/* <Link to="/market"> */}
        <CommBtn
          btnText="결제하기"
          btnWidth="200px"
          btnHeight="80px"
          border="3px solid rgb(66, 66, 226)"
          bgColor="rgbrgb(66, 66, 226)"
          radius="4px"
          txColor="rgb(248, 248, 248)"
          fnClick={replaceEvent}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};

export default PaymentPage;
