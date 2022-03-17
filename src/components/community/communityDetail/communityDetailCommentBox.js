import React from "react";
import classes from "./communityDetailCommentBox.module.css";
import CommunityDetailCommentItem from "./communityDetailCommentItem";
import noUserImg from "img/noUserImg.png";

function communityDetailCommentBox({ commentList }) {
  return (
    <div className={classes.commentBoxDiv}>
      <div className={classes.commentSummaryDiv}>
        댓글{" "}
        <span className={classes.commentCount}>({commentList.length})</span>
      </div>
      <form className={classes.commentInputDiv}>
        {/* 작성자 프로필 img src */}
        <img className={classes.commentInputImg} src={noUserImg} alt="" />
        <input className={classes.commentInputBox} />
        <button className={classes.commentInputBtn}>등록</button>
      </form>
      <div>
        {commentList?.map((commentItemObject, commentItemIndex) => {
          return (
            <CommunityDetailCommentItem
              key={commentItemIndex}
              commentItemObject={commentItemObject}
            />
          );
        })}
      </div>
    </div>
  );
}

export default communityDetailCommentBox;
