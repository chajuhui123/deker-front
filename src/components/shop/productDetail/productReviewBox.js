import React from "react";
import classes from "./box.module.css";
import ProductReviewItem from "./productReviewItem";

function ProductReviewBox() {
  return (
    <div>
      <div className={classes.boxDiv}>
        <h1 className={classes.contentTitle}>리뷰</h1>
        <hr />
        <div>
          <ProductReviewItem />
          <ProductReviewItem />
          <ProductReviewItem />
          <ProductReviewItem />
        </div>
      </div>
    </div>
  );
}

export default ProductReviewBox;
