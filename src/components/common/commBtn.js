import React from "react";
import classes from "./CommBtn.module.css";
import CommSpinner from "./CommSpinner";

/**
 * 공통 버튼
 * @param {String} btnText 버튼에 표시될 텍스트
 * @param {String} btnWidth 버튼 넓이
 * @param {String} btnHeight 버튼 높이
 * @param {String} btnMargin 버튼 마진
 * @param {String} bgColor 버튼 배경색
 * @param {String} bdColor 테두리 색
 * @param {String} txColor 폰트 색상
 * @param {String} btnCursor 커서 모양
 * @param {String} radius 둥근정도
 * @param {boolean} isLoading Loading 여부
 * @param {Function} fnClick onClick callback method
 * @returns
 */
function CommBtn({
  btnText,
  btnWidth,
  btnHeight,
  btnMargin,
  bgColor,
  bdColor,
  txColor,
  btnCursor,
  radius,
  isLoading,
  fnClick,
}) {
  const customStyle = {
    width: btnWidth,
    height: btnHeight,
    margin: btnMargin,
    backgroundColor: bgColor,
    borderColor: bdColor,
    color: txColor,
    borderRadius: radius,
    cursor: btnCursor,
  };
  return (
    <div className={classes.btnArea} style={customStyle} onClick={fnClick}>
      {isLoading || <p>{btnText || "확인"}</p>}
      {isLoading && <CommSpinner />}
    </div>
  );
}

export default CommBtn;
