import React from "react";
import classes from "./MoreMenuToolTip.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "store/user-slice";

function MoreMenuToolTip() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("extTokenTime");
    dispatch(userAction.logout());
  };
  return (
    <div className={classes.moreMenuToolTip}>
      <Link to="/mypage">마이페이지</Link>
      <Link to="/community/write">글쓰기</Link>
      <Link to="/myShopping">나의 쇼핑</Link>
      <Link to="/myPresent">나의 선물함</Link>
      <Link to="/myReview">나의 리뷰</Link>
      <Link to="/mypage/modify">회원정보수정</Link>
      <Link to="/modifyPassword">비밀번호수정</Link>
      <p onClick={handleLogout}>로그아웃</p>
    </div>
  );
}

export default MoreMenuToolTip;
