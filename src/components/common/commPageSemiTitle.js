import React from "react";
import classes from "./commPageSemiTitle.module.css";

/**
 * 페이지 메인 TITLE component
 * @param {String} semiTitle Semi Main Title Name
 * @returns
 */
function CommPageSemiTitle({ semiTitle }) {
  return (
    <div className={classes.semiTitle}>
      <p>{semiTitle}</p>
    </div>
  );
}

export default CommPageSemiTitle;
