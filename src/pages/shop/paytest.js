import React from "react";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

function Paytest() {
  const payBtnHandler = () => {
    /* 1. 가맹점 식별 */
    var IMP = window.IMP; // 생략 가능
    IMP.init("{imp83459588}"); // 예: imp00000000

    /* 2. 결제 데이터 정의 */
    const data = {
      // param
      pg: "html5_inicis", // PG사
      pay_method: "card", //결제수단
      merchant_uid: "ORD20180131-0000011", // 주문번호
      name: "노르웨이 회전 의자", // 주문명
      amount: 64900, // 결제금액
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
      // jQuery로 HTTP 요청

      const { success, merchant_uid, error_msg } = rsp;

      console.log("check111111111111111111111111111111");
      /** 일단 주석 */
      jQuery
        .ajax({
          url: "{서버의 결제 정보를 받는 endpoint}", // 예: https://www.myservice.com/payments/complete
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            imp_uid: rsp.imp_uid,
            merchant_uid: rsp.merchant_uid,
          },
        })
        .done(function (data) {
          //   가맹점 서버 결제 API 성공시 로직
        });
    } else {
      alert("결제에 실패하였습니다. 에러 내용: " + rsp.error_msg);
    }
  }
  return <button onClick={payBtnHandler}>결제하기</button>;
}

export default Paytest;
