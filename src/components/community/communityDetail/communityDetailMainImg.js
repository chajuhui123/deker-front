import React from "react";
import CommunityDetailLocationIcon from "./communityDetailLocationIcon";
import classes from "./communityDetailMainImg.module.css";

function CommunityDetailMainImg() {
  return (
    <div className={classes.imgWrapper}>
      <img
        className={classes.mainImg}
        src="https://i.pinimg.com/originals/7d/be/38/7dbe3845b0527ef8078b301e5e3b6d27.jpg"
        alt=""
      />
      <div className={classes.locationIconDiv}>
        <CommunityDetailLocationIcon top="10px" left="20px" />
      </div>
      <div className={classes.locationIconDiv}>
        <CommunityDetailLocationIcon top="10px" right="40px" />
      </div>
    </div>
  );
}

export default CommunityDetailMainImg;
