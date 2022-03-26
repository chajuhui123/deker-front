import AccntList from "components/account/myPage/accntList";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./presentFriendPopup.module.css";

function PresentFriendPopup(props) {
  const [productLinkInputText, setProductLinkInputText] = useState("");
  const dispatch = useDispatch();

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  // back 통신해서 받아오기
  const productSearchHandler = () => {
    // back 통신해서 받아오기
  };

  const presentSelectHandler = (data) => {
    // props.presentUserIdHandler(data);
    dispatch(modalAction.modalPopup({ isOpen: false }));
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
    <div className={classes.productSalesLinkLayout}>
      <CommPageSemiTitle semiTitle="선물할 친구를 선택해주세요" />
      <div className={classes.presentMain}>
        <div className={classes.productSearchArea}>
          <input
            className={classes.productInput}
            type="text"
            value={productLinkInputText}
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
            accntLists={DUMMY_DATA}
            departure="present"
            presentSelectHandler={presentSelectHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default PresentFriendPopup;
