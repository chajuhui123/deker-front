import CommBtn from "components/common/commBtn";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./paymentCmpltPage.module.css";

const PaymentCmpltPage = () => {
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
    <div>
      <div className={classes.paymentLayout}>
        <div className={classes.title}>
          <CommonPageTitle title="주문완료" />
        </div>
        <div className={classes.paymentMain}>
          <div className={classes.orderNoArea}>
            <div>
              <CommPageSemiTitle semiTitle="주문번호" />
            </div>
            <textarea type="text" value={orderNo} />
          </div>
          <div className={classes.orderNoArea}>
            <div>
              <CommPageSemiTitle semiTitle="받는사람" />
            </div>
            <textarea type="text" value={userId} />
          </div>
          <div className={classes.orderNoArea}>
            <div>
              <CommPageSemiTitle semiTitle="배송지" />
            </div>
            <textarea type="text" value={deliAddr} />
          </div>
          <div className={classes.orderNoArea}>
            <div>
              <CommPageSemiTitle semiTitle="배송요청사항" />
            </div>
            <textarea type="text" value={deliMemo} />
          </div>
          <div className={classes.orderNoArea}>
            <div>
              <CommPageSemiTitle semiTitle="총 결제 금액" />
            </div>
            <textarea type="text" value={totalPayAmt} />
          </div>
        </div>
      </div>
      <div className={classes.goMoveBtn}>
        <div>
          {/* <Link to="/market"> */}
          <CommBtn
            btnText="주문 상세보기"
            btnWidth="200px"
            btnHeight="80px"
            border="3px solid rgb(66, 66, 226)"
            bgColor="rgb(248, 248, 248)"
            radius="4px"
            txColor="rgb(78, 78, 78)"
            fnClick={replaceEvent}
          />
          {/* </Link> */}
        </div>
        <div className={classes.shopContiBtn}>
          <Link to="/market">
            <CommBtn
              btnText="쇼핑 계속 하기"
              btnWidth="200px"
              btnHeight="80px"
              border="3px solid rgb(66, 66, 226)"
              bgColor="rgbrgb(66, 66, 226)"
              radius="4px"
              txColor="rgb(248, 248, 248)"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCmpltPage;
