import React from "react";
import classes from "./communityDetailContent.module.css";

function CommunityDetailContent({ communityPostObj }) {
  const { communityContent } = communityPostObj;
  return <div className={classes.contentDiv}>{communityContent}</div>;
}

export default CommunityDetailContent;
