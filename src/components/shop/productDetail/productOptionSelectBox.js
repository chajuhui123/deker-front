import React from "react";
import classes from "./productOptionSelectBox.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import noImg from "img/noImg.png";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import SelectBoxOptionDiv from "./selectBoxOptionDiv";
import ProductOptionSelectItem from "./productOptionSelectItem";
import { postApi } from "api/fetch-api";

function ProductOptionSelectBox({ productDetailObj }) {
  const dispatch = useDispatch();

  const [opitonIdInBasket, setOptionIdInBasket] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  const { productImg, productName, productPrice, productDetailOptionArr } =
    productDetailObj;

  const fnCallbackAddOptionsToCart = () => {
    // TO DO : 장바구니 router 이동
  };

  const handleAddOptionsToCart = () => {
    dispatch(
      postApi("mb/mkt/reg/add-cart", selectedOption, fnCallbackAddOptionsToCart)
    );
  };

  console.log("productDetailObj", productDetailObj);

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productName ?? ""} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productPrice?.toLocaleString("ko-KR") ?? 0} 원</p>
        </div>

        {/* 옵션은 Back에서 무조건 1개이상 보내기로 결정 */}
        {productDetailOptionArr.length > 0 && (
          <div className={classes.buyItemInfoDiv}>
            <p>옵션</p>
            <ProductOptionSelectItem
              productPrice={productPrice}
              options={productDetailOptionArr}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              opitonIdInBasket={opitonIdInBasket}
              setOptionIdInBasket={setOptionIdInBasket}
            />
          </div>
        )}

        {selectedOption.map((option) => {
          return (
            <SelectBoxOptionDiv
              option={option}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          );
        })}

        <div className={classes.buyItemInfoDiv}>
          <p>주문금액</p>
          <p>{(totalProductPrice ?? 0).toLocaleString("ko-KR")}원</p>
        </div>

        <div className={classes.btnBox}>
          <CommBtn
            btnText="장바구니"
            bgColor="white"
            txColor="#4242e2"
            btnWidth="50%"
            fnClick={handleAddOptionsToCart}
          />
          <CommBtn btnText="바로구매" btnWidth="50%" />
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
