import React from "react";
import classes from "./productReviewItem.module.css";
import noUserImg from "img/noUserImg.png";

function ProductReviewItem() {
  const userImg = "";
  const userId = "ID1234";
  const productName = "상품명 예시";
  const productColorOption = "옵션1234";
  const productOption = "옵션1234";
  const reviewDate = "2022-01-22";
  const rating = "4";
  const productReview =
    "후기글을 적는 곳입니다. 동대문 엽기떡볶이 본점은 동대문에 있다.";
  return (
    <div className={classes.productReviewDiv}>
      <img
        className={classes.userImg}
        src={userImg || noUserImg}
        alt="유저이미지"
      />
      <div>
        <div className={classes.reviewWriterInfoDiv}>
          <p>{userId}</p>
          <p>{reviewDate}</p>
        </div>
        <p>{productName}</p>
        <div className={classes.productOptionDiv}>
          <p>{productColorOption}</p>
          <p>{productOption}</p>
        </div>
        <p className={classes.productReviewText}>{productReview}</p>
      </div>
    </div>
  );
}

export default ProductReviewItem;
