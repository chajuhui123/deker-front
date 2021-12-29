// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import JobDropdown from "../components/common/jobDropdown";
import UserTagForm from "../components/common/userTagForm";
import classes from "./signupAdditional.module.css";

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
      <div className={classes.signupAddLayout}>
        <div className={classes.signupAdditional}>
          <div className={classes.signupAdditionalInner}>
            <p className={classes.signupAdditionalTitle}>추가정보</p>
            <div className={classes.signupAddUserAddInfoArea}>
              <p className={classes.userAddInfoTitle}>프로필 사진</p>
              <div className={classes.userAddInfo_profilePic}></div>
              <p className={classes.userAddInfoTitle}>직군</p>
              <JobDropdown />
              <p className={classes.userAddInfoTitle}>태그</p>
              <div className={classes.userAddInfo_TagArea}>
                <UserTagForm />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.signupAddBtns}>
          <Link to="/">
            <button className={classes.signupAddCmpltBtn} type="submit">
              완료
            </button>
          </Link>
          <Link to="/">
            <button className={classes.signupAddPassBtn}>건너뛰기</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignupAdditional;
