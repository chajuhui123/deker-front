import MyReviewList from "components/account/accountReview/myReviewList";
import DeliverySelect from "components/account/accountShop/deliverySelect";
import CommBtn from "components/common/commBtn";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { modalAction } from "store/modal-slice";
import classes from "./paymentPage.module.css";
import PresentFriendPopup from "./presentFriendPopup";
import PayBy from "./payBy";
import PayBtn from "./payBtn";

const PaymentPage = () => {
  const [orderNm, setOerderNm] = useState("");
  const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [rcvNm, setRcvNm] = useState("");
  const [rcvTelNo, setRcvTelNo] = useState("");
  const [rcvAddr, setRcvAddr] = useState("");
  const [deliMemo, setDeliMemo] = useState("");
  // const [totalPayAmt, setTotalPayAmt] = useState(0);
  const dispatch = useDispatch();

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

  const deliverySelectHandler = () => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <DeliverySelect /> })
    );
  };
  const telhead = useMemo(
    () => [
      { value: "010", label: "010" },
      { value: "011", label: "011" },
      { value: "02", label: "02" },
      { value: "등등", label: "등등" },
    ],
    []
  );
  const emailD = useMemo(
    () => [
      { value: "emailD1", label: "gamil.com" },
      { value: "emailD2", label: "naver.com" },
      { value: "emailD3", label: "등등" },
    ],
    []
  );
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
            <div>
              <img
                src="https://cdn.w600.comps.canstockphoto.co.kr/%EC%83%81%EC%9E%90-%EC%99%84%EC%A0%84%ED%95%9C-%EC%84%A0%EB%AC%BC-pictogram-%EB%8B%A8%EC%9D%BC%EC%9D%98-48x48-%EB%B2%A1%ED%84%B0-eps-%EB%B2%A1%ED%84%B0_csp53157584.jpg"
                alt="선물하기img"
              />
              <div
                className={classes.presentPopup}
                onClick={presentLinkHandler}
              >
                선물하기
              </div>
            </div>
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
            <div className={classes.select2}>
              <Select options={emailD} defaultValue={emailD[0]} />
            </div>
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>연락처</div>
            <div className={classes.select}>
              <Select options={telhead} defaultValue={telhead[0]} />
            </div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={telNo}
              // maxLength="100"
              placeholder="남은 연락처를 입력해주세요."
              onChange={telNoInputHandler}
            />
          </div>
        </div>
        <div className={classes.section}>
          <div className={classes.addpresent}>
            <CommPageSemiTitle semiTitle="배송지" />
            <div className={classes.presentPopup} onClick={fillSameHandler}>
              위와 동일하게 채우기
            </div>
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
            <div className={classes.select}>
              <Select options={telhead} defaultValue={telhead[0]} />
            </div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={rcvTelNo}
              // maxLength="100"
              placeholder="남은 연락처를 입력해주세요."
              onChange={rcvTelNoInputHandler}
            />
          </div>
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>주소</div>
            <div className={classes.dtlareaAddr}>
              <CommBtn
                btnText="주소찾기"
                btnWidth="70px"
                btnHeight="35px"
                border="3px solid rgb(66, 66, 226)"
                bgColor="rgb(254, 254, 254)"
                radius="8px"
                txColor="rgb(66, 66, 226)"
                fontSize="15px"
                fnClick={deliverySelectHandler}
              />
              <textarea
                className={classes.inputArea3}
                type="text"
                value={rcvAddr}
                placeholder="우편번호"
                onChange={rcvAddrInputHandler}
                readOnly
              />
            </div>
          </div>
          <textarea
            className={classes.inputAreaAddr}
            type="text"
            value={rcvAddr}
            placeholder=""
            onChange={rcvAddrInputHandler}
            readOnly
          />
          <div className={classes.dtlArea}>
            <textarea
              className={classes.inputAreaDeliMemo}
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
          <CommPageSemiTitle semiTitle="결제가능수단" />
          <hr className={classes.lineD} />
          <PayBy />
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="결제금액" />
          <hr className={classes.lineD} />
          <TotalPaymentAmt paymentAmt="123000" deliAmt="3000" />
        </div>
      </div>
      {/* 결제 데이터 넘겨야 함 */}
      <PayBtn />
    </div>
  );
};

export default PaymentPage;
