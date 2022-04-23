import React, { useEffect, useState } from "react";
import classes from "./communityDetailPage.module.css";
import CommunityDetailMainImg from "components/community/communityDetail/MainImg/communityDetailMainImg";
import CommunityDetailImgSlide from "components/community/communityDetail/Slide/communityDetailImgSlide";
import CommunityDetailContent from "components/community/communityDetail/communityDetailContent";
import CommunityDetailTags from "components/community/communityDetail/communityDetailTags";
import CommunityDetailCommentBox from "components/community/communityDetail/Comment/communityDetailCommentBox";
import CommunityDetailLike from "components/community/communityDetail/communityDetailLike";
import CommunityDetailManagementPost from "components/community/communityDetail/communityDetailManagementPost";
import { postApi } from "api/fetch-api";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

const CommunityDetailPage = ({ match }) => {
  const dispatch = useDispatch();
  const [ref, inView] = useInView();
  const [communityPostObj, setCommunityPostObj] = useState({});
  const [communitySelectedProductArr, setCommunitySelectedProductArr] =
    useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [postLikeCnt, setPostLikeCnt] = useState(0);
  const { communityPostId } = match.params;

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

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
        communityPostIsUserWrtitten: res?.data?.communityPostIsUserWrtitten,
      });
      setIsLiked(communityPostData?.liked);
      setPostLikeCnt(communityPostData?.communityPostLikeCount);
      setCommunitySelectedProductArr(res?.data?.communityPostSelectedProduct); // Array
    }
  };

  const fnCloseModal = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  const fnLikeCallback = (res) => {
    if (res?.responseCode === "200") {
      res.message.includes("취소")
        ? setPostLikeCnt((prev) => prev - 1)
        : setPostLikeCnt((prev) => prev + 1);
      setIsLiked((prevLike) => !prevLike);
    }
  };

  const handleLike = () => {
    if (isLoggedIn) {
      const postParam = isLiked ? "rmv" : "reg";
      const ApiUrl = `mb/post/${postParam}/post-like`;
      dispatch(
        postApi(ApiUrl, { communityId: communityPostId }, fnLikeCallback)
      );
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert
              title="안내"
              message="로그인이 필요한 서비스입니다."
              fnClick={fnCloseModal}
            />
          ),
        })
      );
    }
  };

  useEffect(() => {
    const communityPostIdObj = { communityPostId: communityPostId };
    const isMember = isLoggedIn ? "mb" : "nmb";
    const apiURL = `${isMember}/post/get/post-detail`;
    dispatch(postApi(apiURL, communityPostIdObj, fnCommunityDetailCallback));
  }, [dispatch, communityPostId, isLoggedIn]);

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
      <div className={classes.managementDiv}>
        <CommunityDetailLike
          communityPostId={communityPostId}
          isLiked={isLiked}
          postLikeCnt={postLikeCnt}
          handleLike={handleLike}
        />
        {communityPostObj?.communityPostIsUserWrtitten && (
          <CommunityDetailManagementPost communityPostId={communityPostId} />
        )}
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
