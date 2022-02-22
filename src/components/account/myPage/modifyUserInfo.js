import React, { useEffect, useState } from "react";
import UserTagForm from "components/common/userTagForm";
import classes from "./modifyUserInfo.module.css";
import ModalTitle from "components/common/modalTitle";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
// import CommSelect from "components/common/CommSelect";
// import JobDropdown from "components/common/dropdown/jobDropdown";
import CommBtn from "components/common/commBtn";
import CommSelect from "components/common/CommSelect";
import noImg from "img/noImg.png";

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
    if (!!res) {
      setJobArray(res.data);
    } else {
      // 비정상로직
      alert("data error");
    }
  };

  const fnCallback = (res) => {
    if (!!res) {
      let image = res.data.profileImg
        ? `${BASEURL}${res.data.profileImg}`
        : noImg;
      setProfileImg(image);
      setEmailPrint(res.data.id);
      setNickNm(res.data.nickname);
    } else {
      // 비정상로직
      alert("data error");
    }
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

  const SubmitHandler = (e) => {
    // e.preventDefault();
    // warning 없애려고 넣은거
    console.log(jobArray);
    console.log(jobCode);
    jobChangeHandler();
  };

  // 건너뛰기 일단 home으로 가게 함
  return (
    <div className={classes.modifyUserInfo}>
      <ModalTitle title="회원정보변경" />
      <div className={classes.Inner}>
        <img className={classes.profilePic} src={profileImg} alt={profileImg} />
        <div className={classes.InfoArea}>
          <div className={classes.modifyUserInfo_row1}>
            <div className={classes.userInfoTitle}>이메일</div>
            <div className={classes.modifyUserInfoEmail}>{emailPrint}</div>
            <div className={classes.dtlArea}>
              <div className={classes.nicktitle}>닉네임</div>
              <textarea
                className={classes.nickInputArea}
                type="text"
                value={nickNm}
                placeholder={nickNm}
                onChange={chgNickNmHandler}
              />
            </div>
            <div className={classes.modifyUserInfoEmail}>{nickNm}</div>
          </div>
          <div className={classes.modifyUserInfo_row2}>
            {/* {jobArray?.length && (
              <CommSelect
                title="직업"
                options={jobArray}
                defaultValue={jobCode || jobArray[0]}
                // {jobCode || null}
                onChange={jobChangeHandler}
              />
            )} */}
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
          <CommBtn
            btnText="변경하기"
            btnHeight="50px"
            bgColor="rgb(66, 66, 226)"
            radius="4px"
            txColor="rgb(255, 255, 255)"
            fontSize="20px"
            fnClick={SubmitHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default ModifyUserInfo;
