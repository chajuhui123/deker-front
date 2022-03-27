import React from "react";
import classes from "./communityDetailMainImg.module.css";
import CommunityDetailLocationIcon from "./communityDetailLocationIcon";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";

function CommunityDetailMainImg({
  communityPostObj,
  communitySelectedProductArr,
}) {
  const { postImg } = communityPostObj;
  console.log("communityPostObj!!!!!!!!!!!", communityPostObj);

  return (
    <div className={classes.imgWrapper}>
      <img
        className={classes.mainImg}
        src={`${BASE_URL}${postImg}` || noImg}
        alt="커뮤니티 게시글 이미지"
      />
      {communitySelectedProductArr?.map(
        (selectedProductObj, selectedProductIndex) => (
          <div key={selectedProductIndex} className={classes.locationIconDiv}>
            <CommunityDetailLocationIcon
              selectedProductObj={selectedProductObj}
              top={selectedProductObj?.offsetX}
              left={selectedProductObj?.offsetY}
            />
          </div>
        )
      )}
    </div>
  );
}

export default CommunityDetailMainImg;
