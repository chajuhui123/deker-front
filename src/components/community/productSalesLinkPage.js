import CommChckbx from "components/common/commChckbx";
import ModalTitle from "components/common/modalTitle";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import OuterPrdct from "./outerPrdct";
import classes from "./productSalesLinkPage.module.css";

function ProductSalesLink(props) {
  const [productLinkInputText, setProductLinkInputText] = useState("");
  const [productNameInputText, setProductNameInputText] = useState("");
  const [outerProductYN, setOuterProductYN] = useState(true);

  const dispatch = useDispatch();

  const outerProductHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: true, cont: <OuterPrdct /> }));
  };

  const outerProductIsCheckedHandler = (data) => {
    setOuterProductYN(data);
    console.log("kwon debug: " + outerProductYN);
  };

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };
  // 검색 버튼을 누르면 내부 상품 search 후 결과 뿌려주고 입력창 reset하면 안될거같은데?
  const productSearchHandler = () => {
    // setProductLinkInputText("");
  };

  // 외부 상품 등록
  const productNameInputHandler = (e) => {
    setProductNameInputText(e.target.value);
  };
  // 등록 버튼을 누르면 상품 이름 넣고 modal 닫기
  const productNameRegHandler = () => {
    // modal close
    // alert("modal close 기능 내가 props 건드려도 되는 지 확인하고 수정");
    console.log(props.productInfoHandler);
    props.productInfoHandler("TEST11");
  };

  return (
    <div className={classes.productSalesLinkLayout}>
      <ModalTitle title="상품링크등록" />
      <p onClick={outerProductHandler}>+ 상품 직접 등록하기</p>
      <CommChckbx
        label="외부 상품 등록"
        outerProductYN={outerProductYN}
        onChange={outerProductIsCheckedHandler}
      />

      {outerProductYN && (
        <div>
          <div className={classes.productSearchArea}>
            <input
              className={classes.productInput}
              type="text"
              value={productLinkInputText}
              placeholder="상품 이름을 임력 해주세요."
              onChange={productLinkInputHandler}
            ></input>
            <button
              className={classes.productSearchBtn}
              onClick={productSearchHandler}
            >
              검색
            </button>
          </div>
          <div className={classes.selectedProduct}>
            {/* question 등록한 상품 띄우는 곳?? ui 이해가 안됨 */}
          </div>
        </div>
      )}
      {!outerProductYN && (
        <div>
          <div className={classes.productSearchArea}>
            <input
              className={classes.productInput}
              type="text"
              value={productNameInputText}
              placeholder="상품 이름 혹은 링크를 임력 해주세요."
              onChange={productNameInputHandler}
            ></input>
            <button
              className={classes.productSearchBtn}
              onClick={productNameRegHandler}
            >
              등록
            </button>
          </div>
          <div className={classes.empty}>
            {/* 갑자기 모달 크기 확 바뀌는게 이상해서 일단 넣음 */}
          </div>
        </div>
      )}
      <div className={classes.closeBtnArea}>
        <button className={classes.popupCloseBtn}>닫기</button>
      </div>
    </div>
  );
}

export default ProductSalesLink;
