import React from "react";
import CommunityDetailCommentItem from "./communityDetailCommentItem";

function CommunityDetailCommentItems({ commentList }) {
  return (
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
  );
}

export default CommunityDetailCommentItems;
