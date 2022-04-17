import React, { useState } from "react";
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
  const [isLiked, setIsLiked] = useState(liked);

  const [postLikeCnt, setPostLikeCnt] = useState(communityPostLikeCount);
  console.log("postLikeCnt", isLiked, postLikeCnt);

  const handleLikePost = () => {
    const postParam = isLiked ? "rmv" : "reg";
    // const postParam = isLiked ? "rmv" : "reg";
    const ApiUrl = `mb/post/${postParam}/post-like`;
    dispatch(
      postApi(ApiUrl, { communityId: communityPostId }, () => {
        setIsLiked((prevLike) => !prevLike);
      })
    );
  };

  return (
    <div className={classes.likeBtn} onClick={handleLikePost}>
      {isLiked ? (
        <BsHeartFill size={19} color={"red"} />
      ) : (
        <BsHeart size={19} />
      )}
      <span>{communityPostLikeCount}</span>
    </div>
  );
}

export default CommunityDetailLike;
