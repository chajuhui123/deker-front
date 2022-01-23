import React from "react";
import classes from "./productOptionSelectBox.module.css";
import CommBtn from "components/common/commBtn";
import CommSelect from "components/common/CommSelect";
import CommonPageTitle from "components/common/commPageTitle";
import noImg from "img/noImg.png";

function ProductOptionSelectBox() {
  const productImg = "";
  const productName = "상품명";
  const productPrice = "1000";
  const colorOptions = [
    { value: "pink", label: "pink" },
    { value: "red", label: "red" },
    { value: "blue", label: "blue" },
  ];
  const moreOptions = ["옵션1", "옵션2", "옵션3", "옵션4"];
  const productQuantity = "10";

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productName} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productPrice}</p>
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>컬러</p>
          <CommSelect options={colorOptions} placeholder="-- 옵션 선택 --" />
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>옵션</p>
          <CommSelect options={moreOptions} placeholder="-- 옵션 선택 --" />
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>수량</p>
          <input
            className={classes.inputQuantity}
            type="number"
            min="1"
            max={productQuantity}
            defaultValue="0"
          />
        </div>
        <p>주문금액</p>
        <div className={classes.btnBox}>
          <CommBtn btnText="Buy Now" btnWidth="200px" />
          <CommBtn
            btnText="Add Cart"
            btnWidth="200px"
            bgColor="white"
            txColor="#4242e2"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
