import React from "react";
import classes from "./commPageSemiTitle.module.css";

/**
 * 페이지 Semi TITLE component
 * @param {String} semiTitle Semi Title Name
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
