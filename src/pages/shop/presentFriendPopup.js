import { postApi } from "api/fetch-api";
import AccntList from "components/account/mypage/acctlist/accntList";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./presentFriendPopup.module.css";

function PresentFriendPopup(props) {
  const dispatch = useDispatch();
  const [presentAccntInput, setPresentAccntInput] = useState("");
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [list, setList] = useState(null);

  // 팔로우, 팔로잉 목록 받아오기
  const fnCallback = useCallback(
    res => {
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
      }
    },
    [currentPageNo, lastPage, list, totalCount]
  );

  // 팔로잉 목록을 Back에서 받아옴
  useEffect(() => {
    dispatch(
      postApi(
        "mb/cmm/get/following",
        { currentPageNo: 1, keyword: presentAccntInput },
        fnCallback
      )
    );
  }, [dispatch, fnCallback, presentAccntInput]);

  // 선물할 계정 검색
  const productLinkInputHandler = e => {
    setPresentAccntInput(e.target.value);
  };

  // 선물할 계정 back 통신해서 받아오기
  const productSearchHandler = () => {
    dispatch(
      postApi(
        "mb/cmm/get/following",
        { currentPageNo: 1, keyword: presentAccntInput },
        fnCallback
      )
    );
  };

  // 선물할 계정이 선택되면 해당 계정 결제페이지로 보내고 팝업 닫기
  const presentSelectHandler = data => {
    props.presentUserIdHandler(data);
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  // const DUMMY_DATA = [
  //   {
  //     id: 1,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
  //     nick_name: "april_.12",
  //     text: "instagram-april_.12",
  //     userId: "user1",
  //   },
  //   {
  //     id: 2,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
  //     nick_name: "Dazed_lily",
  //     text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
  //     userId: "user2",
  //   },
  //   {
  //     id: 3,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
  //     nick_name: "sshinsy(세영)",
  //     text: "Instagram @yayonine",
  //     userId: "user3",
  //   },
  //   {
  //     id: 4,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     nick_name: "주아주아홈",
  //     text: "화이트 아치 하우스 주아주아홈입니다.",
  //     userId: "user4",
  //   },
  //   {
  //     id: 1,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
  //     nick_name: "april_.12",
  //     text: "instagram-april_.12",
  //     userId: "user5",
  //   },
  //   {
  //     id: 2,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
  //     nick_name: "Dazed_lily",
  //     text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
  //     userId: "user6",
  //   },
  //   {
  //     id: 3,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
  //     nick_name: "sshinsy(세영)",
  //     text: "Instagram @yayonine",
  //     userId: "user7",
  //   },
  //   {
  //     id: 4,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     nick_name: "주아주아홈",
  //     text: "화이트 아치 하우스 주아주아홈입니다.",
  //     userId: "user8",
  //   },
  //   {
  //     id: 1,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
  //     nick_name: "april_.12",
  //     text: "instagram-april_.12",
  //     userId: "user9",
  //   },
  //   {
  //     id: 2,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
  //     nick_name: "Dazed_lily",
  //     text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
  //     userId: "user10",
  //   },
  //   {
  //     id: 3,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
  //     nick_name: "sshinsy(세영)",
  //     text: "Instagram @yayonine",
  //     userId: "user11",
  //   },
  //   {
  //     id: 4,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     nick_name: "주아주아홈",
  //     text: "화이트 아치 하우스 주아주아홈입니다.",
  //     userId: "user12",
  //   },
  //   {
  //     id: 1,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
  //     nick_name: "april_.12",
  //     text: "instagram-april_.12",
  //     userId: "user13",
  //   },
  //   {
  //     id: 2,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
  //     nick_name: "Dazed_lily",
  //     text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
  //     userId: "user14",
  //   },
  //   {
  //     id: 3,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
  //     nick_name: "sshinsy(세영)",
  //     text: "Instagram @yayonine",
  //     userId: "user15",
  //   },
  //   {
  //     id: 4,
  //     profile_img:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     nick_name: "주아주아홈",
  //     text: "화이트 아치 하우스 주아주아홈입니다.",
  //     userId: "user16",
  //   },
  // ];

  return (
    <div className={classes.productSalesLinkLayout}>
      <CommPageSemiTitle semiTitle="선물할 친구를 선택해주세요" />
      <div className={classes.presentMain}>
        <div className={classes.productSearchArea}>
          <input
            className={classes.productInput}
            type="text"
            value={presentAccntInput}
            placeholder="친구 검색"
            onChange={productLinkInputHandler}
          />
          <button
            className={classes.productSearchBtn}
            onClick={productSearchHandler}
          >
            검색
          </button>
        </div>
        <div className={classes.selectedProduct}>
          <AccntList
            accntLists={list}
            departure="present"
            presentSelectHandler={presentSelectHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default PresentFriendPopup;
