import React from "react";
import classes from "./communityDetailCommentBox.module.css";
import CommunityDetailCommentItem from "./communityDetailCommentItem";
import noUserImg from "img/noUserImg.png";

function communityDetailCommentBox() {
  //  Comment정렬은 최신순
  const commentObject = {
    communityPostingId: 1,
    totalCommentCount: 3,
    commentList: [
      {
        commentUpdateYmdt: "22-02-03",
        writerId: "id123",
        writerProfileImgUrl: "",
        content: "댓글 예시입니다.",
      },
      {
        commentUpdateYmdt: "22-02-02",
        writerId: "id123",
        writerProfileImgUrl: "",
        content: "댓글 예시입니다.",
      },
      {
        commentUpdateYmdt: "22-02-01",
        writerId: "id123",
        writerProfileImgUrl: "",
        content: "댓글 예시입니다.",
      },
    ],
  };

  return (
    <div className={classes.commentBoxDiv}>
      <div className={classes.commentSummaryDiv}>
        댓글{" "}
        <span className={classes.commentCount}>
          ({commentObject.totalCommentCount})
        </span>
      </div>
      <form className={classes.commentInputDiv}>
        {/* 작성자 프로필 img src */}
        <img className={classes.commentInputImg} src={noUserImg} alt="" />
        <input className={classes.commentInputBox} />
        <button className={classes.commentInputBtn}>등록</button>
      </form>

      <div>
        {commentObject?.commentList?.map(
          (commentItemObject, commentItemIndex) => {
            return (
              <CommunityDetailCommentItem
                key={commentItemIndex}
                commentItemObject={commentItemObject}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export default communityDetailCommentBox;
