import React from "react";
import classes from "./communityDetailLike.module.css";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { IoIosHeart, IoIosHeartDislike } from "react-icons/io";

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
      <IoIosHeart size={19} />
      <p>좋아요</p>
    </div>
  );
}

export default CommunityDetailLike;
