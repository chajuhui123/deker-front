import React from "react";

function CommAlert(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.message}</p>
    </div>
  );
}

export default CommAlert;
