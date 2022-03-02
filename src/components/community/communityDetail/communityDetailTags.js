import React from "react";
import classes from "./communityDetailTags.module.css";

function CommunityDetailTags({
  communityTags,
  jobCode,
  materialCode,
  moodCode,
}) {
  const communityTagsComponent = communityTags?.map((tagItem, tagItemIndex) => {
    return (
      <p className={classes.tagItem} key={tagItemIndex}>
        #{tagItem}
      </p>
    );
  });
  return (
    <div className={classes.tagsDiv}>
      {communityTagsComponent}
      <p className={classes.tagItem}>#{jobCode}</p>
      <p className={classes.tagItem}>#{materialCode}</p>
      <p className={classes.tagItem}>#{moodCode}</p>
    </div>
  );
}

export default CommunityDetailTags;
