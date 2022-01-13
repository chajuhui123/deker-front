import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubNavigationBar.module.css";
import { rootMenu } from "api/rootMenu";

function SubNavigationBar() {
  return (
    <nav className={classes.nav}>
      <p className={classes.navItem}>ㅎㅇ</p>
      <p className={classes.navItem}>ㅂㅇ</p>
      <p></p>
    </nav>
  );
}

export default SubNavigationBar;
