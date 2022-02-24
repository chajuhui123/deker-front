import React from "react";
import classes from "./communityDetailCommentItem.module.css";
import noUserImg from "img/noUserImg.png";

function CommunityDetailCommentItem({ commentItemObject }) {
  const { commentUpdateYmdt, content, writeNickname, writerProfileImgUrl } =
    commentItemObject;
  return (
    <div className={classes.commentItemDiv}>
      <img
        className={classes.commentWriterImg}
        src={writerProfileImgUrl || noUserImg}
        alt=""
      />
      <div>
        <div className={classes.commentContentDiv}>
          <span className={classes.writerName}>{writeNickname}</span>
          <div className={classes.commentContent}>{content}</div>
        </div>
        <div className={classes.commentInfo}>{commentUpdateYmdt}</div>
      </div>
    </div>
  );
}

export default CommunityDetailCommentItem;
