import React from "react";
import classes from "./infoProduct.module.css";

function InfoProduct({ brandName, productName, productOption }) {
  return (
    <div className={classes.prodArea}>
      <div className={classes.prodImg}></div>
      <div className={classes.prodInfoArea}>
        <div className={classes.prodBrand}>{brandName}</div>
        <div className={classes.prodName}>{productName}</div>
        <div className={classes.prodBrand}>{productOption}</div>
      </div>
    </div>
  );
}

export default InfoProduct;
