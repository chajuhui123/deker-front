import React from "react";
import classes from "./commText.module.css";

/**
 * just TEXT component
 * @param {String} text text
 * @returns
 */
function CommText({ text }) {
  return (
    <div className={classes.text}>
      <text>{text}</text>
    </div>
  );
}

export default CommText;
