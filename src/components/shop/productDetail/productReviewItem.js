import React from "react";
import classes from "./productReviewItem.module.css";
import noUserImg from "img/noUserImg.png";

function ProductReviewItem({ review }) {
  return (
    <div className={classes.productReviewDiv}>
      <img
        className={classes.userImg}
        src={review.productImg || noUserImg}
        alt="상품이미지"
      />
      <div>
        <div className={classes.reviewWriterInfoDiv}>
          <p>{review.nickname}</p>
          <p>{review.reviewDate}</p>
        </div>
        <p>{review.productName}</p>
        <div className={classes.productOptionDiv}>
          <p>{review.productOption[0]}</p>
          <p>{review.productOption[1]}</p>
        </div>
        <p className={classes.productReviewText}>{review.reviewString}</p>
      </div>
    </div>
  );
}

export default ProductReviewItem;
