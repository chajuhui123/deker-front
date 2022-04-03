import React, { useEffect, useRef, useState } from "react";
import UserTagForm from "components/common/userTagForm";
import classes from "./modifyUserInfo.module.css";
import ModalTitle from "components/common/modalTitle";
import { useDispatch } from "react-redux";
import { fileApi, postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import CommSelect from "components/common/CommSelect";
import noImg from "img/noImg.png";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BASEURL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function ModifyUserInfo(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photoInputRef = useRef();
  const [profileImg, setProfileImg] = useState(null);
  const [prevImage, setPrevImage] = useState(null); // 미리보기 이미지
  const [emailPrint, setEmailPrint] = useState("");
  const [nickNm, setNickNm] = useState("");
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [jobCode, setJobCode] = useState(""); // 선택된 직업코드
  const [tag, setTag] = useState([]);

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
      setPrevImage(image);
      setEmailPrint(res.data.id);
      setNickNm(res.data.nickname);
      setJobCode(res.data.jobCode);
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

  // 이미지핸들러
  const imageHandler = (e) => {
    if (e.target.files.length > 0) {
      setPrevImage(URL.createObjectURL(e.target.files[0]));
      setProfileImg(e.target.files[0]);
    }
  };
  // 이미지 파일추가 팝업
  const imageInputHandler = (e) => {
    photoInputRef.current.click();
  };

  const chgNickNmHandler = (e) => {
    setNickNm(e.target.value);
  };

  // 직업코드선택핸들러
  const jobChangeHandler = (value) => {
    setJobCode(value);
  };

  // 입력한 태그 값 저장 array
  const tagOutHandler = (tagArry) => {
    // tag를 object->array 변환
    const arry = tagArry.map((tag) => tag.text);
    setTag(arry);
  };

  // 저장후콜백메소드
  const fnSbmtCallback = (res) => {
    if (!!res) {
      history.push("/mypage");
    }
  };

  const SubmitHandler = (e) => {
    const formData = new FormData();
    formData.append("profileImg", profileImg); // 프로필 이미지

    const myAccountInfo = {
      nickname: nickNm,
      // id: emailPrint,
      jobCode: jobCode,
      tag: tag,
    };
    formData.append(
      "myAccountInfo",
      new Blob([JSON.stringify(myAccountInfo)], { type: "application/json" })
    );

    dispatch(fileApi("mb/acct/mod/member-info", formData, fnSbmtCallback));
  };

  return (
    <div className={classes.modifyUserInfo}>
      <ModalTitle title="회원정보변경" />
      <div className={classes.Inner}>
        <input
          className={classes.profileImgInput}
          name="imgUpload"
          type="file"
          accept="image/*"
          ref={photoInputRef}
          onChange={imageHandler}
        />
        <img
          className={classes.profilePic}
          src={prevImage}
          alt={prevImage}
          onClick={imageInputHandler}
        />
        <div className={classes.InfoArea}>
          <div className={classes.modifyUserInfo_row1}>
            <div className={classes.dtlArea}>
              <div className={classes.userInfoTitle2}>이메일</div>
              <div className={classes.modifyUserInfoEmail}>{emailPrint}</div>
            </div>
            <div className={classes.dtlArea}>
              <div className={classes.userInfoTitle2}>닉네임</div>
              <textarea
                className={classes.nickInputArea}
                type="text"
                value={nickNm}
                placeholder={nickNm}
                onChange={chgNickNmHandler}
              />
            </div>
            <div className={classes.dtlArea2}>
              {jobArray?.length && (
                <CommSelect
                  width="100%"
                  title="직업"
                  options={jobArray}
                  defaultValue={jobCode || "선택"}
                  value={jobCode}
                  onChange={jobChangeHandler}
                />
              )}
            </div>
            <div className={classes.dtlArea2}>
              <p className={classes.userInfoTitle}>태그</p>
              <UserTagForm tagOutHandler={tagOutHandler} />
            </div>
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
