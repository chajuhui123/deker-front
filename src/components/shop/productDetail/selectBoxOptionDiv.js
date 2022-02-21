import React from "react";
import classes from "./selectBoxOptionDiv.module.css";

function SelectBoxOptionDiv({ text, component }) {
  return (
    <div className={classes.optionDiv}>
      <p className={classes.textDiv}>{text}</p>
      <div className={classes.componentDiv}>{component}</div>
    </div>
  );
}

export default SelectBoxOptionDiv;
