import React from "react";
import { Link } from "react-router-dom";
import classes from "./accountMyPage.module.css";

function AccountMyPage(props) {
  return (
    <form className={classes.accountMyPage_Layout}>
      <div className={classes.accountMyPage_Area}>
        <div className={classes.accountMyPage_Inner}>
          <p className={classes.accountMyPage_Title}>마이페이지</p>
          <hr className={classes.accountMyPage_lineD} />
          <div className={classes.accountMyPage_MainArea}>
            <div className={classes.accountMyPage_rowArea1}>
              <div className={classes.accountMyPage_ProfilePic} />
            </div>
            <div className={classes.accountMyPage_rowArea2}>
              <div className={classes.accountMyPage_rowArea3}>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  팔로잉
                </Link>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  팔로워
                </Link>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  알림
                </Link>
              </div>
              <Link to="/ModifyUserInfo">
                <button className={classes.accountMyPage_ModifyUserInfoBtn}>
                  정보 수정
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AccountMyPage;
