import React from "react";
import classes from "./productOptionSelectBox.module.css";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import noImg from "img/noImg.png";
// import SelectBoxOptionDiv from "./selectBoxOptionDiv";
import { useState } from "react";
import ProductOptionSelectItem from "./productOptionSelectItem";

function ProductOptionSelectBox({ productDetailObj }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productQuantity = "10";

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productDetailObj.productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productDetailObj.productName} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productDetailObj.productPrice.toLocaleString("ko-KR")} 원</p>
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>옵션</p>
          <ProductOptionSelectItem
            options={productDetailObj.productDetailOptionArr}
          />
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>수량</p>
          <input
            className={classes.inputQuantity}
            type="number"
            min="1"
            max={productQuantity}
            defaultValue="0"
            onChange={(event) => {
              setSelectedQuantity(parseInt(event.target.value));
              console.log(typeof selectedQuantity);
            }}
          />
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>주문금액</p>
          <p>
            {(productDetailObj.productPrice * selectedQuantity).toLocaleString(
              "ko-KR"
            )}
            원
          </p>
        </div>
        <div className={classes.btnBox}>
          <CommBtn
            btnText="장바구니"
            bgColor="white"
            txColor="#4242e2"
            btnWidth="50%"
          />
          <CommBtn btnText="바로구매" btnWidth="50%" />
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
