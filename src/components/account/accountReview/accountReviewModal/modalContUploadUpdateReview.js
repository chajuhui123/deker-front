import React from "react";
import classes from "./modalContUploadUpdateReview.module.css";
import InfoProduct from "./infoProduct";
import StarRating from "./starRating";
import AddPhotoFile from "./addPhotoFile";
import WritingReview from "./writingReview";

function ModalContUploadUpdateReview() {
  return (
    <div className={classes.modalContReview}>
      <div className={classes.title}>
        <p>리뷰 작성</p>
        {/* 이미 작성된 리뷰이면 수정으로, 아니라면 리뷰 작성으로 */}
        {/* <p>리뷰 수정</p> */}
      </div>
      <InfoProduct />
      <StarRating />
      <AddPhotoFile />
      <WritingReview />
      {/* <button>등록</button>  */}
    </div>
  );
}

export default ModalContUploadUpdateReview;
