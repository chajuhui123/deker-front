// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import JobDropdown from "../components/common/jobDropdown";
import MoodDropdown from "../components/common/moodDropdown";
import UserTagForm from "../components/common/userTagForm";
import "./signupAdditional.css";

function SignupAdditional(props) {
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
      className="signupAdditional_submit"
      onSubmit={signupAdditionalSubmitHandler}
    >
      <div className="signupAddLayout">
        <div className="signupAdditional">
          <div className="signupAdditionalInner">
            <p className="signupAdditionalTitle">추가정보</p>
            <div className="signupAddUserAddInfoArea">
              <p className="userAddInfoTitle">프로필 사진</p>
              <div className="userAddInfo_profilePic"></div>
              <p className="userAddInfoTitle">직군</p>
              <JobDropdown />
              <p className="userAddInfoTitle">관심분위기(없앰)</p>
              <MoodDropdown />
              <p className="userAddInfoTitle">태그</p>
              <div className="userAddInfo_TagArea">
                <UserTagForm />
              </div>
            </div>
          </div>
        </div>
        <div className="signupAddBtns">
          <Link to="/">
            <button className="signupAddCmpltBtn" type="submit">
              완료
            </button>
          </Link>
          <Link to="/">
            <button className="signupAddPassBtn">건너뛰기</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignupAdditional;
