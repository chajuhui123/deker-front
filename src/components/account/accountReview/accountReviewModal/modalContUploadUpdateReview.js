import React from "react";
import classes from "./modalContUploadUpdateReview.module.css";
import InfoProduct from "./infoProduct";
import StarRating from "./starRating";
import AddPhotoFile from "./addPhotoFile";
import WritingReview from "./writingReview";

function ModalContUploadUpdateReview({ isReviewed }) {
  return (
    <div className={classes.modalContReview}>
      <div className={classes.title}>
        {!isReviewed && <p>리뷰 작성</p>}
        {isReviewed && <p>리뷰 수정</p>}
      </div>
      <InfoProduct />
      <StarRating />
      <AddPhotoFile />
      <WritingReview />
      <button className={classes.btn}>등록</button>
    </div>
  );
}

export default ModalContUploadUpdateReview;
