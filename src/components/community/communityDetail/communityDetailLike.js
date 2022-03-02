import React from "react";
import classes from "./communityDetailLike.module.css";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";

function CommunityDetailLike() {
  return (
    <div className={classes.likeBtn}>
      <div></div>
      <IoIosHeart size={19} />
      <p>좋아요</p>
    </div>
  );
}

export default CommunityDetailLike;
