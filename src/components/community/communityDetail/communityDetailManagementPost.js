import React from "react";
import classes from "./communityDetailManagementPost.module.css";
import CommAlert from "components/common/commAlert";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postApi } from "api/fetch-api";
import { modalAction } from "store/modal-slice";

function CommunityDetailManagementPost({ communityPostId }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const history = useHistory();
  const hadleCommunityPostUpdate = () => {
    history.push(`/community/mod/${communityPostId}`);
  };

  const handleDeletePost = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <CommAlert
            title=""
            message="게시물을 삭제하시겠습니까?"
            onClickHandler={postCommunityPostDelete}
          />
        ),
      })
    );
  };

  const fnDeletePostCallback = (res) => {
    if (!!res) {
      history.push("/");
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="오류" message="게시물 삭제에 실패하였습니다." />
          ),
        })
      );
    }
  };

  const postCommunityPostDelete = () => {
    dispatch(
      postApi(
        "/mb/post/rmv/post",
        { postId: communityPostId },
        fnDeletePostCallback
      )
    );
  };

  return (
    <div className={classes.managementDiv}>
      {isLoggedIn && <p onClick={hadleCommunityPostUpdate}>수정</p>}
      {isLoggedIn && <p onClick={handleDeletePost}>삭제</p>}
    </div>
  );
}

export default CommunityDetailManagementPost;
