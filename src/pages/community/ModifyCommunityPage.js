import ModifyCommunity from "components/community/modify/ModifyCommunity";
import React from "react";

function ModifyCommunityPage(props) {
  return (
    <ModifyCommunity communityPostId={props.match?.params?.communityPostId} />
  );
}

export default ModifyCommunityPage;
