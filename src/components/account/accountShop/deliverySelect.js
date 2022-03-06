import React, { useCallback, useEffect, useState } from "react";
import classes from "./deliverySelect.module.css";
import ModalTitle from "components/common/modalTitle";
import DeliveryCard from "components/common/deliveryCard";
import CommBtn from "components/common/commBtn";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { modalAction } from "store/modal-slice";
import DeliveryEditor from "components/account/accountShop/DeliveryEditor";

// const DUMMY_DATA = [
//   {
//     addId: "DV0001",
//     addNickname: "서울집",
//     addZip: "12345",
//     address: "서울시 동작구 신대방1길 48",
//     addName: "김효진",
//     phoneNumber: "010-7511-3693",
//     addMain: "N",
//   },
//   {
//     addId: "DV0002",
//     addNickname: "서울집",
//     addZip: "67890",
//     address: "서울시 용산구 한강대로1길",
//     addDetail: "트윈씨티남산 B동 2504호",
//     addName: "김효진",
//     phoneNumber: "010-7511-3693",
//     addMain: "N",
//   },
// ];

function DeliverySelect(props) {
  const dispatch = useDispatch();
  const [addresses, setAddresses] = useState([]);
  const modifyDeliveryHandler = (deliCode) => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <DeliveryEditor
            data={addresses.filter((add) => add.addId === deliCode)[0]}
          />
        ),
      })
    );
  };
  const deleteDeliveryHandler = (deliCode) => {
    console.log("deleteDeliveryHandler :: ", deliCode);
    dispatch(postApi("mb/mkt/rmv/my-address", { addId: deliCode }, fnCallback));
  };
  const selectDeliveryHandler = (deliCode) => {
    console.log("selectDeliveryHandler :: ", deliCode);
    alert("개발 중");
  };
  const addDeliveryHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: <DeliveryEditor />,
      })
    );
  };
  const setDeliveryMainHandler = (deliCode) => {
    dispatch(
      postApi("mb/mkt/mod/address-main", { addId: deliCode }, fnCallback)
    );
  };

  const getDeliveryAddress = useCallback(() => {
    dispatch(postApi("mb/mkt/get/my-address", null, fnGetCallback));
  }, [dispatch]);

  const fnGetCallback = (res) => {
    if (!!res) {
      console.log(
        `deliverySelect :: fnGetCallback :: res :: ${JSON.stringify(res)}`
      );
      setAddresses(res.data);
    }
  };
  const fnCallback = (res) => {
    if (!!res) {
      console.log(
        `deliverySelect :: fnCallback :: res :: ${JSON.stringify(res)}`
      );
      getDeliveryAddress();
    }
  };

  useEffect(() => {
    getDeliveryAddress();
  }, [getDeliveryAddress]);

  return (
    <div className={classes.deliSelArea}>
      <ModalTitle title="배송 조회" />
      <div className={classes.cardsArea}>
        {addresses?.map((deli) => (
          <DeliveryCard
            key={deli.addId}
            deliCode={deli.addId}
            fnModi={modifyDeliveryHandler}
            fnDel={deleteDeliveryHandler}
            fnSel={selectDeliveryHandler}
            fnSet={setDeliveryMainHandler}
            deliNm={deli.addNickname}
            zipCode={deli.addZip}
            addrNm={deli.address}
            addrDetailNm={deli.addDetail}
            addMain={deli.addMain}
            userNm={deli.addName}
            userPn={deli.phoneNumber}
          />
        ))}
        {/* {DUMMY_DATA2 && (
          <DeliveryCard
            key={DUMMY_DATA2.zonecode}
            deliCode={DUMMY_DATA2.zonecode}
            deliNm="내집"
            zipCode={DUMMY_DATA2.zonecode}
            addrNm={DUMMY_DATA2.address}
          />
        )} */}
      </div>
      <CommBtn btnText="배송지 추가" fnClick={addDeliveryHandler} />
    </div>
  );
}

export default DeliverySelect;
