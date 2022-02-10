// import CommChckbx from "components/common/commChckbx";
import CommBtn from "components/common/commBtn";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import OuterPrdct from "./outerPrdct";
import classes from "./productSalesLinkPage.module.css";

function ProductSalesLink(props) {
  const [productLinkInputText, setProductLinkInputText] = useState("");

  const dispatch = useDispatch();

  const outerProductHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <OuterPrdct
            id={props.id}
            productInfoHandler={props.productInfoHandler}
          />
        ),
      })
    );
  };

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  // back 통신해서 받아오기
  const productSearchHandler = () => {
    // back 통신해서 받아오기
  };

  // 등록 버튼을 누르면 상품 이름 넣고 modal 닫기
  // const productNameRegHandler = () => {
  //   // modal close
  //   console.log(props.productInfoHandler);
  //   const dataObject = {
  //     id: props.id,
  //     productId: "",
  //   };
  //   props.productInfoHandler(dataObject);
  // };

  const dummyClick = () => {
    const dataObject = {
      id: props.id,
      productId: "dummy",
    };
    props.productInfoHandler(dataObject);
  };
  return (
    <div className={classes.productSalesLinkLayout}>
      <div>
        <div className={classes.productSearchArea}>
          <input
            className={classes.productInput}
            type="text"
            value={productLinkInputText}
            placeholder="상품 이름을 임력 해주세요."
            onChange={productLinkInputHandler}
          />
          <button
            className={classes.productSearchBtn}
            onClick={productSearchHandler}
          >
            검색
          </button>
        </div>
        <p className={classes.outerProduct} onClick={outerProductHandler}>
          + 상품 직접 등록하기
        </p>
        <div className={classes.selectedProduct}>
          {/* 더미데이터 시작 */}
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c"
            />
            <div className={classes.productInfo}>
              <div>T20 TAB+ TNA200HF 메쉬의자 2types</div>
              <div>12000</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fnClick={dummyClick}
            />
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg"
            />
            <div className={classes.productInfo}>
              <div>메쉬테이블 2types</div>
              <div>13300</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fnClick={dummyClick}
            />
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg"
            />
            <div className={classes.productInfo}>
              <div>노트북</div>
              <div>1200000</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fnClick={dummyClick}
            />
          </div>
          {/* 더미 끝 */}
        </div>
      </div>
      <div className={classes.closeBtnArea}>
        <button className={classes.popupCloseBtn}>닫기</button>
      </div>
    </div>
  );
}

export default ProductSalesLink;
