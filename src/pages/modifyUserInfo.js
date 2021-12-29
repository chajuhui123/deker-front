// import React, { useState } from "react";
import React from "react";
import JobDropdown from "../components/common/jobDropdown";
import MoodDropdown from "../components/common/moodDropdown";
import UserTagForm from "../components/common/userTagForm";
import "./modifyUserInfo.module.css";

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
    <form className="modifyUserInfo" onSubmit={signupAdditionalSubmitHandler}>
      <div className="modifyUserInfo">
        <p className="modifyUserInfoTitle">회원정보 변경</p>
        <div className="modifyUserInfoInner">
          <div className="modifyUserInfoArea">
            <div className="modifyUserInfo_row1">
              <p className="userInfoTitle">프로필 사진</p>
              <div className="modifyUserInfo_profilePic"></div>
              <p className="userInfoTitle">이메일</p>
              <p className="modifyUserInfoEmail">email@email.com</p>
            </div>
            <div className="modifyUserInfo_row2">
              <p className="userInfoTitle">직군</p>
              <JobDropdown />
              <p className="userInfoTitle">분위기(없앰)</p>
              <MoodDropdown />
              <p className="userInfoTitle">태그</p>
              <UserTagForm />
            </div>
          </div>
          <div className="modifyUserInfoBtn">
            <button className="modifyUserInfoCmpltBtn" type="submit">
              변경
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModifyUserInfo;
