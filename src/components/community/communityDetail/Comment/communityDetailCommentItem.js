import React from "react";
import classes from "./communityDetailCommentItem.module.css";
import noUserImg from "img/noUserImg.png";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function CommunityDetailCommentItem({ commentItemObject }) {
  const { commentUpdateYmdt, content, writeNickname, writerProfileImgUrl } =
    commentItemObject;

  console.log(writerProfileImgUrl);
  return (
    <div className={classes.commentItemDiv}>
      <img
        className={classes.commentWriterImg}
        src={
          !!writerProfileImgUrl
            ? `${BASE_URL}${writerProfileImgUrl}`
            : noUserImg
        }
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
