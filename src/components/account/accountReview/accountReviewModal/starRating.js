import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import classes from "./starRating.module.css";

function StarRating() {
  // https://www.npmjs.com/package/react-simple-star-rating 참고
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
    console.log(rating);
  };
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
