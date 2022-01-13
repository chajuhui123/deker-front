import React, { useState } from "react";
import classes from "./productSalesLinkPage.module.css";

function ProductSalesLink() {
  const [productLinkInputText, setProductLinkInputText] = useState("");

  const productLinkkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  const productSearchHandler = () => {
    setProductLinkInputText("");
  };

  return (
    <div className={classes.productSalesLinkLayout}>
      <div className={classes.title}>
        <p>상품링크등록</p>
      </div>
      <div className={classes.productSearchArea}>
        <input
          className={classes.productLinkInput}
          type="text"
          value={productLinkInputText}
          placeholder="상품 이름을 임력 해주세요."
          onChange={productLinkkInputHandler}
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
      <div className={classes.closeBtnArea}>
        <button className={classes.popupCloseBtn}>닫기</button>
      </div>
    </div>
  );
}

export default ProductSalesLink;
