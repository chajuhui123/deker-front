import React from "react";
import classes from "./modalTitle.module.css";

/**
 * 모달창 제목 component
 * @param {String} title 제목명
 * @returns
 */
function ModalTitle({ title }) {
  return (
    <div className={classes.title}>
      <p>{title}</p>
    </div>
  );
}

export default ModalTitle;
