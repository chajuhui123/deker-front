import classes from "./myReviewItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalAction } from "../../store/modal-slice";
import ModalPopup from "../common/modal";
import ModalContUploadUpdateReview from "./accountReview/accountReviewModal/modalContUploadUpdateReview";

function MyReviewItem(props) {
  const isOpen = useSelector((state) => state.modal.isOpen);
  const modalId = useSelector((state) => state.modal.id);
  const modalCont = useSelector((state) => state.modal.cont);
  const dispatch = useDispatch();
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
        <div
          className={classes.product_img}
          alt={props.product_name}
          src={props.product_image}
        />
        <div className={classes.btn_info_box}>
          <div className={classes.product_info}>
            <p style={{ color: "gray" }}>{props.product_brand}</p>
            <p>{props.product_name}</p>
            <p style={{ color: "gray" }}>{props.product_option}</p>
          </div>
          <div className={classes.product_btn}>
            <button onClick={openModalEventHandler}>리뷰작성</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyReviewItem;
