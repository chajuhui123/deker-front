import React, { useEffect, useRef, useState } from "react";
import UserTagForm from "components/common/userTagForm";
// import JobDropdown from "components/common/dropdown/jobDropdown";
import classes from "./modifyUserInfo.module.css";
import ModalTitle from "components/common/modalTitle";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import CommSelect from "components/common/CommSelect";

const BASEURL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function ModifyUserInfo(props) {
  const dispatch = useDispatch();
  const [profileImg, setProfileImg] = useState(null);
  const [emailPrint, setEmailPrint] = useState("");
  const [nickNm, setNickNm] = useState("");
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [jobCode, setJobCode] = useState(""); // 선택된 직업코드

  // 직업코드조회콜백
  const fnJobCallback = (res) => {
    setJobArray(res.data);
  };

  const fnCallback = (res) => {
    setProfileImg(`${BASEURL}${res.data.profileImg}`);
    setEmailPrint(`${BASEURL}${res.data.id}`);
    setNickNm(`${BASEURL}${res.data.nickname}`);
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

  const chgNickNmHandler = (e) => {
    setNickNm(e.target.value);
  };

  // 직업코드선택핸들러
  const jobChangeHandler = (e) => {
    setJobCode(e.value);
  };

  const submit = (accountType) => {};

  const signupAdditionalSubmitHandler = (e) => {
    e.preventDefault();
    submit();
  };

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
              <img
                className={classes.modifyUserInfo_profilePic}
                src={profileImg}
                alt={profileImg}
              />
              <div className={classes.userInfoTitle}>이메일</div>
              <div className={classes.modifyUserInfoEmail}>{emailPrint}</div>
              <div className={classes.userInfoTitle}>닉네임</div>
              <div className={classes.modifyUserInfoEmail}>{nickNm}</div>
              <input
                className={classes.nickInputArea}
                type="text"
                value={nickNm}
                placeholder={nickNm}
                onChange={chgNickNmHandler}
              />
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
