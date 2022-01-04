import React from "react";
import classes from "./infoProduct.module.css";

function InfoProduct({ productImg, brandName, productName, productOption }) {
  return (
    <div className={classes.prodArea}>
      <img className={classes.prodImg} src={productImg} alt="상품이미지" />
      <div className={classes.prodInfoArea}>
        <div className={classes.prodBrand}>{brandName}</div>
        <div className={classes.prodName}>{productName}</div>
        <div className={classes.prodBrand}>{productOption}</div>
      </div>
    </div>
  );
}

export default InfoProduct;
