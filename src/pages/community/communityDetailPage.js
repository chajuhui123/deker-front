import React, { useEffect, useState } from "react";
// import classes from "./communityDetailPage.module.css";
import CommunityDetailMainImg from "components/community/communityDetail/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";
import CommunityDetailCommentBox from "components/community/communityDetail/communityDetailCommentBox";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

const CommunityDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const [communityPostObj, setCommunityPostObj] = useState({});
  const [communitySelectedProductArr, setCommunitySelectedProductArr] =
    useState([]);
  const { communityPostId } = match.params;

  const fnCommunityDetailCallback = (res) => {
    if (!!res) {
      setCommunityPostObj({
        postImg: res?.postImg,
        communityContent: res?.communityContent,
        jobCode: res?.jobCode,
        materialCode: res?.materialCode,
        moodCode: res?.moodCode,
        communityTags: res?.communityTags, //array
      });
      setCommunitySelectedProductArr(res?.communityPostSelectedProduct); // Array
    }
  };

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/post-detail",
        { communityPostId: communityPostId },
        fnCommunityDetailCallback
      )
    );
  }, [communityPostId, dispatch]);

  console.log(communityPostObj);
  console.log(communitySelectedProductArr);

  return (
    <div>
      <CommunityDetailMainImg
        communityPostObj={communityPostObj}
        communitySelectedProductArr={communitySelectedProductArr}
      />
      <CommunityDetailImgSlide />
      <CommunityDetailContent />
      {/* 게시물 태그 */}
      {/* 좋아요 버튼 */}
      <CommunityDetailCommentBox /> {/* 댓글 */}
    </div>
  );
};

export default CommunityDetailPage;
