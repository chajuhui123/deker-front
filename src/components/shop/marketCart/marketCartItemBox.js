// import React, { useState } from "react";
import MyOrderPrdtItem from "components/account/accountShop/myOrderPrdtItem";
// import MarketCartItem from "./marketCartItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox({ cartItemArray }) {
  // const [checkedList, setCheckedList] = useState([]);

  return (
    <div>
      <div className={classes.checkDiv}>
        <div>모두 선택</div>
        <div>선택삭제</div>
      </div>
      <div>
        {/* 장바구니에 있는 아이템 */}
        {/* {cartItemArray.map((cartItemObject) => {
          return <MarketCartItem cartItemObject={cartItemObject} />;
        })} */}
        {cartItemArray.map((cartItemObject) => {
          return (
            <MyOrderPrdtItem
              key={cartItemObject.myOrderId}
              id={cartItemObject.myOrderId}
              productId={cartItemObject.mktProductId}
              productImg={cartItemObject.productImg}
              productName={cartItemObject.productName}
              productBrand={cartItemObject.productBrand}
              orderId={cartItemObject.orderId}
              orderPrice={cartItemObject.productDetailOption.productPrice}
              stringDt={cartItemObject.stringDt}
              orderState={cartItemObject.orderState}
              orderStateNm={cartItemObject.orderStateNm}
              option1Nm={cartItemObject.productDetailOption.option1Name}
              option2Nm={cartItemObject.productDetailOption.option2Name}
              option1DataNm={cartItemObject.productDetailOption.option1DataName}
              option2DataNm={cartItemObject.productDetailOption.option2DataName}
              orderQuantity={cartItemObject.productSelectedQuantity}
              departure="cart"
            />
          );
        })}
      </div>
    </div>
  );
}

export default MarketCartItemBox;
