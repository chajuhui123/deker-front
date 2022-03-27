import CreateCommunity from "components/community/write/CreateCommunity";
import React from "react";

function CreateCommunityPage(props) {
  return (
    <CreateCommunity communityPostId={props.match?.params?.communityPostId} />
  );
}

export default CreateCommunityPage;
