import React from "react";
import classes from "./signup-user-info.module.css";

function SignupUserInfo(props) {
  const profileImageErrorHandler = (e) => {
    e.target.src = "img/noImage.jpg";
  };
  const JOB_COMBO = [
    "연구",
    "사무",
    "건설",
    "예술",
    "미술",
    "체육",
    "쇼핑",
    "기타",
  ];
  // const ATMO_COMBO = ["따뜻함", "차가움", "부드러움"];
  return (
    <form>
      <div className={classes.userDetailInfoArea}>
        <div className={classes.userDetailInfoInner}>
          <div className={classes.userDetailInfoTitleArea}>
            <p className={classes.userDetailInfoTitle}>추가정보</p>
          </div>
          <div className={classes.userDetailInputArea}>
            <p className={classes.userDetailInputTitle}>프로필 사진</p>
            <div className={classes.userProfileImageBox}>
              <img
                className={classes.userProfileImage}
                src=""
                alt=""
                onError={profileImageErrorHandler}
              />
            </div>
            <p className={classes.userDetailInputTitle}>직군</p>
            <div>
              <select defaultValue={0} className={classes.userDetailSelect}>
                {/* TODO : 데이터 가져와서 넣어줘야함 */}
                {JOB_COMBO.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item}
                    </option>
                  );
                })}
                ;
              </select>
            </div>
            {/* <p className="userDetailInputTitle">관심분위기</p>
            <div>
              <select defaultValue={0} className="userDetailSelect">
                {ATMO_COMBO.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div> */}
            <p className={classes.userDetailInputTitle}>태그</p>
            <div>
              <input className={classes.userDetailInput} type="text"></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupUserInfo;
