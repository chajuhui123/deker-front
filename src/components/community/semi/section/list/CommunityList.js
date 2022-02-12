import React from "react";
import CommunityCard from "./card/CommunityCard";

const CommunityList = (props) => {
  return (
    <ul>
      {props.data &&
        props.data.map((data) => {
          return <CommunityCard data={data} key={data.communityId} />;
        })}
    </ul>
  );
};

export default CommunityList;
