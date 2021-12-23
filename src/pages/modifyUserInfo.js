import React, { useMemo, useState } from "react";
import Select from "react-select";
import UserTagForm from "../components/common/userTagForm";
import "./modifyUserInfo.css";

function ModifyUserInfo(props) {
  const [profilePic, setProfilePic] = useState("");

  const uploadProfilePicHandler = (pic) => {
    setProfilePic(pic);
  };

  // 직군 select option
  const jopGroupOptions = useMemo(
    () => [
      { value: "job1", label: "Job1" },
      { value: "job2", label: "Job2" },
      { value: "job3", label: "Job3" },
      { value: "job4", label: "Job4" },
      { value: "job5", label: "Job5" },
    ],
    []
  );

  // 관심분위기 select option
  const moodOptions = useMemo(
    () => [
      { value: "mood1", label: "Mood1" },
      { value: "mood2", label: "Mood2" },
      { value: "mood3", label: "Mood3" },
      { value: "mood4", label: "Mood4" },
      { value: "mood5", label: "Mood5" },
    ],
    []
  );

  const submit = (accountType) => {};

  const signupAdditionalSubmitHandler = (e) => {
    e.preventDefault();
    submit();
  };

  //<ProfilePicBtn onClick={uploadProfilePicHandler} />
  // 건너뛰기 일단 home으로 가게 함
  return (
    <form className="modifyUserInfo" onSubmit={signupAdditionalSubmitHandler}>
      <div className="modifyUserInfo">
        <p className="modifyUserInfoTitle">회원정보 변경</p>
        <div className="modifyUserInfoInner">
          <div className="modifyUserInfoArea">
            <div className="modifyUserInfo_row1">
              <p className="userInfoTitle">프로필 사진</p>
              <div className="profilePic"></div>
              <p className="userInfoTitle">이메일</p>
              <p className="modifyUserInfoEmail">email@email.com</p>
            </div>
            <div className="modifyUserInfo_row2">
              <p className="userInfoTitle">직군</p>
              <div>
                <Select
                  options={jopGroupOptions}
                  defaultValue={jopGroupOptions[0]}
                />
              </div>
              <p className="userInfoTitle">분위기</p>
              <div>
                <Select options={moodOptions} defaultValue={moodOptions[0]} />
              </div>
              <p className="userInfoTitle">태그</p>
              <UserTagForm />
            </div>
          </div>
          <div className="modifyUserInfoBtn">
            <button className="modifyUserInfoCmpltBtn" type="submit">
              변경
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ModifyUserInfo;
