import React from "react";
import classes from "./communityDetailLocationIcon.module.css";

function CommunityDetailLocationIcon({ top, right, bottom, left }) {
  return (
    <div
      className={classes.locationIconWrapper}
      style={{ top, right, bottom, left }}
    >
      <div
        className={classes.locationIconDiv}
        style={{ top, right, bottom, left }}
      >
        <p className={classes.locationIcon}>+</p>
        <div className={classes.locationToolTip}>
          <img
            className={classes.toolTipImg}
            src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg"
            alt=""
          />
          <div className={classes.toolTipText}>
            <p>상품명</p>
            <p>1,000 원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailLocationIcon;
