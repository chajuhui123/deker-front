import React from "react";

function RestrictRoute({
  isLoggedIn,
  component: Component,
  fallback: Fallback,
}) {
  return <div>{!!isLoggedIn ? <Fallback /> : <Component />}</div>;
}
export default RestrictRoute;
