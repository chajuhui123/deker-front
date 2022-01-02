import React from "react";
import classes from "./infoProduct.module.css";

function InfoProduct() {
  return (
    <div className={classes.prodArea}>
      <div className={classes.prodImg}></div>
      <div className={classes.prodInfoArea}>
        <div className={classes.prodBrand}>상품브랜드</div>
        <div className={classes.prodName}>상품명</div>
        <div className={classes.prodBrand}>상품옵션</div>
      </div>
    </div>
  );
}

export default InfoProduct;
