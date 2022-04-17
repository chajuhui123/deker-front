import React from "react";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";

const CommunityHeader = (props) => {
  const type = props.type;
  return (
    <header>
      {props.page === "main" ? (
        <>
          <CommPageSemiTitle
            semiTitle={
              type === "photo"
                ? "오늘의 인기 사진"
                : type === "following"
                ? "팔로윙"
                : "맞춤"
            }
          />
          <a href={`community/${type}`}>더보기</a>
        </>
      ) : (
        <CommonPageTitle
          title={
            type === "photo"
              ? "오늘의 인기 사진"
              : type === "following"
              ? "팔로윙"
              : "맞춤"
          }
        />
      )}
    </header>
  );
};

export default CommunityHeader;
