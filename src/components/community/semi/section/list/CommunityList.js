import React from "react";
import CommunityCard from "./card/CommunityCard";

const CommunityList = (props) => {
  return (
    <ul>
      {props.data &&
        props.data.map((data) => {
          return (
            <CommunityCard
              key={data.communityId}
              data={data}
              type={props.type}
            />
          );
        })}
    </ul>
  );
};

export default CommunityList;
