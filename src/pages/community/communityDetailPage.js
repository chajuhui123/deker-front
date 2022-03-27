import React, { useEffect, useState } from "react";
import CommunityDetailMainImg from "components/community/communityDetail/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";
import CommunityDetailTags from "components/community/communityDetail/communityDetailTags";
import CommunityDetailCommentBox from "components/community/communityDetail/communityDetailCommentBox";
import CommunityDetailLike from "components/community/communityDetail/communityDetailLike";
import CommunityDetailManagementPost from "components/community/communityDetail/communityDetailManagementPost";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";
import { useInView } from "react-intersection-observer";

const CommunityDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const [communityPostObj, setCommunityPostObj] = useState({});
  const [communitySelectedProductArr, setCommunitySelectedProductArr] =
    useState([]);
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

  useEffect(() => {
    const communityPostIdObj = { communityPostId: communityPostId };
    dispatch(
      postApi(
        "nmb/post/get/post-detail",
        communityPostIdObj,
        fnCommunityDetailCallback
      )
    );
  }, [dispatch, communityPostId]);

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "40px 0 20px 0",
        }}
      >
        <CommunityDetailLike communityPostId={communityPostId} />
        <CommunityDetailManagementPost communityPostId={communityPostId} />
      </div>
      <CommunityDetailCommentBox
        communityPostId={communityPostId}
        inView={inView}
      />
      <div
        style={{
          width: "100%",
          height: "10px",
        }}
        ref={ref}
      ></div>
    </div>
  );
};

export default CommunityDetailPage;
