import React, { useEffect } from "react";
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

  // 주소 조회 daum API 사용 시작
  const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
  const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const DUMMY_DATA2 = [];

  // const postcodeRef = (useRef < HTMLDivElement) | (null > null);
  const addDeliveryHandler = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          console.log(data);
          DUMMY_DATA2.push(data);
        },
      });
      postcode.open();
    });
  };
  useEffect(() => {
    const isAlready = document.getElementById(id);

    if (!isAlready) {
      const script = document.createElement("script");
      script.src = src;
      script.id = id;
      document.body.append(script);
    }
  }, []);

  const pushclick = () => {
    console.log(DUMMY_DATA2[0]);
  };
  // 주소 조회 daum API 사용 끝

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
        {/* {DUMMY_DATA2?.length && (
          <DeliveryCard
            key={DUMMY_DATA2[0].zonecode}
            deliCode={DUMMY_DATA2[0].zonecode}
            deliNm="내집"
            zipCode={DUMMY_DATA2[0].zonecode}
            addrNm={DUMMY_DATA2[0].address}
          />
        )} */}
      </div>
      <CommBtn btnText="배송지 추가" fnClick={addDeliveryHandler} />
      <button onClick={pushclick}>push</button>
    </div>
  );
}

export default DeliverySelect;
