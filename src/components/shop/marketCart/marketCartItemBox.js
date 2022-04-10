import React, { useState } from "react";
import MyOrderPrdtItem from "components/account/accountShop/myOrderPrdtItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox(props) {
  const [selectedPrdt, setSelectedPrdt] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // 선택한 상품 리스트 추가
  const selectedPrdtAppend = (productId, orderPrice) => {
    setSelectedPrdt((selectedPrdt) => [...selectedPrdt, productId]);
    setTotalPrice(totalPrice + orderPrice);
    props.totalPriceSetting(totalPrice);
  };
  // 선택한 상품 리스트 삭제
  const selectedPrdtRmv = (productId, orderPrice) => {
    setSelectedPrdt(
      selectedPrdt.filter((newSelectedPrdt) => newSelectedPrdt !== productId)
    );
    setTotalPrice(totalPrice - orderPrice);
    props.totalPriceSetting(totalPrice);
  };

  return (
    <div>
      <div className={classes.checkDiv}>
        <div>모두 선택</div>
        <div>선택삭제</div>
      </div>
      <div>
        {props.cartItemArray.map((cartItemObject) => {
          return (
            <MyOrderPrdtItem
              key={cartItemObject.myOrderId}
              id={cartItemObject.myOrderId}
              productId={cartItemObject.mktProductId}
              productImg={cartItemObject.productImg}
              productName={cartItemObject.productName}
              productBrand={cartItemObject.productBrand}
              orderId={cartItemObject.orderId}
              orderPrice={cartItemObject.totalPrice}
              stringDt={cartItemObject.stringDt}
              orderState={cartItemObject.orderState}
              orderStateNm={cartItemObject.orderStateNm}
              option1Nm={cartItemObject.productDetailOption.option1Name}
              option2Nm={cartItemObject.productDetailOption.option2Name}
              option1DataNm={cartItemObject.productDetailOption.option1DataName}
              option2DataNm={cartItemObject.productDetailOption.option2DataName}
              orderQuantity={cartItemObject.productSelectedQuantity}
              selectedPrdtAppend={selectedPrdtAppend}
              selectedPrdtRmv={selectedPrdtRmv}
              departure="cart"
            />
          );
        })}
      </div>
    </div>
  );
}

export default MarketCartItemBox;
