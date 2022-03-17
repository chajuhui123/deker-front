import React, { useEffect, useState } from "react";
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

  const DUMMY_DATA = [
    {
      productId: "PDTID_00000000000002",
      orderId: "odrId_99999999999997",
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productBrand: "deker",
      productName: "네이처 디퓨저",
      option1: "COLOR",
      option1Data: "C01",
      option1Nm: "색상",
      option1DataNm: "흰색",
      option2: "SIZE",
      option2Data: "S01",
      option2Nm: "사이즈",
      option2DataNm: "260",
      optionList: ["흰색", "260"],
      orderNumber: "99999999999997",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220120",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 9,
    },
    {
      productId: "PDTID_00000000000001",
      orderId: "odrId_99999999999998",
      productImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      productBrand: "deker",
      productName: "플라워 디퓨저",
      option1: "COLOR",
      option1Data: "C01",
      option1Nm: "색상",
      option1DataNm: "흰색",
      option2: "SIZE",
      option2Data: "S02",
      option2Nm: "사이즈",
      option2DataNm: "255",
      optionList: ["흰색", "255"],
      orderNumber: "99999999999998",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220120",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 2,
    },
    {
      productId: "PDTID_00000000000001",
      orderId: "odrId_99999999999999",
      productImg:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      productBrand: "deker",
      productName: "플라워 디퓨저",
      option1: "COLOR",
      option1Data: "C02",
      option1Nm: "색상",
      option1DataNm: "검은색",
      option2: "SIZE",
      option2Data: "S01",
      option2Nm: "사이즈",
      option2DataNm: "260",
      optionList: ["검은색", "260"],
      orderNumber: "99999999999999",
      createDt: "2022-01-20T12:38:41.000+00:00",
      stringDt: "20220122",
      orderState: "6",
      orderStateNm: "배송 완료",
      orderPrice: 30000,
      orderQuantity: 9,
    },
  ];

  // const DUMMY_DATA_UNREVIEWED = [
  //   {
  //     id: 11,
  //     product_image:
  //       "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
  //     product_brand: "시디즈",
  //     product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     product_option: "블랙",
  //   },
  //   {
  //     id: 12,
  //     product_image:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     product_brand: "시디즈",
  //     product_name: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     product_option: "블랙",
  //   },
  // ];

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
          <MyOrderPrdtList orderedProductList={DUMMY_DATA} />
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
