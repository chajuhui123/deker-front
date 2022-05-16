import React, { useCallback, useEffect, useState } from "react";
import DeliStateDropdown from "../../common/dropdown/deliStateDropdown";
import PeriodDropdown from "components/common/dropdown/periodDropdown";

import classes from "./accountMyShopping.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import MyShoppingCnt from "./myshoppingCnt";
import MyOrderPrdtList from "./myOrderPrdtList";

function AccountMyShopping(props) {
  const dispatch = useDispatch();
  const [inqPeriod, setInqPeriod] = useState("all"); // default: month
  const [inqDeliState, setInqDeliState] = useState("6");

  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [objectData, setObjectData] = useState(null);
  const [list, setList] = useState(null);

  const fnCallback = useCallback(
    (res) => {
      if (!!res) {
        const pageNo = currentPageNo;
        for (let i = 1; i <= pageNo; i++) {
          setCurrentPageNo(i);
        }
        // setCurrentPageNo(res.data.currentPageNo);
        setTotalCount(res.data.totalCount);
        setLastPage(res.data.lastPage);
        setObjectData(res.data.objectData);
        setList(res.data.list);

        console.log("currentPageNo: " + currentPageNo);
        console.log("totalCount: " + totalCount);
        console.log("lastPage: " + lastPage);
        // console.log("objectData: " + objectData.complete);
      } else {
        // 비정상로직;
        // alert("data error");
      }
    },
    [currentPageNo, lastPage, totalCount]
  );

  // 처음 페이지를 로딩했을 때, defalut값으로 조회 => 기간: 전체조회, 배송상태: 배송완료
  useEffect(() => {
    dispatch(
      postApi(
        "mb/mkt/get/order-product",
        {
          period: inqPeriod,
          deliveryState: inqDeliState,
          currentPageNo: currentPageNo,
        },
        fnCallback
      )
    );
  }, [currentPageNo, dispatch, fnCallback, inqDeliState, inqPeriod]);

  useEffect(() => {
    if (!lastPage) {
      setCurrentPageNo((prevState) => prevState + 1);
    }
  }, [lastPage]);

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
          currentPageNo: currentPageNo,
        },
        fnCallback
      )
    );
  };
  // 기간 및 배송상태 값이 선택되면 Back에 받아와서 새로 조회
  const inqPeriodChgHandler = (data) => {
    setInqPeriod(data);
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

  return (
    <div className={classes.Layout}>
      <CommonPageTitle title="나의쇼핑" />
      <hr />
      <div>
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
          {list?.length ? (
            <ul className={classes.orderProductDetail}>
              {list.map((lists) => (
                <li className={classes.productList}>
                  <div className={classes.orderNumber}>
                    <div>{`주문번호: ` + lists.orderNumber}</div>
                    <div className={classes.d}>{` | `}</div>
                    <div>{`주문일자: ` + lists.orderList[0].stringDt}</div>
                  </div>
                  <hr className={classes.hr} />
                  <MyOrderPrdtList orderedProductList={lists.orderList} />
                  {/* <MyOrderPrdtList orderedProductList={DUMMY_DATA} /> */}
                </li>
              ))}
            </ul>
          ) : (
            <div className={classes.noUploadText}>
              <text>주문한 이력이 없습니다.</text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
