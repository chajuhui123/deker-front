import React from "react";
import classes from "./commAlert.module.css";

function CommAlert(props) {
  return (
    <div className={classes.commAlertArea}>
      <div className={classes.commAlertTitle}>{props.title}</div>
      <div className={classes.commAlertMessage}>{props.message}</div>
    </div>
  );
}

export default CommAlert;
