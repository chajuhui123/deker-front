import React from "react";
import classes from "./commBtn.module.css";

/**
 * 공통 버튼
 * @param {String} btnText 버튼에 표시될 텍스트
 * @param {String} btnWidht 버튼 넓이
 * @param {String} btnHeight 버튼 높이
 * @param {Function} fnClick onClick callback method
 * @returns
 */
function CommBtn({ btnText, btnWidht, btnHeight, fnClick }) {
  const customStyle = {
    width: btnWidht,
    height: btnHeight,
  };
  return (
    <div className={classes.btnArea} style={customStyle} onClick={fnClick}>
      <p>{btnText || "확인"}</p>
    </div>
  );
}

export default CommBtn;
