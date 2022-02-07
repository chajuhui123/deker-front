import React from "react";
import classes from "./box.module.css";
import ProductReviewItem from "./productReviewItem";

function ProductReviewBox({ productReviewsObj }) {
  const reviewsArr = productReviewsObj.reviewsArr;
  return (
    <div>
      <div className={classes.boxDiv}>
        <h1 className={classes.contentTitle}>리뷰</h1>
        <hr />
        <div>
          {reviewsArr?.map((review, index) => {
            return <ProductReviewItem key={index} review={review} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductReviewBox;
