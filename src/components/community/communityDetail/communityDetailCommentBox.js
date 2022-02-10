import React from "react";
import classes from "./communityDetailCommentBox.module.css";
import communityDetailCommentItem from "./communityDetailCommentItem";
import noUserImg from "img/noUserImg.png";

function communityDetailCommentBox() {
  return (
    <div className={classes.commentBoxDiv}>
      <div>
        댓글 <span>(1)</span>
      </div>

      <form className={classes.commentInputDiv}>
        <img className={classes.commentInputImg} src={noUserImg} alt="" />
        <input className={classes.commentInputBox} />
        <button className={classes.commentInputBtn}>등록</button>
      </form>

      <div>
        {/* {reviewsArr?.map((review, index) => {
          return <communityDetailCommentItem key={index} review={review} />;
        })} */}
      </div>
    </div>
  );
}

export default communityDetailCommentBox;
