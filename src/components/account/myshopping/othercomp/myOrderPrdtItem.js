import classes from "./myOrderPrdtItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import ModalContUploadUpdateReview from "../../myreview/modal/modalContUploadUpdateReview";
import ModalPopup from "components/common/modal";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import { modalAction } from "store/modal-slice";
import BuyConfirmPopup from "../popup/buyConfirmPopup";
import CommBtn from "components/common/commBtn";
import { useCallback, useEffect, useState } from "react";

function MyOrderPrdtItem(props) {
  const isOpen = useSelector(state => state.modal.isOpen);
  const modalId = useSelector(state => state.modal.id);
  const modalCont = useSelector(state => state.modal.cont);
  const [isCheck, setIsCheck] = useState(false); // 상품이 장바구니 페이지에서 선택되었는 지
  const dispatch = useDispatch();

  /* 장바구니 페이지에서 결제할 상품 선택 */
  const selectProductHandler = useCallback(() => {
    setIsCheck(!isCheck);
    // 상품이 체크되어 있으면 결제할 상품 append, 체크 해제되면 결제할 상품에서 제외
    props.selectPrdtYN(isCheck, props.cartId, props.orderPrice);
  }, [isCheck, props]);

  useEffect(() => {
    if (
      props.tmp &&
      props.selectedPrdt?.includes(props.selectedPrdt.indexOf(props.productId))
    ) {
      selectProductHandler();
    } else {
      setIsCheck(false);
    }
  }, [props.productId, props.selectedPrdt, props.tmp, selectProductHandler]);

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
      <div
        className={
          props.departure === "cart" ? classes.cartItemD : classes.dummy
        }
      >
        <div className={classes.prdtBox}>
          {props.departure === "cart" && (
            <div className={classes.cartItemCheck}>
              <input
                type="checkbox"
                onClick={selectProductHandler}
                checked={isCheck}
              />
            </div>
          )}

          <div className={classes.orderedItem_box}>
            <div className={classes.boxInner}>
              <img
                className={classes.product_img}
                alt={props.productImg}
                // src={props.productImg || noImg}
                src={`${BASE_URL}${props.productImg}` || noImg}
              />
              <div className={classes.btn_info_box}>
                <div className={classes.product_info}>
                  <textarea disabled>
                    {`[` + props.productBrand + `]` + props.productName}
                  </textarea>
                  <textarea
                    style={{ color: "gray", fontSize: "13px" }}
                    disabled
                  >
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
                      props.departure !== "cart" &&
                      props.departure !== "buynow" && (
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
                      props.departure !== "buynow" &&
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
      </div>
    </>
  );
}

export default MyOrderPrdtItem;
