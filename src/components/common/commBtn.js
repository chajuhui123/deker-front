import React from "react";
import classes from "./commBtn.module.css";
import CommSpinner from "./CommSpinner";

/**
 * 공통 버튼
 * @param {String} btnText 버튼에 표시될 텍스트
 * @param {String} btnWidth 버튼 넓이
 * @param {String} btnHeight 버튼 높이
 * @param {String} btnMargin 버튼 마진
 * @param {String} border 버튼 테두리(사용예: "3px solid rgb(66, 66, 226)")
 * @param {String} bgColor 버튼 배경색
 * @param {String} bdColor 테두리 색 <- border쓰면 이거 안써도 됨
 * @param {String} txColor 폰트 색상
 * @param {String} btnCursor 커서 모양
 * @param {String} radius 둥근정도
 * @param {String} fontSize 글씨크기
 * @param {String} for 대신 작동할 컴포넌트 이름
 * @param {boolean} isLoading Loading 여부
 * @param {Function} fnClick onClick callback method
 * @returns
 */
function CommBtn(props) {
  const customStyle = {
    width: props.btnWidth,
    height: props.btnHeight,
    margin: props.btnMargin,
    border: props.border,
    backgroundColor: props.bgColor,
    borderColor: props.bdColor,
    color: props.txColor || "white",
    borderRadius: props.radius,
    cursor: props.btnCursor,
  };
  return (
    <div
      className={classes.btnArea}
      style={customStyle}
      onClick={props.fnClick}
      for={props.for}
    >
      {props.isLoading || (
        <p style={{ fontSize: props.fontSize || "16px" }}>
          {props.btnText || "확인"}
        </p>
      )}
      {props.isLoading && <CommSpinner />}
    </div>
  );
}

export default CommBtn;
