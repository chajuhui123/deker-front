import React from "react";
import classes from "./CommunityCard.module.css";
import noImg from "img/noImg.png";

const CommunityCard = (props) => {
  const data = props.data;
  return (
    <li>
      <div className={classes.mainCard}>
        <img alt="글첨부이미지" src={data.communityImage} />
        <div className={classes.commInfo}>
          <div className={classes.communityTitle}>
            {data.communityTitle.length > 5
              ? data.communityTitle.slice(0, 5).replace(" ", "") + "..."
              : data.communityTitle}
          </div>
          <div className={classes.userInfo}>
            <img alt="작성자프로필이미지" src={data.userProfileImg || noImg} />
            <p>
              {data.userNick.length > 5
                ? data.userNick.slice(0, 5).replace(" ", "") + "..."
                : data.userNick}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CommunityCard;
