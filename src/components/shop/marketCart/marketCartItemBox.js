import React, { useEffect, useState } from "react";
import MyOrderPrdtItem from "components/account/accountShop/myOrderPrdtItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox(props) {
  const [selectedPrdt, setSelectedPrdt] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tmp, setTmp] = useState(false);

  // 단일 선택한 상품 리스트 추가, 삭제
  const selectPrdtYN = (isCheck, productId, orderPrice) => {
    if (!isCheck) {
      console.log("상품 선택22222222222222222");
      setSelectedPrdt((selectedPrdt) => [...selectedPrdt, productId]);
      setTotalPrice(totalPrice + orderPrice);
    } else {
      console.log("상품 해제22222222222222222");
      setSelectedPrdt(
        selectedPrdt.filter((newSelectedPrdt) => newSelectedPrdt !== productId)
      );
      setTotalPrice(totalPrice - orderPrice);
    }
  };

  useEffect(() => {
    props.selectedPrdtListSetting(selectedPrdt);
    props.totalPriceSetting(totalPrice);
  }, [selectedPrdt, totalPrice]);

  // 전체 상품 선택
  const isAllSelectHandler = () => {
    console.log("products are All Selected");
    setTmp(!tmp);
  };

  /*
  // 장바구니 상품 선택 삭제 Back 연결
  const fnCallback = (res) => {
    if (!!res) {
      setCartData(res.data);
    } else {
      // 비정상로직;
      // alert("data error");
    }
  };
    // Back 통신해서 장바구니에 상품 삭제
    const selectedPrdtRmvHandler = () => {
    dispatch(postApi("mb/mkt/reg/checked-cart", {selectedPrdt}, fnCallback));
  };
*/
  return (
    <div>
      <div className={classes.checkDiv}>
        <div onClick={isAllSelectHandler}>모두 선택</div>
        {/* <div onClick={selectedPrdtRmvHandler}>선택삭제</div> */}
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
              selectPrdtYN={selectPrdtYN}
              // selectedPrdt={selectedPrdt}
              tmp={tmp}
              departure="cart"
            />
          );
        })}
      </div>
    </div>
  );
}

export default MarketCartItemBox;
