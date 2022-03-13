import React, { useEffect, useState } from "react";
import DeliStateDropdown from "../../common/dropdown/deliStateDropdown";
import PeriodDropdown from "components/common/dropdown/periodDropdown";
import MyReviewList from "../accountReview/myReviewList"; // request My review 말고 my product 같은걸로 바꿔서 props로 배송상태 주고 상태에 따라 띄우는거 어떤가

import classes from "./accountMyShopping.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import MyShoppingCnt from "./myshoppingCnt";

function AccountMyShopping(props) {
  const dispatch = useDispatch();
  const [inqPeriod, setInqPeriod] = useState("month");
  const [inqDeliState, setInqDeliState] = useState("6");

  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [objectData, setObjectData] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    dispatch(
      postApi(
        "mb/mkt/get/order-product",
        {
          period: inqPeriod,
          deliveryState: inqDeliState,
          currentPageNo: 1,
        },
        fnCallback
      )
    );
  }, [dispatch]);

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

  // 기간 및 배송상태 값이 선택되면 Back에 받아와서 새로 조회
  const deliStateChgHandler = (data) => {
    setInqDeliState(data);
    console.log(inqDeliState); // for debug

    dispatch(
      postApi(
        "mb/mkt/get/order-product",
        {
          period: inqPeriod,
          deliveryState: inqDeliState,
          currentPageNo: 1,
        },
        fnCallback
      )
    );
  };
  // 기간 및 배송상태 값이 선택되면 Back에 받아와서 새로 조회
  const inqPeriodChgHandler = (data) => {
    setInqPeriod("20200101");
    console.log(inqPeriod); // for debug

    dispatch(
      postApi(
        "mb/mkt/get/order-product",
        {
          period: inqPeriod,
          deliveryState: inqDeliState,
          currentPageNo: 1,
        },
        fnCallback
      )
    );
  };

  const fnCallback = (res) => {
    if (!!res) {
      setCurrentPageNo(res.data.currentPageNo);
      setTotalCount(res.data.totalCount);
      setLastPage(res.data.lastPage);
      setObjectData(res.data.objectData);
      setList(res.data.list);

      console.log("currentPageNo: " + currentPageNo);
      console.log("totalCount: " + totalCount);
      console.log("lastPage: " + lastPage);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  return (
    <div className={classes.Layout}>
      <CommonPageTitle title="나의쇼핑" />
      <hr />
      <div className={classes.acctMyShopping_Main}>
        <div className={classes.dtlArea}>
          <CommPageSemiTitle semiTitle="주문배송내역 조회" />
          <MyShoppingCnt countData={objectData} />
          <div className={classes.acctMyShopping_DelivTrackCondition}>
            <PeriodDropdown inqPeriodChgHandler={inqPeriodChgHandler} />
            <DeliStateDropdown deliStateChgHandler={deliStateChgHandler} />
          </div>
        </div>
        <div className={classes.dtlArea}>
          <CommPageSemiTitle semiTitle="주문상품" />
          {/* 이 부분도 나중에 back 제대로 연결되면 컴포넌트로 분리 */}
          <div className={classes.acctMyShopping_orderProductDetail}>
            <div>00000000</div>
            <div className={classes.d}>{` | `}</div>
            <div> 2022.01.01.</div>
          </div>
          <MyReviewList reviews={DUMMY_DATA_UNREVIEWED} />
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
