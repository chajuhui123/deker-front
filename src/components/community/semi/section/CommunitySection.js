import React from "react";

import CommunityHeader from "./header/CommunityHeader";
import CommunityList from "./list/CommunityList";

const CommunitySection = (props) => {
  return (
    <section>
      <CommunityHeader type={props.type} />
      <CommunityList data={props.data} />
    </section>
  );
};

export default CommunitySection;
