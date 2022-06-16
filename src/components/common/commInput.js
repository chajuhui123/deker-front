import React from "react";
import classes from "./commInput.module.css";
import CommPageSemiTitle from "./commPageSemiTitle";

/**
 *
 * @param {String} title input창 위 제목
 * @param {String} noti input창 위에 작은 글씨로 설명을 달아줌
 * @param {String} refer input창 reference
 * @param {String} type input type
 * @param {String} value input value
 * @param {String} placeholder placeholder
 * @param {Boolean} readOnly readOnly
 * @param {String} onChange input onChange pointer method
 * @returns
 */
function CommInput(props) {
  const title = props.title;
  const noti = props.noti;
  const ref = props.refer;
  return (
    <div className={classes.commInput} {...props}>
      {title && <CommPageSemiTitle semiTitle={title} />}
      {noti && <h6>{noti}</h6>}
      <input
        type={props.type || "text"}
        value={props.value}
        onChange={props.onChange}
        ref={ref}
        placeholder={props.placeholder}
        readOnly={props.readOnly || false}
      ></input>
    </div>
  );
}

export default CommInput;
