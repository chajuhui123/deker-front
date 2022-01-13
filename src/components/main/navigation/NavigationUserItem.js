import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";
import { MdShoppingBasket } from "react-icons/md";
import logoImg from "img/logo.png";
import { rootMenu } from "api/rootMenu";
import SubNavigationBar from "./SubNavigationBar";

function NavigationUserItem({ clickOnMenu }) {
  return (
    <>
      {/* 추후, 로그인 정보 불러와서 조건 걸 예정 */}
      <li className={classes.navItem}>
        <Link to="/signup" className={classes.navLink} onClick={clickOnMenu}>
          회원가입
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link to="/signin" className={classes.navLink} onClick={clickOnMenu}>
          로그인
        </Link>
      </li>
      <li className={classes.navItem}>
        <Link to="/" className={classes.navLink}>
          회원프로필
        </Link>
      </li>
    </>
  );
}

export default NavigationUserItem;
