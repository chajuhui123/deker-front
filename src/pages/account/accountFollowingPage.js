import CommonPageTitle from "components/common/commPageTitle";
import AccntList from "../../components/account/myPage/accntList";
import classes from "./accountFollowing.module.css";

import { useCallback, useEffect, useState } from "react";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

const AcctFllwngPage = (props) => {
  const { location } = props;

  const dispatch = useDispatch();
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [list, setList] = useState(null);

  // 팔로우, 팔로잉 목록 받아오기
  const fnCallback = useCallback(
    (res) => {
      if (!!res) {
        setCurrentPageNo(res.data.currentPageNo);
        setTotalCount(res.data.totalCount);
        setLastPage(res.data.lastPage);
        setList(res.data.list);
        console.log("currentPageNo: " + currentPageNo);
        console.log("totalCount: " + totalCount);
        console.log("lastPage: " + lastPage);
        console.log(list);
      } else {
        // 비정상로직;
        alert("data error");
      }
    },
    [currentPageNo, lastPage, list, totalCount]
  );

  useEffect(() => {
    // 팔로잉 목록을 Back에서 받아옴
    if (location.state.follow === "following") {
      console.log("What Page: " + location.state.follow);
      dispatch(
        postApi("mb/cmm/get/following", { currentPageNo: 1 }, fnCallback)
      );
    }
    // 팔로워 목록을 Back에서 받아옴
    else if (location.state.follow === "follower") {
      console.log("What Page: " + location.state.follow);
      dispatch(
        postApi("mb/cmm/get/follower", { currentPageNo: 1 }, fnCallback)
      );
    }
  }, [dispatch, fnCallback, location.state.follow]);

  // 팔로우, 언팔로우
  const fnIsSuccessCallback = (res) => {
    console.log(`isFollow or isDelete :: res :: ${JSON.stringify(res)}`);
  };

  const isUnFollowBtnHandler = (data) => {
    // 해당 계정을 팔로우 하겠다 (true)
    if (!data.isFollowing) {
      console.log("This is follow");
      dispatch(
        postApi(
          "mb/cmm/reg/follow",
          { userId: data.userId },
          fnIsSuccessCallback
        )
      );
    }
    // 해당 계정을 언팔로우 하겠다 (false)
    else {
      console.log("This is unfollow");
      dispatch(
        postApi(
          "mb/cmm/rmv/follow",
          { userId: data.userId },
          fnIsSuccessCallback
        )
      );
    }
  };

  const fnIsSuccessDeleteCallback = (res) => {
    if (!!res) {
      console.log(`isFollow or isDelete :: res :: ${JSON.stringify(res)}`);
    } else {
      //비정상
    }
  };

  // 해당 계정을 팔로우 삭제하겠다.
  const isDeleteBtnHandler = (data) => {
    dispatch(
      postApi(
        "mb/cmm/rmv/follow-me",
        { userId: data },
        fnIsSuccessDeleteCallback
      )
    );
  };

  return (
    <div className={classes.layout}>
      <div className={classes.title}>
        {location.state.follow === "following" ? (
          <CommonPageTitle title="팔로잉" />
        ) : (
          <CommonPageTitle title="팔로워" />
        )}
      </div>
      <AccntList
        accntLists={list}
        departure={location.state.follow}
        isUnFollowBtnHandler={isUnFollowBtnHandler}
        isDeleteBtnHandler={isDeleteBtnHandler}
      />
    </div>
  );
};

export default AcctFllwngPage;
