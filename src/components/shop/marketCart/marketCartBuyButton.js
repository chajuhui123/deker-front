import { postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./marketCartBuyButton.module.css";

function MarketCartBuyButton(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  // const [orderId, setOrderId] = useState(null);
  // const [cartIdArr, setCartIdArr] = useState(null);

  // 장바구니에서 구매하기 위해 선택한 상품 Back에 다시 전달
  const fnSelectCartCallback = (res) => {
    if (!!res) {
      // 결제페이지 이동
      history.push({
        pathname: "/payment",
        state: {
          paymentAmt: props.paymentAmt,
          deliAmt: props.deliAmt,
          cartItemArray: res.data.cartIdArr,
          orderId: res.data.orderId,
          departure: "cartSelect",
        },
      });
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  const buyBtnHandler = () => {
    dispatch(
      postApi(
        "mb/mkt/reg/checked-cart",
        { cartIdArr: props.cartItemArray },
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
