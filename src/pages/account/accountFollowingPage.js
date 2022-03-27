import CommonPageTitle from "components/common/commPageTitle";
import AccntList from "../../components/account/myPage/accntList";
import classes from "./accountFollowing.module.css";

import { useState } from "react";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

const AcctFllwngPage = (props) => {
  const { location } = props;

  const dispatch = useDispatch();
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [list, setList] = useState(null);
  /*
  // 팔로우, 팔로잉 목록 받아오기
  const fnCallback = (res) => {
    if (!!res) {
      setCurrentPageNo(res.data.currentPageNo);
      setTotalCount(res.data.totalCount);
      setLastPage(res.data.lastPage);
      setList(res.data.list);
      console.log("currentPageNo: " + currentPageNo);
      console.log("totalCount: " + totalCount);
      console.log("lastPage: " + lastPage);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  // 팔로잉 목록을 Back에서 받아옴
  if (location.state.follow === "following") {
    console.log("What Page: " + location.state.follow);
    dispatch(
      postApi("mb/post/get/following", { currentPageNo: 1 }, fnCallback)
    );
  } // 팔로워 목록을 Back에서 받아옴
  else if (location.state.follow === "follower") {
    console.log("What Page: " + location.state.follow);
    dispatch(postApi("mb/post/get/follower", { currentPageNo: 1 }, fnCallback));
  }
*/

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

  // 해당 계정을 팔로우 삭제하겠다.
  const isDeleteBtnHandler = (data) => {
    dispatch(postApi("", { userId: data }, fnIsSuccessCallback));
  };

  const DUMMY_DATA = [
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
      userId: "user1",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
      userId: "user2",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
      userId: "user3",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
      userId: "user4",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
      userId: "user5",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
      userId: "user6",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
      userId: "user7",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
      userId: "user8",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
      userId: "user9",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
      userId: "user10",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
      userId: "user11",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
      userId: "user12",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
      userId: "user13",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
      userId: "user14",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
      userId: "user15",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
      userId: "user16",
    },
  ];
  return (
    <div className={classes.layout}>
      <div className={classes.title}>
        {location.state.follow === "following" ? (
          <CommonPageTitle title="팔로잉" />
        ) : (
          <CommonPageTitle title="팔로워" />
        )}
      </div>
      {/* <AccntList accntLists={list} departure={location.state.follow} /> */}
      <AccntList
        accntLists={DUMMY_DATA}
        departure={location.state.follow}
        isUnFollowBtnHandler={isUnFollowBtnHandler}
        isDeleteBtnHandler={isDeleteBtnHandler}
      />
    </div>
  );
};

export default AcctFllwngPage;
