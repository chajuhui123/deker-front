import React from "react";
import "./signup-user-info.css";

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
  const ATMO_COMBO = ["따뜻함", "차가움", "부드러움"];
  return (
    <form>
      <div className="userDetailInfoArea">
        <div className="userDetailInfoInner">
          <div className="userDetailInfoTitleArea">
            <p className="userDetailInfoTitle">추가정보</p>
          </div>
          <div className="userDetailInputArea">
            <p className="userDetailInputTitle">프로필 사진</p>
            <div className="userProfileImageBox">
              <img
                className="userProfileImage"
                src=""
                alt=""
                onError={profileImageErrorHandler}
              />
            </div>
            <p className="userDetailInputTitle">직군</p>
            <div>
              <select defaultValue={0} className="userDetailSelect">
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
            <p className="userDetailInputTitle">관심분위기</p>
            <div>
              <select defaultValue={0} className="userDetailSelect">
                {/* TODO : 데이터 가져와서 넣어줘야함 */}
                {ATMO_COMBO.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
            <p className="userDetailInputTitle">태그</p>
            <div>
              <input className="userDetailInput" type="text"></input>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SignupUserInfo;
