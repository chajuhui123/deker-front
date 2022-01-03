import React from "react";
import classes from "./writingReview.module.css";

function WritingReview() {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>리뷰 작성</p>
      <p className={classes.description}>
        최소 10자 이상의 리뷰를 남겨주세요..
      </p>
      <input
        className={classes.inputBox}
        type="text"
        required
        id="name"
        name="name"
        minlength="10"
        maxlength="100"
      />
    </div>
  );
}

export default WritingReview;
