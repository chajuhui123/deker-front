import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubNavigationBar.module.css";

function SubNavigationBar({ navItem }) {
  if (navItem === null) return null;

  const navItemList = navItem.map(item => {
    return (
      <Link to={item.menuUrl} className={classes.navItem}>
        {item.menuName}
      </Link>
    );
  });
  return <div className={classes.navDiv}>{navItemList}</div>;
}

export default SubNavigationBar;
