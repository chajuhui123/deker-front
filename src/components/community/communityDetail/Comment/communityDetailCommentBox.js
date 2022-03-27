import React, { useEffect, useRef, useState } from "react";
import classes from "./communityDetailCommentBox.module.css";
import noUserImg from "img/noUserImg.png";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";
import CommunityDetailCommentItems from "./CommunityDetailCommentItems";

function CommunityDetailCommentBox({ communityPostId, inView }) {
  const dispatch = useDispatch();
  const commentInputRef = useRef();

  const [commentPageNum, setCommentPageNum] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const [isLastComment, setIsLastComment] = useState(false);

  const fnAddCommentCallback = (res) => {
    if (!!res) {
      setCommentList([]);
      setCommentPageNum(1);
      inView = false;
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="오류" message="댓글 작성에 실패하였습니다." />
          ),
        })
      );
    }
  };

  const handleAddComment = (event) => {
    event.preventDefault();
    const content = commentInputRef.current.value;
    if (content.length) {
      const commentPayload = {
        communityId: communityPostId,
        content,
      };
      dispatch(
        postApi("mb/post/reg/comments", commentPayload, fnAddCommentCallback)
      );
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: <CommAlert title="안내" message="댓글을 입력해주세요." />,
        })
      );
    }
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
        {/* TO DO : 작성자 프로필 img src */}
        <img className={classes.commentInputImg} src={noUserImg} alt="" />
        <input className={classes.commentInputBox} ref={commentInputRef} />
        <button className={classes.commentInputBtn} onClick={handleAddComment}>
          등록
        </button>
      </form>
      <CommunityDetailCommentItems commentList={commentList} />
    </div>
  );
}

export default CommunityDetailCommentBox;
