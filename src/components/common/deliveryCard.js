import React from "react";
import classes from "./deliveryCard.module.css";

/**
 * 배송지 카드형식으로 보여주는 component
 * @param {String} deliCode 배송코드
 * @param {Function} fnModi 수정버튼 method (배송코드 parameter 넣어서 호출)
 * @param {Function} fnDel 삭제버튼 method (배송코드 parameter 넣어서 호출)
 * @param {Function} fnSel 선택버튼 method (배송코드 parameter 넣어서 호출)
 * @param {String} deliNm 배송지명
 * @param {String} zipCode 주소코드
 * @param {String} addrNm 배송지주소
 * @param {String} userNm 수신자명
 * @param {String} userPn 수신자폰번호
 * @returns
 */
function DliveryCard({
  deliCode,
  fnModi,
  fnDel,
  fnSel,
  deliNm,
  zipCode,
  addrNm,
  userNm,
  userPn,
}) {
  const modifyDeliveryHandler = (e) => {
    fnModi(deliCode);
  };
  const deleteDeliveryHandler = (e) => {
    fnDel(deliCode);
  };
  const selectDeliveryHandler = (e) => {
    fnSel(deliCode);
  };
  return (
    <div className={classes.cardArea} id={deliCode}>
      <div className={classes.deliNm}>{deliNm}</div>
      <div className={classes.addr}>
        ({zipCode}) {addrNm}
      </div>
      <div className={classes.userInfo}>
        {userNm} {userPn}
      </div>
      <div className={classes.btnArea}>
        <button className={classes.modiBtn} onClick={modifyDeliveryHandler}>
          수정
        </button>
        <button className={classes.delBtn} onClick={deleteDeliveryHandler}>
          삭제
        </button>
        <button className={classes.selBtn} onClick={selectDeliveryHandler}>
          선택
        </button>
      </div>
    </div>
  );
}

export default DliveryCard;
