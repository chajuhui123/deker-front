import { postApi } from "api/fetch-api";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./CommunitySemiPage.module.css";
import CommunitySection from "./section/CommunitySection";
import { useInView } from "react-intersection-observer";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

// TODO : 좋아요나 팔로우 시 화면 재조회 부분 수정 해야함
// 현재는 전체 재조회 이지만 현재 보이는 영역만 재 조회해서 list에 replace 하는 방식으로 하면 될듯 함
// 1. 좋아요 누름
// 2. 현재 화면 위치 확인
// 3. 화면에 보여지는 게시글 번호 목록 생성
// 4. 게시글 목록만 재 조회
// 5. setState filter replace 함
const CommunitySemiPage = (props) => {
  const { params } = props.match;
  const type = params.type;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isReady = useSelector((state) => state.user.isReady);
  const [list, setList] = useState([]);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [isInit, setIsInit] = useState(true);
  const [ref, inView] = useInView();

  /* 팔로윙 */
  const followingHandler = (userId, followingCheck) => {
    const data = {
      userId,
    };
    const url = followingCheck ? "mb/cmm/rmv/follow" : "mb/cmm/reg/follow";
    dispatch(postApi(url, data, fnFollowCallback));
  };
  const fnFollowCallback = (res) => {
    console.log(`CommunitySemiPage :: res :: ${JSON.stringify(res)}`);
    if (!!res) {
      const pageNo = currentPageNo;
      setList([]);
      for (let i = 1; i <= pageNo; i++) {
        setCurrentPageNo(i);
      }
    }
  };

  /* 좋아요 */
  const fnLikeCallback = (res) => {
    console.log("fnLikeCallback :: res :: ", res);
    if (!!res) {
      const pageNo = currentPageNo;
      setList([]);
      for (let i = 1; i <= pageNo; i++) {
        setCurrentPageNo(i);
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

  /* 데이터 조회 */
  const fnGetContents = useCallback(() => {
    if (isReady) {
      const url = isLoggedIn ? "mb/post/get/more" : "nmb/post/get/more";
      const param = {
        type,
        currentPageNo,
      };
      dispatch(postApi(url, param, fnCallback));
    }
  }, [currentPageNo, dispatch, isLoggedIn, isReady, type]);
  const fnCallback = (res) => {
    console.log("CommunitySemiPage :: res :: ", res);
    if (!!res) {
      setList((prev) => [...prev, ...res?.data?.list]);
      setIsLastPage(res?.data?.lastPage);
      setIsInit(false);
    }
  };
  useEffect(() => {
    fnGetContents();
  }, [fnGetContents]);

  useEffect(() => {
    if (!isLastPage && inView) {
      setCurrentPageNo((prevState) => prevState + 1);
    }
  }, [inView, isLastPage]);

  return (
    <div className={classes.main}>
      <CommunitySection
        type={type}
        data={list}
        followingHandler={followingHandler}
        likeHandler={likeHandler}
      />
      {isInit || (
        <div
          style={{
            width: "100%",
            height: "10px",
          }}
          ref={ref}
        ></div>
      )}
    </div>
  );
};

export default CommunitySemiPage;
