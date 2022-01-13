import React, { useState } from "react";
import DeliStateDropdown from "../../common/dropdown/deliStateDropdown";
import PeriodDropdown from "components/common/dropdown/periodDropdown";
import MyReviewList from "../accountReview/myReviewList"; // request My review 말고 my product 같은걸로 바꿔서 props로 배송상태 주고 상태에 따라 띄우는거 어떤가

import classes from "./accountMyShopping.module.css";
import CommonPageTitle from "components/common/commonPageTitle";

function AccountMyShopping(props) {
  const [inqPeriod, setInqPeriod] = useState("");
  const [inqDeliState, setInqDeliState] = useState("");
  // const [showInqPeriod, setShowInqPeriod] = useState(false);
  // const [showInqDeliState, setshowInqDeliState] = useState(false);

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

  // 기간이 선택되면 바로 밑에 보여주기
  const createPeriodHandler = (data) => {
    setInqPeriod(data);
    console.log(inqPeriod); // for debug
    // setShowInqPeriod(true);
  };
  // 기간이 선택되면 바로 밑에 보여주기
  const createDeliStateHandler = (data) => {
    setInqDeliState(data);
    console.log(inqDeliState); // for debug
    // setshowInqDeliState(true);
  };

  /* 선택값 밑에 띄우기 - 필요 없어서 없애기로 했는데, 나중에 비슷한 기능 쓸지도 모르니까 일단 남겨놓음
  // x 버튼을 누르면 선택한 기간값 사라짐
  const clearPeriodValue = () => {
    setShowInqPeriod(false);
  };
  // x 버튼을 누르면 선택한 배송상태값 사라짐
  const clearDeliStateValue = () => {
    setshowInqDeliState(false);
  };
  */
  return (
    <div className={classes.accountMyShopping_Layout}>
      <div className={classes.acctMyShopping_Inner}>
        <CommonPageTitle title="나의쇼핑" />
        <hr className={classes.acctMyShopping_LineD} />
        <div className={classes.acctMyShopping_Main}>
          <p className={classes.acctMyShopping_SemiTitle}>주문배송내역 조회</p>
          <div className={classes.acctMyShopping_DelivTrack}></div>
          <div className={classes.acctMyShopping_DelivTrackCondition}>
            <PeriodDropdown onCreate={createPeriodHandler} />
            <DeliStateDropdown onCreate={createDeliStateHandler} />
          </div>
          {/* 선택값 밑에 띄우기 - 필요 없어서 없애기로 했는데, 나중에 비슷한 기능 쓸지도 모르니까 일단 남겨놓음
          <div className={classes.acctMyShopping_prdndelis}>
            {showInqPeriod && (
              <p className={classes.acctMyShopping_SelectedRslt}>
                <div className={classes.acctMyShopping_selectedTextArea}>
                  {inqPeriod}
                </div>
                <button
                  className={classes.acctMyShopping_selectedRmvBtn}
                  onClick={clearPeriodValue}
                >
                  X
                </button>
              </p>
            )}
            {showInqDeliState && (
              <p className={classes.acctMyShopping_SelectedRslt}>
                <div className={classes.acctMyShopping_selectedTextArea}>
                  {inqDeliState}
                </div>
                <button
                  className={classes.acctMyShopping_selectedRmvBtn}
                  onClick={clearDeliStateValue}
                >
                  X
                </button>
              </p>
            )}
          </div>
            */}
          <p className={classes.acctMyShopping_SemiTitle}>주문상품</p>
          <div className={classes.acctMyShopping_orderProductDetail}>
            <p>000000000 | 2022.01.01.</p>
            {/* <p className={classes.accountMyShopping_showDetail}>
              상세보기 {">"}
            </p> */}
            {/** qestion 상세보기는 페이지?? 모달?? */}
          </div>
          <MyReviewList reviews={DUMMY_DATA_UNREVIEWED} />
          {/* <p className={classes.acctMyShopping_SemiTitle}>배송상태</p>
          <div className={classes.deliTableArea}>
            <table className={classes.deliTable}>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>배송상태</th>
                  <th>담당자/연락처</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>when</td>
                  <td>state</td>
                  <td>man</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
