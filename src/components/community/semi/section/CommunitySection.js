import React from "react";

import CommunityHeader from "./header/CommunityHeader";
import CommunityList from "./list/CommunityList";

const CommunitySection = (props) => {
  return (
    <section>
      <CommunityHeader type={props.type} page={props.page} />
      <CommunityList
        data={props.data}
        type={props.type}
        followingHandler={props.followingHandler}
      />
    </section>
  );
};

export default CommunitySection;
