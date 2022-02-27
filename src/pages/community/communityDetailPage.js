import React, { useEffect, useState } from "react";
import CommunityDetailMainImg from "components/community/communityDetail/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";
import CommunityDetailTags from "components/community/communityDetail/communityDetailTags";
import CommunityDetailCommentBox from "components/community/communityDetail/communityDetailCommentBox";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

const CommunityDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const [communityPostObj, setCommunityPostObj] = useState({});
  const [communitySelectedProductArr, setCommunitySelectedProductArr] =
    useState([]);
  const [commentPageNum, setCommentPageNum] = useState(1);
  const [commentList, setCommentList] = useState([]);
  const { communityPostId } = match.params;

  const fnCommunityDetailCallback = (res) => {
    if (!!res) {
      const communityPostData = res?.data?.communityPost;
      setCommunityPostObj({
        postImg: communityPostData?.postImg,
        communityContent: communityPostData?.communityContent,
        jobCode: communityPostData?.jobCode,
        materialCode: communityPostData?.materialCode,
        moodCode: communityPostData?.moodCode,
        communityTags: communityPostData?.communityTags, //array
      });
      setCommunitySelectedProductArr(res?.data?.communityPostSelectedProduct); // Array
    }
  };

  const fnCommunityCommentCallback = (res) => {
    if (!!res) {
      setCommentList(res?.data?.list);
    }
  };

  useEffect(() => {
    const communityPostIdObj = { communityPostId: communityPostId };
    dispatch(
      postApi(
        "nmb/post/get/post-detail",
        communityPostIdObj,
        fnCommunityDetailCallback
      )
    );
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
    <div>
      <CommunityDetailMainImg
        communityPostObj={communityPostObj}
        communitySelectedProductArr={communitySelectedProductArr}
      />
      <CommunityDetailImgSlide
        communitySelectedProductArr={communitySelectedProductArr}
      />
      <CommunityDetailContent communityPostObj={communityPostObj} />
      <CommunityDetailTags
        communityTags={communityPostObj?.communityTags}
        jobCode={communityPostObj?.jobCode}
        materialCode={communityPostObj?.materialCode}
        moodCode={communityPostObj.moodCode}
      />
      {/* 좋아요 버튼 */}
      <CommunityDetailCommentBox commentList={commentList} /> {/* 댓글 */}
    </div>
  );
};

export default CommunityDetailPage;
