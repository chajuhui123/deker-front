import React from "react";
import classes from "./box.module.css";
import ProductRecommendItem from "./productRecommendItem";

function ProductRecommendBox() {
  return (
    <div className={classes.boxDiv}>
      <h1 className={classes.contentTitle}>함께하면 좋은 상품</h1>
      <hr />
      <div style={{ display: "flex" }}>
        <ProductRecommendItem />
        <ProductRecommendItem />
        <ProductRecommendItem />
        <ProductRecommendItem />
      </div>
    </div>
  );
}

export default ProductRecommendBox;
