import React, { useState } from "react";
import classes from "./modalContUploadUpdateReview.module.css";
import InfoProduct from "./infoProduct";
import StarRating from "./starRating";
import AddPhotoFile from "./addPhotoFile";
import WritingReview from "./writingReview";

function ModalContUploadUpdateReview({ isReviewed }) {
  const [rating, setRating] = useState(0); // 리뷰 별점
  const [reviewContent, setReviewContent] = useState(""); // 리뷰 작성 내용

  const handleRating = (rate) => setRating(rate);
  const onChangeReviewContent = (event) => setReviewContent(event.target.value);

  const handleAddReview = () => {
    console.log(rating / 20, reviewContent);
  };

  return (
    // 추후 Form type 으로 변경 예정
    <div className={classes.modalContReview}>
      <div className={classes.title}>
        {!isReviewed && <p>리뷰 작성</p>}
        {isReviewed && <p>리뷰 수정</p>}
      </div>
      <InfoProduct brandName={"null"} productName={null} productOption={null} />
      <StarRating rating={rating} handleRating={handleRating} />
      <AddPhotoFile />
      <WritingReview
        reviewContent={reviewContent}
        onChangeReviewContent={onChangeReviewContent}
      />
      <button className={classes.btn} onClick={handleAddReview}>
        등록
      </button>
    </div>
  );
}

export default ModalContUploadUpdateReview;
