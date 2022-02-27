import React from "react";
import { useHistory } from "react-router";
import classes from "./communityDetailManagementPost.module.css";

function CommunityDetailManagementPost({ communityPostId }) {
  const history = useHistory();
  const hadleCommunityPostUpdate = () => {
    history.push(`/community/write/${communityPostId}`);
  };
  const hadleCommunityPostDelete = () => {
    alert("해당 게시물을 삭제하시겠습니까?");
  };
  return (
    <div className={classes.managementDiv}>
      <p onClick={hadleCommunityPostUpdate}>수정</p>
      <p onClick={hadleCommunityPostDelete}>삭제</p>
    </div>
  );
}

export default CommunityDetailManagementPost;
