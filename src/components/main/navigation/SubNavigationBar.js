import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubNavigationBar.module.css";
// import { rootMenu } from "api/rootMenu";

function SubNavigationBar(navItem) {
  // 배열 형태로 받아옴
  const navItemList = navItem.map((item) => {
    return <Link className={classes.navItem}>{item}</Link>;
  });
  return <nav className={classes.nav}>{navItemList}</nav>;
}

export default SubNavigationBar;
