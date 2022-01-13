// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import JobDropdown from "components/common/dropdown/jobDropdown";
import UserTagForm from "../common/userTagForm";
import classes from "./signupAdditional.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";

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
            <CommonPageTitle title="추가정보입력" />
            <div className={classes.signupAddUserAddInfoArea}>
              <CommPageSemiTitle semiTitle="프로필 사진" />
              <div className={classes.userAddInfo_profilePic}></div>
              <CommPageSemiTitle semiTitle="직군" />
              <JobDropdown />
              <CommPageSemiTitle semiTitle="태그" />
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
