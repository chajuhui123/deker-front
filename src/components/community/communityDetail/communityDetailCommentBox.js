import React, { useEffect, useState } from "react";
import classes from "./communityDetailCommentBox.module.css";
import CommunityDetailCommentItem from "./communityDetailCommentItem";
import noUserImg from "img/noUserImg.png";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

function CommunityDetailCommentBox({ communityPostId, inView }) {
  const dispatch = useDispatch();

  const [commentPageNum, setCommentPageNum] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const [isLastComment, setIsLastComment] = useState(false);

  const handleAddComment = () => {
    console.log("추가 ");
  };

  const fnCommunityCommentCallback = (res) => {
    if (!!res) {
      setCommentList((prevList) => [...prevList, ...res?.data?.list]);
      setIsLastComment(res?.data?.lastPage);
    }
  };

  useEffect(() => {
    if (!isLastComment && inView) {
      setCommentPageNum((prevState) => prevState + 1);
    }
  }, [inView, isLastComment]);

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/post/comments",
        {
          currentPageNo: commentPageNum,
          communityId: communityPostId,
        },
        fnCommunityCommentCallback
      )
    );
  }, [dispatch, communityPostId, commentPageNum]);

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
        <button className={classes.commentInputBtn} onClick={handleAddComment}>
          등록
        </button>
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

export default CommunityDetailCommentBox;
