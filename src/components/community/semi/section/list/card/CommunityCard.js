import React from "react";
import classes from "./CommunityCard.module.css";
import noImg from "img/noImg.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { BASE_URL } from "module/common-module";
import { useSelector } from "react-redux";

const CommunityCard = (props) => {
  const data = props.data;
  const history = useHistory();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const detailPageHandler = () => {
    const url = "/community/detail/" + data.communityId;
    history.push(url);
  };
  const followHandler = () => {
    props.followingHandler(data.userId, data.followingCheck);
  };
  const likeHandler = () => {
    props.likeHandler(data.communityId, data.liked);
  };

  return (
    <li>
      <div className={classes.mainCard}>
        <img
          alt=""
          src={`${BASE_URL}${data.communityImage}`}
          onClick={detailPageHandler}
        />
        <div className={classes.commInfo}>
          <div className={classes.communityTitle}>
            {data.communityTitle && data.communityTitle.length > 8
              ? data.communityTitle.slice(0, 6).replace(" ", "") + "..."
              : data.communityTitle}
          </div>
          <div className={classes.userInfo}>
            <img alt="" src={`${BASE_URL}${data.userProfileImg}` || noImg} />
            <p>
              {data.userNick.length > 4
                ? data.userNick.slice(0, 4).replace(" ", "") + "..."
                : data.userNick}
            </p>
            {isLoggedIn &&
              (!data.followingCheck ? (
                <div className={classes.followButton} onClick={followHandler}>
                  팔로우
                </div>
              ) : (
                <div className={classes.unFollowButton} onClick={followHandler}>
                  팔로윙
                </div>
              ))}
          </div>
        </div>
      </div>
      {props.type === "rank" && (
        <aside className={classes.likeArea}>
          <button type="button" onClick={likeHandler}>
            {data.liked ? (
              <svg
                className={classes.liked}
                width="24"
                height="24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
              </svg>
            ) : (
              <svg
                className={classes.notliked}
                width="24"
                height="24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                preserveAspectRatio="xMidYMid meet"
              >
                <path d="M23.22 7.95c.4 4.94-2.92 9.71-10.92 13.85a.47.47 0 0 1-.42 0C3.88 17.66.56 12.9.96 7.93 1.54 2.48 8.28.3 12.1 4.7c3.8-4.4 10.55-2.22 11.13 3.25z"></path>
              </svg>
            )}

            <span>{data.likeCount}</span>
          </button>
          <button type="button">
            <svg
              className={classes.commend}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M13.665 18.434l.53-.066C19.69 17.679 23 14.348 23 10c0-4.942-4.235-8.5-11-8.5S1 5.058 1 10c0 4.348 3.31 7.68 8.804 8.368l.531.066L12 21.764l1.665-3.33zm-3.985.926C3.493 18.585 0 14.69 0 10 0 4.753 4.373.5 12 .5S24 4.753 24 10c0 4.69-3.493 8.585-9.68 9.36l-1.647 3.293c-.374.75-.974.744-1.346 0L9.68 19.36z"
              ></path>
            </svg>
            <span>{data.commentCount}</span>
          </button>
        </aside>
      )}
    </li>
  );
};

export default CommunityCard;
