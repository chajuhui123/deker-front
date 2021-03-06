import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "store/user-slice";

function NavigationUserItem({ clickOnMenu }) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const logoutHandler = () => {
    dispatch(userAction.logout());
  };
  return (
    <>
      {!isLoggedIn && (
        <li className={classes.navItem}>
          <Link
            to="/account/signup"
            className={classes.navLink}
            onClick={clickOnMenu}
          >
            회원가입
          </Link>
        </li>
      )}
      {!isLoggedIn && (
        <li className={classes.navItem}>
          <Link
            to="/account/signin"
            className={classes.navLink}
            onClick={clickOnMenu}
          >
            로그인
          </Link>
        </li>
      )}
      {isLoggedIn && (
        <li className={classes.navItem}>
          <Link to="/account/mypage" className={classes.navLink}>
            회원프로필
          </Link>
        </li>
      )}
      {isLoggedIn && (
        <li className={classes.navItem}>
          <button onClick={logoutHandler} className={classes.navLink}>
            로그아웃
          </button>
        </li>
      )}
    </>
  );
}

export default NavigationUserItem;
