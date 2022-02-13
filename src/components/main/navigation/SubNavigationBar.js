import React from "react";
import { Link } from "react-router-dom";
import classes from "./SubNavigationBar.module.css";
// import { rootMenu } from "api/rootMenu";

function SubNavigationBar({ navItem }) {
  // // 배열 형태로 받아옴
  const navItemList = navItem?.map((item) => {
    return <Link className={classes.navItem}>{item.menuName}</Link>;
  });
  console.log(navItem);
  return (
    <div className={classes.navDiv}>
      {navItemList}
      {/* <div className={classes.navItem}>아이템</div>
      <div className={classes.navItem}>아이템</div>
      <div className={classes.navItem}>아이템</div> */}
    </div>
  );
}

export default SubNavigationBar;
