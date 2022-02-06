import CommBtn from "components/common/commBtn";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./outerPrdct.module.css";
import ProductSalesLink from "./productSalesLinkPage";

function OuterPrdct(props) {
  const [outerProductText, setOuterProductText] = useState("");
  const dispatch = useDispatch();

  // '취소'버튼 클릭시 내부상품등록 모달로 돌아감
  const productNameCnclHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <ProductSalesLink
            id={props.id}
            productInfoHandler={props.productInfoHandler}
          />
        ),
      })
    );
  };

  // 외부 상품 등록
  const productNameInputHandler = (e) => {
    setOuterProductText(e.target.value);
  };

  // '등록' 버튼을 누르면 상품 이름 넣고 modal 닫기
  const productNameRegHandler = () => {
    const dataObject = {
      id: props.id,
      productDetail: outerProductText,
    };
    props.productInfoHandler(dataObject);

    alert("modal close 기능");
    console.log(dataObject);
  };

  return (
    <div className={classes.outerPrdctLayout}>
      <div>
        <textarea
          className={classes.inputArea}
          type="text"
          value={outerProductText}
          maxLength="100"
          placeholder="상품명/브랜드/판매처 등을 입력 해주세요. &#13;&#10;(최대 100자)"
          onChange={productNameInputHandler}
        />
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
            fnClick={productNameCnclHandler}
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
