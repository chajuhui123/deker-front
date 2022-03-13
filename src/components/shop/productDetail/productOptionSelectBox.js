import React from "react";
import classes from "./productOptionSelectBox.module.css";
import { useState } from "react";
import noImg from "img/noImg.png";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import SelectBoxOptionDiv from "./selectBoxOptionDiv";
import ProductOptionSelectItem from "./productOptionSelectItem";

function ProductOptionSelectBox({ productDetailObj }) {
  const [selectedOption, setSelectedOption] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const productQuantity = "10";

  const { productImg, productName, productPrice, productDetailOptionArr } =
    productDetailObj;

  console.log(selectedOption);
  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productName ?? ""} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productPrice?.toLocaleString("ko-KR") ?? 0} 원</p>
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>옵션</p>
          <ProductOptionSelectItem
            productPrice={productPrice}
            options={productDetailOptionArr}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        {/* <div className={classes.buyItemInfoDiv}>
          <p>수량</p>
          <input
            className={classes.inputQuantity}
            type="number"
            min="1"
            max={productQuantity}
            defaultValue="0"
            onChange={(event) => {
              setSelectedQuantity(parseInt(event.target.value));
            }}
          />
        </div> */}
        {selectedOption.map((option) => {
          return <SelectBoxOptionDiv option={option} />;
        })}
        <div className={classes.buyItemInfoDiv}>
          <p>주문금액</p>
          <p>
            {(
              selectedQuantity * productPrice ?? 0 * selectedQuantity
            ).toLocaleString("ko-KR")}
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
