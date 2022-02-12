import React from "react";
import classes from "./communityDetailCommentItem.module.css";
import noUserImg from "img/noUserImg.png";

function CommunityDetailCommentItem({ commentItemObject }) {
  return (
    <div className={classes.commentItemDiv}>
      <img
        className={classes.commentWriterImg}
        src={commentItemObject?.writerProfileImgUrl || noUserImg}
        alt=""
      />
      <div>
        <div className={classes.commentContentDiv}>
          <span className={classes.writerName}>
            {commentItemObject?.writerId}
          </span>
          <div className={classes.commentContent}>
            {commentItemObject?.content}
          </div>
        </div>
        <div className={classes.commentInfo}>
          {commentItemObject?.commentUpdateYmdt}
        </div>
      </div>
    </div>
  );
}

export default CommunityDetailCommentItem;
