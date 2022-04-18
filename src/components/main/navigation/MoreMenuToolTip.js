import React from "react";
import classes from "./MoreMenuToolTip.module.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAction } from "store/user-slice";

function MoreMenuToolTip({ handleMoreMenu }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("extTokenTime");
    dispatch(userAction.logout());
    handleMoreMenu();
    history.push("/");
  };

  return (
    <div className={classes.moreMenuToolTip}>
      <Link to="/mypage" onClick={handleMoreMenu}>
        마이페이지
      </Link>
      {/* <Link to="/community/write">글쓰기</Link> */}
      <Link to="/myShopping" onClick={handleMoreMenu}>
        나의 쇼핑
      </Link>
      {/* <Link to="/myPresent">나의 선물함</Link> */}
      <Link to="/myReview" onClick={handleMoreMenu}>
        나의 리뷰
      </Link>
      <Link to="/mypage/modify" onClick={handleMoreMenu}>
        회원정보수정
      </Link>
      <Link to="/modifyPassword" onClick={handleMoreMenu}>
        비밀번호수정
      </Link>
      <p onClick={handleLogout}>로그아웃</p>
    </div>
  );
}

export default MoreMenuToolTip;
