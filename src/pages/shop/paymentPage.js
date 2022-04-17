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
import MyOrderPrdtList from "components/account/accountShop/myOrderPrdtList";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import MyOrderPrdtItem from "components/account/accountShop/myOrderPrdtItem";
import { postApi } from "api/fetch-api";

const PaymentPage = (props) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const departureFrom = location.state?.departure; // 어디서 호출되었는지
  const paymentAmt = location.state?.paymentAmt; // 주문상품 총 금액
  const deliAmt = location.state?.deliAmt; // 배송비
  const orderId = location.state?.orderId; // 주문번호 (productOptionSelectBox에서 넘어오는 값)
  const productId = location.state?.productId; // 상품번호(productOptionSelectBox에서 넘어오는 값)
  const buynowDtl = location.state?.buynowDtl; // 상품 옵션 (바로구매)

  const [presentUserId, setPresentUserId] = useState("");
  const [orderNm, setOerderNm] = useState("");
  const [email, setEmail] = useState("");
  const [telNo, setTelNo] = useState("");
  const [rcvNm, setRcvNm] = useState("");
  const [rcvTelNo, setRcvTelNo] = useState("");
  const [rcvZipCode, setRcvZipCode] = useState("");
  const [rcvAddr, setRcvAddr] = useState("");
  const [deliMemo, setDeliMemo] = useState("");

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
    // console.log(presentUserId);
  };

  // const telhead = useMemo(
  //   () => [
  //     { value: "010", label: "010" },
  //     { value: "011", label: "011" },
  //     { value: "02", label: "02" },
  //     { value: "등등", label: "등등" },
  //   ],
  //   []
  // );
  const emailD = useMemo(
    () => [
      { value: "emailD1", label: "gamil.com" },
      { value: "emailD2", label: "naver.com" },
      { value: "emailD3", label: "등등" },
    ],
    []
  );

  /* 바로 구매 시, productId로 상품정보 받아옴 시작 */
  const [mktProductId, setMktProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");

  const fnCallbackPrdtDtl = (res) => {
    if (!!res) {
      console.log(res);
      setMktProductId(res.data.productDetail.mktProductId);
      setProductName(res.data.productDetail.productName);
      setProductImg(res.data.productDetail.productImg);
    } else {
      // 실패
    }
  };

  if (departureFrom === "buynow") {
    dispatch(
      postApi(
        "nmb/mkt/get/product-detail",
        { productId: productId },
        fnCallbackPrdtDtl
      )
    );
  }
  /* 바로 구매 시, productId로 상품정보 받아옴 끝*/

  const DUMMY_DATA = [
    {
      productId: "PDTID_00000000000002",
      orderId: "odrId_99999999999997",
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productBrand: "deker",
      productName: "네이처 디퓨저",
      option1: "COLOR",
      option1Data: "C01",
      option1Nm: "색상",
      option1DataNm: "흰색",
      option2: "SIZE",
      option2Data: "S01",
      option2Nm: "사이즈",
      option2DataNm: "260",
      optionList: ["흰색", "260"],
      orderNumber: "99999999999997",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220120",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 9,
    },
    {
      productId: "PDTID_00000000000001",
      orderId: "odrId_99999999999998",
      productImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      productBrand: "deker",
      productName: "플라워 디퓨저",
      option1: "COLOR",
      option1Data: "C01",
      option1Nm: "색상",
      option1DataNm: "흰색",
      option2: "SIZE",
      option2Data: "S02",
      option2Nm: "사이즈",
      option2DataNm: "255",
      optionList: ["흰색", "255"],
      orderNumber: "99999999999998",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220120",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 2,
    },
    {
      productId: "PDTID_00000000000001",
      orderId: "odrId_99999999999999",
      productImg:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      productBrand: "deker",
      productName: "플라워 디퓨저",
      option1: "COLOR",
      option1Data: "C02",
      option1Nm: "색상",
      option1DataNm: "검은색",
      option2: "SIZE",
      option2Data: "S01",
      option2Nm: "사이즈",
      option2DataNm: "260",
      optionList: ["검은색", "260"],
      orderNumber: "99999999999999",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220122",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 9,
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
            {/* <div className={classes.select}>
              <Select options={telhead} defaultValue={telhead[0]} />
            </div> */}
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
            {/* <div className={classes.select}>
              <Select options={telhead} defaultValue={telhead[0]} />
            </div> */}
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
              // maxLength="100"
              placeholder="배송 요청사항을 선택하세요."
              onChange={deliMemoInputHandler}
            />
          </div>
        </div>
        <div className={classes.section}>
          <CommPageSemiTitle semiTitle="주문상품" />
          <hr className={classes.lineD} />
          {departureFrom === "buynow" ? (
            <MyOrderPrdtItem
              key={orderId}
              id={orderId}
              productId={mktProductId}
              productImg={productImg}
              productName={productName}
              // productBrand={orderProduct.productBrand}
              orderId={orderId}
              orderPrice={paymentAmt}
              departure={departureFrom}
              option1Nm={buynowDtl?.option1}
              option2Nm={buynowDtl?.option2}
              option1DataNm={buynowDtl?.option1DataName}
              option2DataNm={buynowDtl?.option2DataName}
              orderQuantity={buynowDtl?.orderQuantity}
            />
          ) : (
            <MyOrderPrdtList
              orderedProductList={DUMMY_DATA}
              departure="productListToPay"
            />
          )}
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
      <PayBtn paymentAmt={paymentAmt} deliAmt={deliAmt} />
    </div>
  );
};

export default PaymentPage;
