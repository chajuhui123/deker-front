import classes from "./myReviewItem.module.css";
import { useDispatch } from "react-redux";
import { modalAction } from "../../../store/modal-slice";
import ModalContUploadUpdateReview from "./modal/modalContUploadUpdateReview";

function MyReviewItem({
  mktProductId,
  productImage,
  productName,
  productOption,
  productPrice,
  isReviewAble,
}) {
  const dispatch = useDispatch();

  const buttonText = isReviewAble ? "작성" : "수정";

  const openModalEventHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <ModalContUploadUpdateReview
            mktProductId={mktProductId}
            productImage={productImage}
            productName={productName}
            productOption={productOption}
            productPrice={productPrice}
            isReviewAble={isReviewAble}
          />
        ),
      })
    );
  };

  return (
    <>
      <div className={classes.reviewItem_box}>
        <img
          className={classes.product_img}
          alt={productName}
          src={productImage}
        />
        <div className={classes.btn_info_box}>
          <div className={classes.product_info}>
            <p style={{ fontWeight: "600" }}>{productName}</p>
            <p style={{ color: "gray" }}>{productOption}</p>
            <p>{productPrice?.toLocaleString("ko-KR") || 0} 원</p>
          </div>
          <div
            className={
              isReviewAble
                ? classes.product_reviewable_btn
                : classes.product_reviewed_btn
            }
          >
            <button onClick={openModalEventHandler}>{buttonText}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReviewItem;
