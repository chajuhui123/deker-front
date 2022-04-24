import DeliverySelect from "components/account/accountShop/deliverySelect";
import CommBtn from "components/common/commBtn";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./paymentPage.module.css";
import PresentFriendPopup from "./presentFriendPopup";
import PayBy from "./payBy";
import PayBtn from "./payBtn";
import MyOrderPrdtList from "components/account/accountShop/myOrderPrdtList";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { postApi } from "api/fetch-api";

const PaymentPage = (props) => {
  const dispatch = useDispatch();

  const location = useLocation();
  // const departureFrom = location.state?.departure; // 어디서 호출되었는지
  const paymentAmt = location.state?.paymentAmt; // 주문상품 총 금액
  const deliAmt = location.state?.deliAmt; // 배송비
  const orderId = location.state?.orderId; // 주문번호 (productOptionSelectBox, 장바구니에서 넘어오는 값)
  const buynowDtl = location.state?.buynowDtl; // 상품 옵션 (바로구매)
  const cartItemArray = location.state?.cartItemArray; // 주문 상품 리스트

  const [presentUserId, setPresentUserId] = useState("");
  const [orderNm, setOerderNm] = useState("");
  // const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [rcvNm, setRcvNm] = useState("");
  const [rcvTelNo, setRcvTelNo] = useState("");
  const [rcvZipCode, setRcvZipCode] = useState("");
  const [rcvAddr, setRcvAddr] = useState("");
  const [deliMemo, setDeliMemo] = useState("");
  const [productName, setProductName] = useState("");
  const [productListToPay, setProductListToPay] = useState(null);

  const orderNmInputHandler = (e) => {
    setOerderNm(e.target.value);
  };
  // const emailInputHandler = (e) => {
  //   setEmail(e.target.value);
  // };
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
    setRcvZipCode(e.target.value);
  };
  const deliMemoInputHandler = (e) => {
    setDeliMemo(e.target.value);
  };

  const presentLinkHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <PresentFriendPopup
            userId={props.userId}
            presentUserIdHandler={presentUserIdHandler}
          />
        ),
      })
    );
  };

  const fillSameHandler = () => {
    setRcvNm(orderNm);
    setRcvTelNo(telNo);
  };

  const deliveryAddrSelectHandler = (deliveryInfo) => {
    setRcvNm(deliveryInfo.userNm);
    setRcvTelNo(deliveryInfo.userPn);
    setRcvZipCode(deliveryInfo.zipCode);
    setRcvAddr(deliveryInfo.addr);
  };

  const deliverySelectHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <DeliverySelect
            deliveryAddrSelectHandler={deliveryAddrSelectHandler}
          />
        ),
      })
    );
  };

  // 선물할 계정 받아옴
  const presentUserIdHandler = (data) => {
    setPresentUserId(data);
    console.log(presentUserId);
  };

  // const emailD = useMemo(
  //   () => [
  //     { value: "emailD1", label: "gamil.com" },
  //     { value: "emailD2", label: "naver.com" },
  //     { value: "emailD3", label: "등등" },
  //   ],
  //   []
  // );

  const fnCallbackCartSelect = (res) => {
    if (!!res) {
      console.log("Back data: " + res.data.productOption);
      setProductListToPay(res.data.productOption);
      setProductName(res.data.productOption[0].productName);
      setOerderNm(res.data.marketAddress.addName);
      setTelNo(res.data.marketAddress.phoneNumber);
      setRcvZipCode(res.data.marketAddress.addZip);
      setRcvAddr(res.data.marketAddress.address);
      setRcvNm(res.data.marketAddress.addName);
      setRcvTelNo(res.data.marketAddress.phoneNumber);
    } else {
      // 실패
    }
  };

  useEffect(() => {
    if (productListToPay) return;
    console.log(orderId);
    dispatch(
      postApi(
        "mb/mkt/get/order-list",
        {
          paid_amount: paymentAmt + deliAmt,
          orderId: orderId,
          cartIdArr: cartItemArray,
        },
        fnCallbackCartSelect
      )
    );
  }, [productListToPay]);

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
          {/* <div className={classes.dtlArea}>
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
          </div> */}
          <div className={classes.dtlArea}>
            <div className={classes.dtlText}>연락처</div>
            <textarea
              className={classes.inputArea}
              type="text"
              value={telNo}
              // maxLength="100"
              placeholder="전화번호를 입력해주세요."
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
            <textarea
              className={classes.inputArea}
              type="text"
              value={rcvTelNo}
              // maxLength="100"
              placeholder="전화번호를 입력해주세요."
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
                value={rcvZipCode}
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
              maxLength="100"
              placeholder="배송 요청사항을 선택하세요."
              onChange={deliMemoInputHandler}
            />
          </div>
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="주문상품" />
          <hr className={classes.lineD} />
          <MyOrderPrdtList
            orderedProductList={productListToPay}
            departure="productListToPay"
          />
          {/* )} */}
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="결제가능수단" />
          <hr className={classes.lineD} />
          <PayBy />
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="결제금액" />
          <hr className={classes.lineD} />
          <TotalPaymentAmt paymentAmt={paymentAmt} deliAmt={deliAmt} />
        </div>
      </div>
      {/* 결제 데이터 넘겨야 함 */}
      <PayBtn
        paymentAmt={paymentAmt}
        deliAmt={deliAmt}
        merchant_uid={orderId}
        productName={productName}
        orderQuantity={buynowDtl?.orderQuantity}
        telNo={telNo}
        rcvZipCode={rcvZipCode}
        rcvAddr={rcvAddr}
      />
    </div>
  );
};

export default PaymentPage;
