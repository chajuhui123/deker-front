import React, { useState } from "react";
import classes from "./communityDetailPage.module.css";
import CommunityDetailMainImg from "components/community/communityDetail/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";

const CommunityDetailPage = ({ match }) => {
  const { postId } = match.params;
  return (
    <div>
      <CommunityDetailMainImg />
      <CommunityDetailImgSlide />
      <CommunityDetailContent />
      <div>게시물 태그</div>
      <div>좋아요 버튼 및 댓글</div>
    </div>
  );
};

export default CommunityDetailPage;
