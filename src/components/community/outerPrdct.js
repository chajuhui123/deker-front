import React from "react";
import classes from "./outerPrdct.module.css";

function OuterPrdct(props) {
  // 외부 상품 등록
  const productNameInputHandler = (e) => {
    // setProductNameInputText(e.target.value);
  };
  // 등록 버튼을 누르면 상품 이름 넣고 modal 닫기
  const productNameRegHandler = () => {
    // modal close
    alert("modal close 기능 내가 props 건드려도 되는 지 확인하고 수정");
  };

  return (
    <div className={classes.outerPrdctLayout}>
      <div>
        <input
          type="text"
          // value={productNameInputText}
          placeholder="상품 이름 혹은 링크를 임력 해주세요."
          onChange={productNameInputHandler}
        ></input>
        <button onClick={productNameRegHandler}>등록</button>
      </div>
    </div>
  );
}

export default OuterPrdct;
