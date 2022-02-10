import React, { useState } from "react";
import classes from "./communityDetailPage.module.css";
import CommunityDetailMainImg from "components/community/communityDetail/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";
import CommunityDetailCommentBox from "components/community/communityDetail/communityDetailCommentBox";

const CommunityDetailPage = ({ match }) => {
  const { postId } = match.params;
  return (
    <div>
      <CommunityDetailMainImg />
      <CommunityDetailImgSlide />
      <CommunityDetailContent />
      {/* 게시물 태그 */}
      {/* 좋아요 버튼 */}
      <CommunityDetailCommentBox /> {/* 댓글 */}
    </div>
  );
};

export default CommunityDetailPage;
