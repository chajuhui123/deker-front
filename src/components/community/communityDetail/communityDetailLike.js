import React from "react";
import classes from "./communityDetailLike.module.css";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { BsHeart, BsHeartFill } from "react-icons/bs";

function CommunityDetailLike({
  communityPostId,
  liked,
  communityPostLikeCount,
}) {
  const dispatch = useDispatch();

  const handleLikePost = () => {
    const postParam = liked ? "rmv" : "reg";
    const ApiUrl = `mb/post/${postParam}/post-like`;
    dispatch(postApi(ApiUrl, { communityId: communityPostId }, () => {}));
  };
  return (
    <div className={classes.likeBtn} onClick={handleLikePost}>
      {liked ? <BsHeartFill size={19} color={"red"} /> : <BsHeart size={19} />}
      <span>{communityPostLikeCount}</span>
    </div>
  );
}

export default CommunityDetailLike;
