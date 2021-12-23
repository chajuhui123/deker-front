import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import UserTagForm from "../components/common/userTagForm";
import "./signupAdditional.css";

function SignupAdditional(props) {
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
    <form className="signupAdditional" onSubmit={signupAdditionalSubmitHandler}>
      <div className="signupAddLayout">
        <div className="signupAdditional">
          <div className="signupAdditionalInner">
            <p className="signupAdditionalTitle">추가정보</p>
            <div className="signupAddUserAddInfoArea">
              <p className="userAddInfoTitle">프로필 사진</p>
              <div className="profilePic"></div>
              <p className="userAddInfoTitle">직군</p>
              <div>
                <Select
                  options={jopGroupOptions}
                  defaultValue={jopGroupOptions[0]}
                />
              </div>
              <p className="userAddInfoTitle">관심분위기</p>
              <div>
                <Select options={moodOptions} defaultValue={moodOptions[0]} />
              </div>
              <p className="userAddInfoTitle">태그</p>
              <UserTagForm />
            </div>
          </div>
        </div>
        <div className="signupAddBtns">
          <Link to="/">
            <button className="signupAddCmpltBtn" type="submit">
              완료
            </button>
          </Link>
          <Link to="/">
            <button className="signupAddPassBtn">건너뛰기</button>
          </Link>
        </div>
      </div>
    </form>
  );
}

export default SignupAdditional;
