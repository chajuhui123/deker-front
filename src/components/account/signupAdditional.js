import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserTagForm from "../common/userTagForm";
import classes from "./signupAdditional.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommBtn from "components/common/commBtn";
import noImg from "img/noImg.png";
import CommSelect from "components/common/CommSelect";
import { fileApi, postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

function SignupAdditional(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const photoInputRef = useRef();
  const [prevImage, setPrevImage] = useState(noImg); // 미리보기 이미지
  const [profileImg, setProfileImg] = useState(null);
  const [nickNm, setNickNm] = useState("");
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [jobCode, setJobCode] = useState(""); // 선택된 직업코드
  const [tag, setTag] = useState([]);

  /* 직업코드조회 */
  const fnJobCallback = (res) => {
    if (!!res) {
      setJobArray(res.data);
    } else {
      // 비정상로직
      alert("data error");
    }
  };

  useEffect(() => {
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
  /* 직업코드조회 */

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

  // 저장후콜백메소드
  const fnSbmtCallback = (res) => {
    if (!!res) {
      history.push("/");
    } else {
      // 가입 실패
    }
  };

  /* 사용자 입력 영역 */
  // 닉네임 입력
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
  /* 사용자 입력 영역 */

  // user 추가 정보 입력 Back 저장
  const UserInfoAddSbmHandler = () => {
    const formData = new FormData();
    formData.append("profileImg", profileImg); // 프로필 이미지

    const myAccountInfo = {
      nickname: nickNm,
      jobCode: jobCode,
      tag: tag,
    };
    formData.append(
      "myAccountInfo",
      new Blob([JSON.stringify(myAccountInfo)], { type: "application/json" })
    );

    dispatch(fileApi("mb/acct/mod/member-info", formData, fnSbmtCallback));
  };

  // 건너뛰기 -Main 페이지 이동
  const skipBtnHandler = () => {
    history.push("/");
  };
  return (
    <div className={classes.Layout}>
      <div className={classes.signupAddLayout}>
        <div className={classes.Inner}>
          <CommonPageTitle title="추가정보입력" />
          <div className={classes.signupAddUserAddInfoArea}>
            <div className={classes.dtlArea}>
              <CommPageSemiTitle semiTitle="프로필 사진" />
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
            <div className={classes.dtlArea}>
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
      </div>
      <div className={classes.signupAddBtns}>
        <CommBtn
          btnText="완료"
          btnWidth="210px"
          btnHeight="70px"
          border="1px solid rgb(66, 66, 226)"
          bgColor="rgb(66, 66, 226)"
          radius="4px"
          txColor="rgb(245, 245, 245)"
          fontSize="30px"
          fnClick={UserInfoAddSbmHandler}
        />
        <div className={classes.goRight}>
          <CommBtn
            btnText="건너뛰기"
            btnWidth="210px"
            btnHeight="67px"
            border="3px solid rgb(66, 66, 226)"
            bgColor="rgb(248, 248, 250)"
            radius="4px"
            txColor="rgb(78, 78, 78)"
            fontSize="30px"
            fnClick={skipBtnHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default SignupAdditional;
