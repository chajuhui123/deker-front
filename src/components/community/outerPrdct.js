import CommBtn from "components/common/commBtn";
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
          className={classes.inputArea}
          type="text"
          // value={productNameInputText}
          placeholder="상품명/브랜드/판매처 등을 임력 해주세요. (최대 100자)"
          onChange={productNameInputHandler}
        ></input>
      </div>
      <div className={classes.btnArea}>
        <div>
          <CommBtn
            btnText="취소"
            btnWidth="88px"
            btnHeight="33px"
            border="3px solid rgb(66, 66, 226)"
            bgColor="rgb(248, 248, 248)"
            radius="4px"
            txColor="rgb(78, 78, 78)"
            fnClick={productNameRegHandler}
          />
        </div>
        <div className={classes.submitBtn}>
          <CommBtn
            btnText="등록"
            btnWidth="92px"
            btnHeight="38px"
            border="1px solid rgb(66, 66, 226)"
            bgColor="rgb(66, 66, 226)"
            radius="4px"
            txColor="rgb(245, 245, 245)"
            fnClick={productNameRegHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default OuterPrdct;
