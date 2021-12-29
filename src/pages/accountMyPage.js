import React from "react";
import { Link } from "react-router-dom";
import "./accountMyPage.module.css";

function AccountMyPage(props) {
  return (
    <form className="accountMyPage_Layout">
      <div className="accountMyPage_Area">
        <div className="accountMyPage_Inner">
          <p className="accountMyPage_Title">마이페이지</p>
          <hr className="accountMyPage_lineD" />
          <div className="accountMyPage_MainArea">
            <div className="accountMyPage_rowArea1">
              <div className="accountMyPage_ProfilePic" />
            </div>
            <div className="accountMyPage_rowArea2">
              <div className="accountMyPage_rowArea3">
                <Link to="/" className="accountMyPage_LinkTo">
                  팔로잉
                </Link>
                <Link to="/" className="accountMyPage_LinkTo">
                  팔로워
                </Link>
                <Link to="/" className="accountMyPage_LinkTo">
                  알림
                </Link>
              </div>
              <Link to="/ModifyUserInfo">
                <button className="accountMyPage_ModifyUserInfoBtn">
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
