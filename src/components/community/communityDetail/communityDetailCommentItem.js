import React from "react";
import classes from "./communityDetailCommentItem.module.css";
import noUserImg from "img/noUserImg.png";

function CommunityDetailCommentItem({ comment }) {
  return (
    <div>
      <img src={noUserImg} alt="" />
      <div>유저네임</div>
      <div>댓글내용</div>
      <div>9분 전</div>
    </div>
  );
}

export default CommunityDetailCommentItem;
