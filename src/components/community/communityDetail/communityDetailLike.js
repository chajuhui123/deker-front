import React from "react";
import classes from "./communityDetailLike.module.css";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { BsHeart, BsHeartFill } from "react-icons/bs";

function CommunityDetailLike({ communityPostId }) {
  console.log("communityPostId::", communityPostId);
  const dispatch = useDispatch();

  const handleLikePost = () => {
    dispatch(
      postApi(
        "mb/post/reg/post-like",
        { communityId: communityPostId },
        () => {}
      )
    );
  };

  return (
    <div className={classes.likeBtn} onClick={handleLikePost}>
      {/* 좋아요 상태가 아니라면 */}
      <BsHeart size={19} />
      <p>좋아요</p>
      {/* 좋아요 상태라면 */}
      <BsHeartFill size={19} color={"red"} />
    </div>
  );
}

export default CommunityDetailLike;
