import classes from "./myOrderPrdtItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import ModalContUploadUpdateReview from "../accountReview/accountReviewModal/modalContUploadUpdateReview";
import ModalPopup from "components/common/modal";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import { modalAction } from "store/modal-slice";
import BuyConfirmPopup from "./buyConfirmPopup";
import CommBtn from "components/common/commBtn";

function MyOrderPrdtItem(props) {
  console.log(props.option1DataNm + props.productBrand);
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

  // 구매확정 이벤트
  const buyConfirmBtnHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        top: props.top,
        left: props.left,
        cont: (
          <BuyConfirmPopup
            orderId={props.orderId}
            productId={props.productId}
            productBrand={props.productBrand}
            productName={props.productName}
            productImg={props.productImg}
            option1Nm={props.option1Nm}
            option2Nm={props.option2Nm}
            option1DataNm={props.option1DataNm}
            option2DataNm={props.option2DataNm}
            orderPrice={props.orderPrice}
            orderQuantity={props.orderQuantity}
          />
        ),
      })
    );
  };

  // 교환, 환불 이벤트
  const exchnRfndBtnHandler = () => {
    alert("개발하지 않음");
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
      <div className={classes.prdtBox}>
        {props.departure === "cart" && (
          <div className={classes.cartItemCheck}>
            <input type="checkbox" />
          </div>
        )}
        <div className={classes.orderedItem_box}>
          <div className={classes.boxInner}>
            {/* {props.orderId} */}
            <img
              className={classes.product_img}
              alt={props.productImg}
              // src={props.productImg || noImg}
              src={`${BASE_URL}${props.productImg}` || noImg}
            />
            <div className={classes.btn_info_box}>
              <div className={classes.product_info}>
                <textarea>
                  {`[` + props.productBrand + `]` + props.productName}
                </textarea>
                <textarea style={{ color: "gray", fontSize: "13px" }}>
                  {props.option1Nm +
                    `/` +
                    props.option2Nm +
                    `: ` +
                    props.option1DataNm +
                    ` ` +
                    props.option2DataNm}
                </textarea>
                <div className={classes.dtlInfo}>
                  <div>
                    {props.orderPrice?.toLocaleString("ko-KR") +
                      ` | ` +
                      props.orderQuantity +
                      `개`}
                  </div>
                  {props.departure !== "productListToPay" &&
                    props.departure !== "cart" && (
                      <div className={classes.dtlInfo}>
                        <div
                          className={classes.buyConfirm}
                          onClick={buyConfirmBtnHandler}
                        >
                          구매확정
                        </div>
                        <div
                          className={classes.buyConfirm}
                          onClick={exchnRfndBtnHandler}
                        >
                          교환/환불
                        </div>
                      </div>
                    )}
                </div>
              </div>
              {props.departure !== "cart" && (
                <div className={classes.product_btn}>
                  {props.departure !== "productListToPay" &&
                    (props.orderState === "6" ? (
                      // 구매확정 상태면 버튼 활성화
                      <CommBtn
                        btnText="리뷰작성"
                        btnWidth="140px"
                        btnHeight="50px"
                        fontSize="15px"
                        radius="4px"
                        border="1px solid rgb(66, 66, 226)"
                        fnClick={openModalEventHandler}
                      />
                    ) : (
                      // 구매확정이 아니라면 버튼 비활성화
                      <CommBtn
                        btnText="리뷰작성"
                        btnWidth="140px"
                        btnHeight="50px"
                        fontSize="15px"
                        radius="4px"
                        txColor="rgb(78, 78, 78)"
                        bgColor="rgb(248, 248, 250)"
                        border="1px solid rgb(66, 66, 226)"
                      />
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyOrderPrdtItem;
