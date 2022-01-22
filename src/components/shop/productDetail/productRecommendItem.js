import React from "react";
import classes from "./productRecommendItem.module.css";
import noImg from "img/noImg.png";

function ProductRecommendItem() {
  const productImg = "";
  const productName = "상품명";
  const productFee = "1,000";
  return (
    <div className={classes.recommendItemBox}>
      <img
        className={classes.recommendItemImg}
        src={productImg || noImg}
        alt="상품이미지"
      />
      <p className={classes.recommendItemText}>{productName}</p>
      <p className={classes.recommendItemText}>{productFee} 원</p>
    </div>
  );
}

export default ProductRecommendItem;
