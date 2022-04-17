import { postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./marketCartBuyButton.module.css";

function MarketCartBuyButton(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectedPrdtList, setSelectedPrdtList] = useState(null);

  useEffect(() => {
    setSelectedPrdtList(props.selectedPrdtList, () =>
      console.log("check receive array selectedPrdtList: " + selectedPrdtList)
    );
  }, [props.selectedPrdtList]);

  // 장바구니에서 구매하기 위해 선택한 상품 Back에 다시 전달
  const fnSelectCartCallback = (res) => {
    if (!!res) {
      setSelectedPrdtList(res.data.cartIdArr);
      var orderId = res.data.orderId;

      history.push({
        pathname: "/payment",
        state: {
          paymentAmt: props.paymentAmt,
          deliAmt: props.deliAmt,
          cartItemArray: props.cartItemArray,
        },
      });
      // set + orderId
      console.log("cardId: " + res.data.cartId);
    } else {
      // 비정상로직;
      // alert("data error");
    }
  };

  const buyBtnHandler = () => {
    console.log("check receive array selectedPrdtList: " + selectedPrdtList);
    dispatch(
      postApi(
        "mb/mkt/reg/checked-cart",
        { cartIdArr: selectedPrdtList },
        fnSelectCartCallback
      )
    );
  };

  return (
    <div className={classes.buyBtn}>
      <CommBtn
        btnText="상품구매하기"
        btnWidth="100%"
        btnHeight="40px"
        border="3px solid rgb(66, 66, 226)"
        bgColor="rgbrgb(66, 66, 226)"
        radius="4px"
        txColor="rgb(248, 248, 248)"
        fnClick={buyBtnHandler}
      />
    </div>
  );
}

export default MarketCartBuyButton;
