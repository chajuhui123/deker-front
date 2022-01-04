import React from "react";
import classes from "./modalContUploadUpdateReview.module.css";
import InfoProduct from "./infoProduct";
import StarRating from "./starRating";
import AddPhotoFile from "./addPhotoFile";
import WritingReview from "./writingReview";

function ModalContUploadUpdateReview({ isReviewed }) {
  // 더미 데이터 추가 예정
  return (
    // 추후 Form type 으로 변경 예정
    <div className={classes.modalContReview}>
      <div className={classes.title}>
        {!isReviewed && <p>리뷰 작성</p>}
        {isReviewed && <p>리뷰 수정</p>}
      </div>
      <InfoProduct brandName={null} productName={null} productOption={null} />
      <StarRating />
      <AddPhotoFile />
      <WritingReview />
      <button className={classes.btn}>등록</button>
    </div>
  );
}

export default ModalContUploadUpdateReview;
