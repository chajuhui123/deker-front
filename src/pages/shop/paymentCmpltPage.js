import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./paymentCmpltPage.module.css";

const PaymentCmpltPage = (props) => {
  const history = useHistory();

  // 결제페이지에서 넘어오는 결제 데이터
  const location = useLocation();
  const merchant_uid = location.state.merchant_uid;
  const userName = location.state.name;
  const totalPayAmt = location.state.paid_amount;
  const buyer_addr = location.state.buyer_addr;

  const showOrderDtlBtnHandler = () => {
    history.push("/myShopping");
  };

  const shoppingContinueBtnHandler = () => {
    history.push("/market");
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
                value={merchant_uid}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>받는사람</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={userName}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>배송지</div>
              <textarea
                className={classes.dtlText}
                type="text"
                value={buyer_addr}
              />
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.sectionTxt}>배송요청사항</div>
              <textarea
                className={classes.dtlText}
                type="text"
                // value={deliMemo}
                value={`1111`}
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
          <CommBtn
            btnText="주문 상세보기"
            btnWidth="200px"
            btnHeight="80px"
            border="3px solid rgb(66, 66, 226)"
            bgColor="rgb(248, 248, 248)"
            radius="4px"
            txColor="rgb(78, 78, 78)"
            fontSize="20px"
            fnClick={showOrderDtlBtnHandler}
          />
        </div>
        <div className={classes.shopContiBtn}>
          <CommBtn
            btnText="쇼핑 계속 하기"
            btnWidth="200px"
            btnHeight="80px"
            border="3px solid rgb(66, 66, 226)"
            bgColor="rgbrgb(66, 66, 226)"
            radius="4px"
            fontSize="20px"
            txColor="rgb(248, 248, 248)"
            fnClick={shoppingContinueBtnHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCmpltPage;
