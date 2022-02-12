import React from "react";
import CommonPageTitle from "components/common/commPageTitle";

const CommunityHeader = (props) => {
  const type = props.type;
  return (
    <header>
      <CommonPageTitle
        title={
          type === "rank" ? "인기 사진" : type === "follow" ? "팔로윙" : "맞춤"
        }
      />
    </header>
  );
};

export default CommunityHeader;
