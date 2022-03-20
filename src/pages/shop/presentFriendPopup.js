import AccntList from "components/account/myPage/accntList";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import React, { useState } from "react";
import classes from "./presentFriendPopup.module.css";

function PresentFriendPopup(props) {
  const [productLinkInputText, setProductLinkInputText] = useState("");

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  // back 통신해서 받아오기
  const productSearchHandler = () => {
    // back 통신해서 받아오기
  };

  const DUMMY_DATA = [
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
    },
    {
      id: 1,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164698562600101440.jpeg?gif=1&w=1280",
      nick_name: "april_.12",
      text: "instagram-april_.12",
    },
    {
      id: 2,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/164517258818757910.jpg?gif=1&w=480&h=320&c=c",
      nick_name: "Dazed_lily",
      text: "나만의 작업실에서 좋아하는 것들을 만들고 있습니다.",
    },
    {
      id: 3,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/snapshots/164760255716751290.jpeg?gif=1&w=1280",
      nick_name: "sshinsy(세영)",
      text: "Instagram @yayonine",
    },
    {
      id: 4,
      profile_img:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      nick_name: "주아주아홈",
      text: "화이트 아치 하우스 주아주아홈입니다.",
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
          <AccntList accntLists={DUMMY_DATA} departure="present" />
        </div>
      </div>
    </div>
  );
}

export default PresentFriendPopup;
