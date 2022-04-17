import classes from "./CommunityMain.module.css";
import CommunitySection from "../semi/section/CommunitySection";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "api/fetch-api";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

const CommunityMain = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const [ranks, setRanks] = useState([]);
  const [follow, setFollow] = useState([]);
  const [custom, setCustom] = useState([]);

  /* 팔로우 */
  const followingHandler = (userId, followingCheck) => {
    const data = {
      userId,
    };
    const url = followingCheck ? "mb/cmm/rmv/follow" : "mb/cmm/reg/follow";
    dispatch(postApi(url, data, fnFollowCallback));
  };
  const fnFollowCallback = (res) => {
    console.log(`CommunityMain :: res :: ${JSON.stringify(res)}`);
    fnGetContents();
  };

  /* 좋아요 */
  const fnLikeCallback = (res) => {
    console.log("fnLikeCallback :: res :: ", res);
    if (!!res) {
      if (res.responseCode === "200") {
        fnGetContents();
      }
    }
  };
  const likeHandler = (communityId, isLiked) => {
    if (isLoggedIn) {
      const param = {
        communityId,
      };
      const url = isLiked ? "mb/post/rmv/post-like" : "mb/post/reg/post-like";
      dispatch(postApi(url, param, fnLikeCallback));
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
  const fnCloseModal = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  const fnGetContents = useCallback(() => {
    let url = isLoggedIn ? "mb/post/get" : "nmb/post/get";
    dispatch(postApi(url, null, fnCallback));
  }, [dispatch, isLoggedIn]);
  const fnCallback = (res) => {
    console.log("CommunityMain :: fnCallback :: res :: ", res);
    if (!!res) {
      setRanks(res.data.ranks);
      setFollow(res.data.follow);
      setCustom(res.data.custom);
    }
  };
  useEffect(() => {
    fnGetContents();
  }, [fnGetContents]);

  return (
    <div className={classes.main}>
      <CommunitySection
        type="photo"
        page="main"
        data={ranks}
        followingHandler={followingHandler}
        likeHandler={likeHandler}
      />
      {isLoggedIn && (
        <CommunitySection
          type="following"
          page="main"
          data={follow}
          followingHandler={followingHandler}
        />
      )}
      {isLoggedIn && (
        <CommunitySection
          type="personal"
          page="main"
          data={custom}
          followingHandler={followingHandler}
        />
      )}
    </div>
  );
};

export default CommunityMain;
