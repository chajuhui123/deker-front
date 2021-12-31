import React from "react";
import classes from "./input-with-title.module.css";

function CommInput(props) {
  const noti = props.noti;
  return (
    <div className={classes.commInput}>
      <p>{props.title}</p>
      {noti && <h6>{noti}</h6>}
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        ref={props.ref}
      ></input>
    </div>
  );
}

export default CommInput;
