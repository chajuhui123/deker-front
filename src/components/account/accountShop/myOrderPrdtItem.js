import classes from "./myOrderPrdtItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import ModalContUploadUpdateReview from "../accountReview/accountReviewModal/modalContUploadUpdateReview";
import ModalPopup from "components/common/modal";
import noImg from "img/noImg.png";
import { modalAction } from "store/modal-slice";

function MyOrderPrdtItem(props) {
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
          alt={props.productImg}
          src={props.productImg || noImg}
        />
        <div className={classes.btn_info_box}>
          <div className={classes.product_info}>
            <p style={{ color: "gray" }}>{props.productBrand}</p>
            <p>{props.productName}</p>
            <p style={{ color: "gray" }}>{props.productBrand}</p>
          </div>
          <div className={classes.product_btn}>
            <button onClick={openModalEventHandler}>리뷰작성</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrderPrdtItem;
