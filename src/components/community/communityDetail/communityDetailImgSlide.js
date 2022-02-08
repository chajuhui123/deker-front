import React from "react";
import classes from "./communityDetailImgSlide.module.css";

function CommunityDetailImgSlide() {
  const imgArray = [
    "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg",
    "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg",
    "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg",
    "https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg",
  ];
  const imgArrayComponent = imgArray.map((img) => {
    return <img className={classes.slideImg} src={img} alt="" />;
  });
  return <div className={classes.slideDiv}>{imgArrayComponent}</div>;
}

export default CommunityDetailImgSlide;
