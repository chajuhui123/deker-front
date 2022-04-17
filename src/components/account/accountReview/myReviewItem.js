import classes from "./myReviewItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../../store/modal-slice";
import ModalPopup from "../../common/modal";
import ModalContUploadUpdateReview from "./accountReviewModal/modalContUploadUpdateReview";

function MyReviewItem({
  productImage,
  productName,
  productOption,
  productPrice,
  isReviewAble,
}) {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);

  const buttonText = isReviewAble ? "작성" : "수정";

  const openModalEventHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: <ModalContUploadUpdateReview />,
      })
    );
  };

  const closeModalEventHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  return (
    <>
      <ModalPopup
        id={modalId}
        isOpen={isOpen}
        onRequestClose={closeModalEventHandler}
      >
        {modalCont}
      </ModalPopup>
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
