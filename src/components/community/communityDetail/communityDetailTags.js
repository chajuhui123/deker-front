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
      {jobCode && <p className={classes.tagItem}>#{jobCode}</p>}
      {materialCode && <p className={classes.tagItem}>#{materialCode}</p>}
      {moodCode && <p className={classes.tagItem}>#{moodCode}</p>}
    </div>
  );
}

export default CommunityDetailTags;
