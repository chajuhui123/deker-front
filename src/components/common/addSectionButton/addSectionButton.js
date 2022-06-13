import React from "react";
import classes from "./addSectionButton.module.css";

/**
 * @param {void} onClick plus 버튼 클릭시
 * @param {String} sectionName 섹션 추가 버튼 텍스트
 *
 */

function AddSectionButton(props) {
  return (
    <button
      className={classes.addButton}
      onClick={props.onClick}
      style={{ padding: "10px", width: "100%" }}
      {...props}
    >
      {props.sectionName ?? "추가"}
    </button>
  );
}

export default AddSectionButton;
