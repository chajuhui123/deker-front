import React from "react";
import classes from "./productReviewItem.module.css";
import noUserImg from "img/noUserImg.png";
import { BASE_URL } from "module/common-module";

function ProductReviewItem({ review }) {
  return (
    <div className={classes.productReviewDiv}>
      <img
        className={classes.userImg}
        src={`${BASE_URL}${review.productImg}` || noUserImg}
        alt="상품이미지"
      />
      <div className={classes.reviewInfoTotalDiv}>
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
