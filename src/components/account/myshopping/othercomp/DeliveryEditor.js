import { isPhoneNumber } from "api/check";
import { postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import CommInput from "components/common/commInput";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import ModalTitle from "components/common/modalTitle";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./DeliveryEditor.module.css";
import DeliverySelect from "./deliverySelect";

const DeliveryEditor = (props) => {
  const dispatch = useDispatch();
  const [addId, setAddId] = useState("");
  const [addNickname, setAddNickname] = useState("");
  const [addName, setAddName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [addZip, setAddZip] = useState("");
  const [address, setAddress] = useState("");
  const [addDetail, setAddDetail] = useState("");
  const addNicknameHandler = (e) => {
    setAddNickname(e.target.value);
  };
  const fnResult = () => {
    if (!addNickname) {
      alert("배송지명을 입력 해주세요.");
      return;
    }
    if (!addName) {
      alert("받는 사람을 입력 해주세요.");
      return;
    }
    if (!isPhoneNumber(phoneNumber)) {
      alert("연락처를 확인 해주세요.");
      return;
    }
    if (!addZip) {
      alert("주소를 검색 해주세요.");
      return;
    }
    if (!addDetail) {
      alert("상세주소를 입력 해주세요.");
      return;
    }
    if (addId) {
      dispatch(
        postApi(
          "mb/mkt/mod/my-address",
          {
            addId,
            addNickname,
            addName,
            phoneNumber: phoneNumber.split("-").join(""),
            addZip,
            address,
            addDetail,
          },
          fnSaveCallback
        )
      );
    } else {
      dispatch(
        postApi(
          "mb/mkt/reg/my-address",
          {
            addNickname,
            addName,
            phoneNumber: phoneNumber.split("-").join(""),
            addZip,
            address,
            addDetail,
          },
          fnSaveCallback
        )
      );
    }
  };
  // 배송지 추가 저장 콜백
  const fnSaveCallback = (data) => {
    dispatch(
      modalAction.modalPopup({ isOpen: true, cont: <DeliverySelect /> })
    );
  };
  const fnSetModifyValue = useCallback((data) => {
    setAddId(data.addId);
    setAddNickname(data.addNickname);
    setAddName(data.addName);
    setPhoneNumber(data.phoneNumber);
    setAddZip(data.addZip);
    setAddress(data.address);
    setAddDetail(data.addDetail);
  }, []);
  /********************* DAUM 주소 *********************/
  const id = "daum-postcode"; // script가 이미 rending 되어 있는지 확인하기 위한 ID
  const src = "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js";
  const addDeliveryHandler = () => {
    window.daum.postcode.load(() => {
      const postcode = new window.daum.Postcode({
        oncomplete: function (data) {
          setAddZip(data.zonecode);
          setAddress(data.address);
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
    if (!!props.data) {
      fnSetModifyValue(props.data);
    }
  }, [fnSetModifyValue, props.data]);
  /*****************************************************/

  return (
    <div className={classes.modalMain}>
      <ModalTitle title="배송지 추가" />
      <div className={classes.contArea}>
        <div>
          <CommInput
            title="배송지명"
            value={addNickname}
            onChange={addNicknameHandler}
          />
        </div>
        <div>
          <CommInput
            title="받는 사람"
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
          />
        </div>
        <div>
          <CommInput
            title="연락처"
            value={phoneNumber}
            placeholder="-을 제외하고 입력해주세요."
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className={classes.addArea}>
          <CommPageSemiTitle semiTitle="주소" />
          <div className={classes.addRow}>
            <CommBtn
              btnText="주소찾기"
              btnWidth="100px"
              btnHeight="52px"
              fnClick={addDeliveryHandler}
            />
            <div className={classes.addZip}>
              <CommInput
                value={addZip}
                placeholder="우편번호"
                readOnly={true}
              />
            </div>
            <div className={classes.address}>
              <CommInput value={address} placeholder="주소" readOnly={true} />
            </div>
          </div>
          <CommInput
            value={addDetail}
            placeholder="상세주소"
            onChange={(e) => setAddDetail(e.target.value)}
          />
        </div>
        <CommBtn fnClick={fnResult} />
      </div>
    </div>
  );
};

export default DeliveryEditor;
