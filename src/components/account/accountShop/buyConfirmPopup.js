import CommBtn from "components/common/commBtn";
import classes from "./buyConfirmPopup.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import { postApi } from "api/fetch-api";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BuyConfirmPopup = (props) => {
  const dispatch = useDispatch();
  const [isConfirm, setIsConfirm] = useState(false);

  const buyConfirmBtnHandler = () => {
    // 배송상태 배송완료 -> 구매확정 상태로 변경 Back 연결
    dispatch(
      postApi(
        "/mb/mkt/mod/delivery-completed",
        {
          orderId: props.orderId,
          //, productId: props.productId
        },
        fnCallback
      )
    );
  };

  const fnCallback = (res) => {
    if (!!res) {
      console.log(`Buy Confirm :: res :: ${JSON.stringify(res)}`);
      setIsConfirm(true);
    } else {
      alert("구매확정 실패");
    }
  };

  return (
    <div className={classes.layout}>
      <div className={classes.inner}>
        <div className={classes.popupTitle}>
          <CommPageSemiTitle semiTitle="구매확정 상품" />
        </div>
        <hr />
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
                <textarea>
                  {`[` + props.productBrand + `]` + props.productName}
                </textarea>
                <textarea style={{ color: "gray", fontSize: "15px" }}>
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
                </div>
              </div>
            </div>
          </div>
          <div className={classes.text}>
            <div>※ 구매확정이란 무엇인가요?</div>
            <div>
              - 상품 수령 및 확인 후 반품/교환 의사가 없으 경우 판매자에게 최종
              구매의사를 전달하는 것을 의미합니다.
            </div>
            <div>
              - 구매확정 후에는 반품/교환 요청이 불가능하므로 반드시 상품 확인
              후 신중히 결정해주세요.
            </div>
          </div>
        </div>
        {isConfirm ? (
          <CommBtn
            btnText="구매확정"
            btnWidth="480px"
            btnHeight="35px"
            fontSize="15px"
            radius="4px"
            txColor="rgb(78, 78, 78)"
            bgColor="rgb(248, 248, 250)"
            border="1px solid rgb(66, 66, 226)"
          />
        ) : (
          <CommBtn
            btnText="구매확정"
            btnWidth="480px"
            btnHeight="35px"
            fontSize="15px"
            radius="4px"
            border="1px solid rgb(66, 66, 226)"
            fnClick={buyConfirmBtnHandler}
          />
        )}
      </div>
    </div>
  );
};

export default BuyConfirmPopup;
