import React from "react";
import classes from "./deliverySelect.module.css";
import ModalTitle from "components/common/modalTitle";
import DeliveryCard from "components/common/deliveryCard";
import CommBtn from "components/common/commBtn";

const DUMMY_DATA = [
  {
    deliveryCode: "DV0001",
    deliveryName: "서울집",
    deliveryZip: "12345",
    deliveryAddr: "서울시 동작구 신대방1길 48 204호",
    receiverName: "김효진",
    receiverPhNo: "010-7511-3693",
  },
  {
    deliveryCode: "DV0002",
    deliveryName: "서울집",
    deliveryZip: "67890",
    deliveryAddr: "서울시 용산구 한강대로1길 트윈씨티남산 B동 2504호",
    receiverName: "김효진",
    receiverPhNo: "010-7511-3693",
  },
];

function DeliverySelect(props) {
  const modifyDeliveryHandler = (deliCode) => {
    console.log("modifyDeliveryHandler :: ", deliCode);
    alert("개발 중");
  };
  const deleteDeliveryHandler = (deliCode) => {
    console.log("deleteDeliveryHandler :: ", deliCode);
    alert("개발 중");
  };
  const selectDeliveryHandler = (deliCode) => {
    console.log("selectDeliveryHandler :: ", deliCode);
    alert("개발 중");
  };
  const addDeliveryHandler = (e) => {
    alert("개발 중");
  };
  return (
    <div className={classes.deliSelArea}>
      <ModalTitle title="배송 조회" />
      <div className={classes.cardsArea}>
        {DUMMY_DATA.map((deli) => (
          <DeliveryCard
            key={deli.deliveryCode}
            deliCode={deli.deliveryCode}
            fnModi={modifyDeliveryHandler}
            fnDel={deleteDeliveryHandler}
            fnSel={selectDeliveryHandler}
            deliNm={deli.deliveryName}
            zipCode={deli.deliveryZip}
            addrNm={deli.deliveryAddr}
            userNm={deli.receiverName}
            userPn={deli.receiverPhNo}
          />
        ))}
      </div>
      <CommBtn btnText="배송지 추가" fnClick={addDeliveryHandler} />
    </div>
  );
}

export default DeliverySelect;
