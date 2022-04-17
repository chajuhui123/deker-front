import React from "react";
import { Rating } from "react-simple-star-rating";
import classes from "./starRating.module.css";

function StarRating({ rating, handleRating }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <p>별점 평가</p>
      </div>
      <div className={classes.star}>
        <Rating onClick={handleRating} ratingValue={rating} />
      </div>
    </div>
  );
}

export default StarRating;
