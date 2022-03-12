import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import classes from "./payBtn.module.css";

import jQuery from "jquery";
import { Link } from "@mui/material";
import { Route } from "react-router-dom";
window.$ = window.jQuery = jQuery;

function PayBtn() {
  const dispatch = useDispatch();
  const [paydata, setPaydata] = useState(null);

  const payBtnHandler = () => {
    /* 1. 가맹점 식별 */
    var { IMP } = window; // 생략 가능
    IMP.init("imp83459588"); // 예: imp00000000

    /* 2. 결제 데이터 정의 */
    const data = {
      // param
      pg: "html5_inicis", // PG사
      pay_method: "card", //결제수단
      merchant_uid: "ORD20180131-0000018", // 주문번호
      name: "노르웨이 회전 의자", // 주문명
      amount: 100, // 결제금액
      buyer_email: "gildong@gmail.com", // 구매자 이메일
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "010-4242-4242", // 구매자 전화번호
      buyer_addr: "서울특별시 강남구 신사동", // 구매자 주소
      buyer_postcode: "01181", // 구매자 우편번호
    };

    /* 4. 결제창 호출 */
    IMP.request_pay(data, callback);
  };

  /* 3. 콜백함수 정의 */
  function callback(rsp) {
    if (rsp.success) {
      // 결제 성공 시: 결제 승인 또는 가상계좌 발급에 성공한 경우
      var msg = "결제가 완료되었습니다.";
      setPaydata(rsp);

      // 결제 금액 등 결제 내용 Back 통신으로 확인
      dispatch(
        postApi(
          "nmb/mkt/get/reg-product",
          {
            buyer_addr: rsp.buyer_addr,
            buyer_email: rsp.buyer_email,
            buyer_name: rsp.buyer_name,
            buyer_postcode: rsp.buyer_postcode,
            buyer_tel: rsp.buyer_tel,
            card_name: rsp.card_name,
            card_number: rsp.card_number,
            currency: rsp.currency,
            merchant_uid: rsp.merchant_uid,
            name: rsp.name,
            paid_amount: rsp.paid_amount,
            pay_method: rsp.pay_method,
            success: true,
          },
          function (res) {
            if (!!res) {
              // 결제 완료 페이지로 이동
              // <Route path="/payment/paymentCmplt" component={paydata} />;
              <Link
                to={{
                  pathname: "/payment/paymentCmplt", // StoreSortPage
                  state: {
                    merchant_uid: rsp.merchant_uid,
                    name: rsp.name,
                    paid_amount: rsp.paid_amount,
                    buyer_addr: rsp.buyer_addr,
                  },
                }}
              />;
            } else {
              // 비정상로직;
              alert("data error");
            }
          }
        )
      );
      // jQuery로 HTTP 요청
      // jQuery
      //   .ajax({
      //     url: "{http://localhost:3000/paytest}", // 예: https://www.myservice.com/payments/complete
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     data: {
      //       imp_uid: rsp.imp_uid,
      //       merchant_uid: rsp.merchant_uid,
      //     },
      //   })
      //   .done(function (data) {
      //     //   가맹점 서버 결제 API 성공시 로직
      //     alert("success");
      //   });
    } else {
      msg = "결제에 실패하였습니다.";
      msg += "에러내용 : " + rsp.error_msg;
    }
    alert(msg);
  }
  return (
    <div className={classes.goMoveBtn}>
      <CommBtn
        btnText="결제하기"
        btnWidth="200px"
        btnHeight="80px"
        border="3px solid rgb(66, 66, 226)"
        bgColor="rgbrgb(66, 66, 226)"
        radius="4px"
        txColor="rgb(248, 248, 248)"
        fnClick={payBtnHandler}
      />
    </div>
  );
}

export default PayBtn;
