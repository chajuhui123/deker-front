import MyReviewList from "components/account/accountReview/myReviewList";
import CommBtn from "components/common/commBtn";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
// import { Link } from "react-router-dom";
import classes from "./paymentPage.module.css";
import PresentFriendPopup from "./presentFriendPopup";

const PaymentPage = () => {
  const [orderNm, setOerderNm] = useState("");
  const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [rcvNm, setRcvNm] = useState("");
  const [rcvTelNo, setRcvTelNo] = useState("");
  const [rcvAddr, setRcvAddr] = useState("");
  const [deliMemo, setDeliMemo] = useState("");
  const [totalPayAmt, setTotalPayAmt] = useState("");
  const dispatch = useDispatch();

  const replaceEvent = () => {
    setTotalPayAmt("123,000");
    console.log(totalPayAmt);
  };

  const orderNmInputHandler = (e) => {
    setOerderNm(e.target.value);
  };
  const emailInputHandler = (e) => {
    setEmail(e.target.value);
  };
  const telNoInputHandler = (e) => {
    setTelNo(e.target.value);
  };
  const rcvNmInputHandler = (e) => {
    setRcvNm(e.target.value);
  };
  const rcvTelNoInputHandler = (e) => {
    setRcvTelNo(e.target.value);
  };
  const rcvAddrInputHandler = (e) => {
    setRcvAddr(e.target.value);
  };
  const deliMemoInputHandler = (e) => {
    setDeliMemo(e.target.value);
  };

  const presentLinkHandler = () => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <PresentFriendPopup /> })
    );
  };

  const fillSameHandler = () => {
    setRcvNm(orderNm);
    setRcvTelNo(telNo);
  };

  const DUMMY_DATA_UNREVIEWED = [
    {
      id: 11,
      product_image:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      product_brand: "시디즈",
      product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option: "블랙",
    },
    {
      id: 12,
      product_image:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand: "시디즈",
      product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option: "블랙",
    },
  ];
  return (
    <div className={classes.paymentLayout}>
      <div className={classes.title}>
        <CommonPageTitle title="주문/결제" />
      </div>
      <div className={classes.paymentMain}>
        <div className={classes.section}>
          <div className={classes.addpresent}>
            <CommPageSemiTitle semiTitle="주문자" />
            <button className={classes.present} onClick={presentLinkHandler}>
              선물하기
            </button>
          </div>
          <hr className={classes.lineD} />
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>이름</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={orderNm}
              // maxLength="100"
              placeholder="이름을 입력해주세요."
              onChange={orderNmInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>이메일</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={email}
              // maxLength="100"
              placeholder="이메일을 입력해주세요."
              onChange={emailInputHandler}
            />
            <div className={classes.dtlText3}>@</div>
            <textarea
              className={classes.inputArea2}
              type="text"
              value={orderNm}
              // maxLength="100"
              placeholder="선택해주세요."
              onChange={orderNmInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>연락처</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={telNo}
              // maxLength="100"
              placeholder="연락처를 입력해주세요."
              onChange={telNoInputHandler}
            />
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.addpresent}>
            <CommPageSemiTitle semiTitle="배송지" />
            <button className={classes.same} onClick={fillSameHandler}>
              위와 동일하게 채우기
            </button>
          </div>
          <hr className={classes.lineD} />
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>받는사람</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={rcvNm}
              // maxLength="100"
              placeholder="받는사람을 입력해주세요."
              onChange={rcvNmInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>연락처</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={rcvTelNo}
              // maxLength="100"
              placeholder="연락처를 입력해주세요."
              onChange={rcvTelNoInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>주소</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={rcvAddr}
              // maxLength="100"
              placeholder="주소를 입력해주세요."
              onChange={rcvAddrInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <textarea
              className={classes.inputArea}
              type="text"
              value={deliMemo}
              // maxLength="100"
              placeholder="배송 요청사항을 선택하세요."
              onChange={deliMemoInputHandler}
            />
          </div>
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="주문상품" />
          <hr className={classes.lineD} />
          <MyReviewList reviews={DUMMY_DATA_UNREVIEWED} />
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="결제수단" />
          <hr className={classes.lineD} />
          <div className={classes.dtlArea3}>
            <div className={classes.paymentD}>카드</div>
            <div className={classes.paymentD}>무통장입금</div>
            <div className={classes.paymentD}>카카오페이</div>
            <div className={classes.paymentD}>네이버페이</div>
            <div className={classes.paymentD}>페이코</div>
            <div className={classes.paymentD}>토스</div>
          </div>
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="결제금액" />
          <hr className={classes.lineD} />
          <div className={classes.dtlArea2}>
            <div className={classes.dtlText}>총 상품 금액</div>
            <textarea
              type="text"
              className={classes.paymentAmt}
              value={totalPayAmt}
              readOnly
            />
          </div>
          <div className={classes.dtlArea2}>
            <div className={classes.dtlText}>배송비</div>
            <textarea
              type="text"
              className={classes.paymentAmt}
              value={totalPayAmt}
              readOnly
            />
          </div>
          <div className={classes.dtlArea2}>
            <div className={classes.dtlText2}>최종결제금액</div>
            <textarea
              type="text"
              className={classes.paymentAmt2}
              value={totalPayAmt}
              readOnly
            />
          </div>
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
