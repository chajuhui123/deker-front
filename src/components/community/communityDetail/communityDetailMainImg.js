import React from "react";
import classes from "./communityDetailMainImg.module.css";
import CommunityDetailLocationIcon from "./communityDetailLocationIcon";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";

function CommunityDetailMainImg({
  communityPostObj,
  communitySelectedProductArr,
}) {
  const {
    postImg,
    // jobCode,
    // materialCode,
    // moodCode,
    // communityTags,
  } = communityPostObj;

  console.log(postImg);
  return (
    <div className={classes.imgWrapper}>
      <img
        className={classes.mainImg}
        src={`${BASE_URL}/${postImg}` || noImg}
        alt="커뮤니티 게시글 이미지"
      />
      {communitySelectedProductArr?.map((selectedProduct) => (
        <div className={classes.locationIconDiv}>
          <CommunityDetailLocationIcon
            top={selectedProduct?.offsetX}
            left={selectedProduct?.offsetY}
          />
        </div>
      ))}
    </div>
  );
}

export default CommunityDetailMainImg;
