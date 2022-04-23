import React from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import classes from "./communityDetailLike.module.css";

function CommunityDetailLike({ isLiked, postLikeCnt, handleLike }) {
  return (
    <div className={classes.likeBtn} onClick={handleLike}>
      {isLiked ? (
        <BsHeartFill size={19} color={"red"} />
      ) : (
        <BsHeart size={19} />
      )}
      <span>{postLikeCnt}</span>
    </div>
  );
}

export default CommunityDetailLike;
