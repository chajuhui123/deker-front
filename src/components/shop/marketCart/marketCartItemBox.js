import React, { useEffect, useState } from "react";
import MyOrderPrdtItem from "components/account/accountShop/myOrderPrdtItem";
import classes from "./marketCartItemBox.module.css";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

function MarketCartItemBox(props) {
  const dispatch = useDispatch();

  const [selectedPrdtCartIdList, setSelectedPrdtCartIdList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [tmp, setTmp] = useState(false);

  /* 단일 선택한 상품 리스트 추가, 삭제 */
  const selectPrdtYN = (isCheck, cartId, orderPrice) => {
    if (!isCheck) {
      // 추가
      setSelectedPrdtCartIdList((selectedPrdtCartIdList) => [
        ...selectedPrdtCartIdList,
        cartId,
      ]);
      setTotalPrice(totalPrice + orderPrice);
    } else {
      // 삭제
      setSelectedPrdtCartIdList(
        selectedPrdtCartIdList.filter(
          (newselectedPrdtCartIdList) => selectedPrdtCartIdList !== cartId
        )
      );
      setTotalPrice(totalPrice - orderPrice);
    }
  };

  /* 선택한 상품 리스트 및 총 가격 동기화 */
  useEffect(() => {
    props.selectedPrdtListSetting(selectedPrdtCartIdList);
    props.totalPriceSetting(totalPrice);
  }, [selectedPrdtCartIdList, totalPrice]);

  // 전체 상품 선택
  const isAllSelectHandler = () => {
    console.log("products are All Selected");
    setTmp(!tmp);
  };

  /* 장바구니 상품 선택 삭제 Back 연결 */
  const fnCallback = (res) => {
    if (!!res) {
      console.log("cartItem Remove Success :: res :: ", res);
      props.pageReRenderingAftRmvCartItem();
    } else {
      // 비정상로직;
      alert("data error");
    }
  };
  // Back 통신해서 장바구니에 상품 삭제
  const selectedPrdtRmvHandler = () => {
    dispatch(
      postApi(
        "mb/mkt/rmv/cartIem",
        { cartIdArr: selectedPrdtCartIdList },
        fnCallback
      )
    );
  };

  return (
    <div>
      {props.cartItemArray?.length ? (
        <div>
          <div className={classes.checkDiv}>
            <div onClick={isAllSelectHandler}>모두 선택</div>
            <div onClick={selectedPrdtRmvHandler}>선택삭제</div>
          </div>
          <div>
            {props.cartItemArray?.map((cartItemObject) => {
              return (
                <MyOrderPrdtItem
                  key={cartItemObject.myOrderId}
                  id={cartItemObject.myOrderId}
                  productId={cartItemObject.mktProductId}
                  cartId={cartItemObject.cartId}
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
                  option1DataNm={
                    cartItemObject.productDetailOption.option1DataName
                  }
                  option2DataNm={
                    cartItemObject.productDetailOption.option2DataName
                  }
                  orderQuantity={cartItemObject.productSelectedQuantity}
                  selectPrdtYN={selectPrdtYN}
                  tmp={tmp}
                  departure="cart"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className={classes.noUploadText}>
          <text>장바구니에 상품이 없습니다.</text>
        </div>
      )}
    </div>
  );
}

export default MarketCartItemBox;
