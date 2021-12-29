// import React, { useState } from "react";
import React from "react";
import JobDropdown from "../components/common/jobDropdown";
import UserTagForm from "../components/common/userTagForm";
import classes from "./modifyUserInfo.module.css";

function ModifyUserInfo(props) {
  // const [profilePic, setProfilePic] = useState("");

  // const uploadProfilePicHandler = (pic) => {
  //   setProfilePic(pic);
  // };

  const submit = (accountType) => {};

  const signupAdditionalSubmitHandler = (e) => {
    e.preventDefault();
    submit();
  };

  //<ProfilePicBtn onClick={uploadProfilePicHandler} />
  // 건너뛰기 일단 home으로 가게 함
  return (
    <form
      className={classes.modifyUserInfo}
      onSubmit={signupAdditionalSubmitHandler}
    >
      <div className={classes.modifyUserInfo}>
        <p className={classes.modifyUserInfoTitle}>회원정보 변경</p>
        <div className={classes.modifyUserInfoInner}>
          <div className={classes.modifyUserInfoArea}>
            <div className={classes.modifyUserInfo_row1}>
              <p className={classes.userInfoTitle}>프로필 사진</p>
              <div className={classes.modifyUserInfo_profilePic}></div>
              <p className={classes.userInfoTitle}>이메일</p>
              <p className={classes.modifyUserInfoEmail}>email@email.com</p>
            </div>
            <div className={classes.modifyUserInfo_row2}>
              <p className={classes.userInfoTitle}>직군</p>
              <JobDropdown />
              <p className={classes.userInfoTitle}>태그</p>
              <UserTagForm />
            </div>
          </div>
          <div className={classes.modifyUserInfoBtn}>
            <button className={classes.modifyUserInfoCmpltBtn} type="submit">
              변경
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModifyUserInfo;
