import React, { useState } from "react";
import classes from "./modalContUploadUpdateReview.module.css";
import StarRating from "./starRating";
import AddPhotoFile from "./addPhotoFile";
import WritingReview from "./writingReview";
import CommAlert from "components/common/commAlert";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";

function ModalContUploadUpdateReview({
  mktProductId,
  productImage,
  productName,
  productOption,
  productPrice,
  isReviewAble,
}) {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(0); // 리뷰 별점
  const [reviewContent, setReviewContent] = useState(""); // 리뷰 작성 내용
  const [imageUrl, setImageUrl] = useState("");

  const handleRating = (rate) => setRating(rate);
  const onChangeReviewContent = (event) => setReviewContent(event.target.value);
  const onChangeImageUrl = (url) => {
    setImageUrl(url);
  };

  const fnAddReivewCallback = (res) => {
    if (!res) {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert
              title="오류"
              message="리뷰 등록 중 오류가 발생했습니다."
            />
          ),
        })
      );
    }
  };

  const handleAddReview = () => {
    const reviewUrl = isReviewAble ? "mb/mkt/reg/review" : "mb/mkt/mod/review";
    const reviewParams = isReviewAble
      ? {
          productId: mktProductId,
          myStar: rating / 20,
          reviewString: reviewContent,
          proReviewImg: imageUrl,
        }
      : {
          // 리뷰 아이디 넣어줘야 함
          mktReviewId: "string",
          myStar: rating / 20,
          reviewString: reviewContent,
          proReviewImg: imageUrl,
        };
    dispatch(postApi(reviewUrl, reviewParams, fnAddReivewCallback));
  };

  return (
    // 추후 Form type 으로 변경 예정
    <div className={classes.modalContReview}>
      <div className={classes.title}>
        {isReviewAble ? <p>리뷰 작성</p> : <p>리뷰 수정</p>}
      </div>
      <div className={classes.productInfoBox}>
        <img alt={productName} src={productImage} />
        <div>
          <p style={{ fontWeight: "600" }}>{productName}</p>
          <p style={{ color: "gray" }}>{productOption}</p>
          <p>{productPrice.toLocaleString("kr-KR")}원</p>
        </div>
      </div>
      <StarRating rating={rating} handleRating={handleRating} />
      <AddPhotoFile onChangeImageUrl={onChangeImageUrl} />
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
