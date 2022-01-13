import React from "react";
import classes from "./commPageTitle.module.css";

/**
 * 페이지 메인 TITLE component
 * @param {String} title Main Title Name
 * @returns
 */
function CommonPageTitle({ title }) {
  return (
    <div className={classes.title}>
      <p>{title}</p>
    </div>
  );
}

export default CommonPageTitle;
