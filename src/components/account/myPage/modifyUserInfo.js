// import React, { useState } from "react";
import React, { useEffect, useState } from "react";
import UserTagForm from "components/common/userTagForm";
import JobDropdown from "components/common/dropdown/jobDropdown";
import classes from "./modifyUserInfo.module.css";
import ModalTitle from "components/common/modalTitle";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import CommSelect from "components/common/CommSelect";

const BASEURL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function ModifyUserInfo(props) {
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState(null);
  const [nickNm, setNickNm] = useState(null);
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [jobCode, setJobCode] = useState(""); // 선택된 직업코드

  // 직업코드조회콜백
  const fnJobCallback = (res) => {
    setJobArray(res.data);
  };

  const fnCallback = (res) => {
    setProfileImg(`${BASEURL}${res.data.profileImg}`);
  };

  useEffect(() => {
    dispatch(postApi("mb/acct/get/member-info", null, fnCallback));
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "JOB",
        },
        fnJobCallback
      )
    );
  }, [dispatch]);

  // 직업코드선택핸들러
  const jobChangeHandler = (e) => {
    setJobCode(e.value);
  };

  // const [profilePic, setProfilePic] = useState("");

  // const uploadProfilePicHandler = (pic) => {
  //   setProfileImg(pic);
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
        <ModalTitle title="회원정보 변경" />
        <div className={classes.modifyUserInfoInner}>
          <div className={classes.modifyUserInfoArea}>
            <div className={classes.modifyUserInfo_row1}>
              <div className={classes.userInfoTitle}>프로필 사진</div>
              {/* <div className={classes.modifyUserInfo_profilePic}> */}
              <img
                className={classes.modifyUserInfo_profilePic}
                src={profileImg}
              />
              {/* </div> */}
              <div className={classes.userInfoTitle}>이메일</div>
              <div className={classes.modifyUserInfoEmail}>email@email.com</div>
              <div className={classes.userInfoTitle}>닉네임</div>
              <div className={classes.modifyUserInfoEmail}>
                ImUnique___변경버튼
              </div>
            </div>
            <div className={classes.modifyUserInfo_row2}>
              <p className={classes.userInfoTitle}>직군</p>
              {/* <JobDropdown /> */}
              <CommSelect
                title="직업"
                options={jobArray}
                valueOf={jobCode}
                onChange={jobChangeHandler}
              />
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
