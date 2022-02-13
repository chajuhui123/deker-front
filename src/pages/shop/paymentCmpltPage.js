import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./paymentCmpltPage.module.css";

const PaymentCmpltPage = () => {
  const [orderNo, setOerderNo] = useState("");
  const [userId, setUserId] = useState("");
  const [deliAddr, setDeliAddr] = useState("");
  const [deliMemo, setDdeliMemo] = useState("");
  const [totalPayAmt, setTotalPayAmt] = useState(0);

  const replaceEvent = () => {
    setOerderNo("010101011010");
    setUserId("권예림");
    setDeliAddr("서울특별시 어쩌구 저쩌동 몇동 몇호");
    setDdeliMemo("집앞에 그냥 놔둬주세요");
    setTotalPayAmt(123000);
    console.log("order no print: " + orderNo);
  };

  return (
    <div>
      <div className={classes.paymentLayout}>
        <div className={classes.title}>
          <CommonPageTitle title="주문완료" />
        </div>
        <div className={classes.paymentMain}>
          <div className={classes.subMain}>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>주문번호</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={orderNo}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>받는사람</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={userId}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>배송지</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={deliAddr}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>배송요청사항</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={deliMemo}
              />
            </div>
            <hr className={classes.lineD} />
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>총 결제 금액</div>
              <textarea
                className={classes.dtlText2}
                type="text"
                value={totalPayAmt.toLocaleString("ko-KR") + "원"}
              />
            </div>
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
            fontSize="20px"
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
              fontSize="20px"
              txColor="rgb(248, 248, 248)"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCmpltPage;
