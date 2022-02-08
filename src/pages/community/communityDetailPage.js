import React, { useState } from "react";
import classes from "./communityDetailPage.module.css";

const CommunityDetailPage = ({ match }) => {
  const { postId } = match.params;
  return (
    <div>
      <div className={classes.imgWrapper}>
        <img
          className={classes.mainImg}
          src="https://i.pinimg.com/originals/7d/be/38/7dbe3845b0527ef8078b301e5e3b6d27.jpg"
          alt=""
        />
        <div
          className={classes.locationIconWrapper}
          style={{ right: "10px", top: "0px" }}
        >
          <div
            className={classes.locationIcon}
            style={{ right: "10px", top: "0px" }}
          >
            +
          </div>
          <div
            className={classes.locationToolTip}
            style={{ right: "60px", top: "40px" }}
          >
            <img
              className={classes.toolTipImg}
              src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg"
              alt=""
            />
            <div className={classes.toolTipText}>
              <p>상품명</p>
              <p>1,000 원</p>
            </div>
          </div>
        </div>
        <div
          className={classes.locationIconWrapper}
          style={{ right: "60px", top: "40px" }}
        >
          <div
            className={classes.locationIcon}
            style={{ right: "60px", top: "40px" }}
          >
            +
          </div>
          <div
            className={classes.locationToolTip}
            style={{ right: "60px", top: "40px" }}
          >
            <img
              className={classes.toolTipImg}
              src="https://img1.daumcdn.net/thumb/R720x0/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fliveboard%2Fdailylife%2F50e606b8f8ff41628b4440ca2a0017ef.jpg"
              alt=""
            />
            <div className={classes.toolTipText}>
              <p>상품명</p>
              <p>1,000 원</p>
            </div>
          </div>
        </div>
      </div>
      <div>등록된 상품 정보 슬라이드</div>
      <div>글씨</div>
      <div>게시물 태그</div>
      <div>좋아요 버튼 및 댓글</div>
    </div>
  );
};

export default CommunityDetailPage;
