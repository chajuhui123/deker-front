import React from "react";
import classes from "./commBtn.module.css";

/**
 * 공통 버튼
 * @param {String} btnText 버튼에 표시될 텍스트
 * @param {String} btnWidth 버튼 넓이
 * @param {String} btnHeight 버튼 높이
 * @param {String} btnMargin 버튼 마진
 * @param {String} bgColor 버튼 배경색
 * @param {String} btnCursor 커서 모양
 * @param {String} radius 둥근정도
 * @param {Function} fnClick onClick callback method
 * @returns
 */
function CommBtn({
  btnText,
  btnWidth,
  btnHeight,
  btnMargin,
  bgColor,
  btnCursor,
  radius,
  fnClick,
}) {
  const customStyle = {
    width: btnWidth,
    height: btnHeight,
    margin: btnMargin,
    backgroundColor: bgColor,
    borderColor: bgColor,
    borderRadius: radius,
    cursor: btnCursor,
  };
  return (
    <div className={classes.btnArea} style={customStyle} onClick={fnClick}>
      <p>{btnText || "확인"}</p>
    </div>
  );
}

export default CommBtn;