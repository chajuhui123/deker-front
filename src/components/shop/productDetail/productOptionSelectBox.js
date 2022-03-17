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
  const [selectedOption, setSelectedOption] = useState([]);
  const [totalProductPice, setTotalProductPice] = useState(0);

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

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productName ?? ""} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productPrice?.toLocaleString("ko-KR") ?? 0} 원</p>
        </div>
        {productDetailOptionArr.length > 0 ? (
          // 옵션 존재시, 옵션 셀렉트 박스
          <div className={classes.buyItemInfoDiv}>
            <p>옵션</p>
            <ProductOptionSelectItem
              productPrice={productPrice}
              options={productDetailOptionArr}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        ) : (
          // 옵션 미존재시, 수량 선택 박스
          <div className={classes.buyItemInfoDiv}>
            <p>수량</p>
            <input
              className={classes.inputQuantity}
              type="number"
              min="1"
              // max={productQuantity}
              defaultValue="0"
              onChange={(event) => {
                // setSelectedQuantity(parseInt(event.target.value));
              }}
            />
          </div>
        )}

        {selectedOption.map((option) => {
          return <SelectBoxOptionDiv option={option} />;
        })}
        <div className={classes.buyItemInfoDiv}>
          <p>주문금액</p>
          <p>{(totalProductPice ?? 0).toLocaleString("ko-KR")}원</p>
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
