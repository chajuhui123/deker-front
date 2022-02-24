import React from "react";
import classes from "./communityDetailImgSlide.module.css";
import { BASE_URL } from "module/common-module";
import { useHistory } from "react-router";

function CommunityDetailImgSlide({ communitySelectedProductArr }) {
  const history = useHistory();
  const imgArrayComponent = communitySelectedProductArr?.map((productItem) => {
    return (
      <img
        className={classes.slideImg}
        src={`${BASE_URL}${productItem.productImgUrl}`}
        alt="상품이미지"
        onClick={() => {
          history.push(`/market/detail/${productItem.productId}`);
        }}
      />
    );
  });
  return <div className={classes.slideDiv}>{imgArrayComponent}</div>;
}

export default CommunityDetailImgSlide;
