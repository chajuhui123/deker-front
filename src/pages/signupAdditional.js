import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./signupAdditional.css";

function SignupAdditional(props) {
  const [tag, setTag] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const uploadProfilePicHandler = (pic) => {
    setProfilePic(pic);
  };

  // 직군 select  option
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

  // 태그 Input Handler
  const TagInputHandler = (e) => {
    setTag(e.target.value);
  };

  const submit = (accountType) => {};

  const signupAdditionalSubmitHandler = (e) => {
    e.preventDefault();
    submit();
  };

  //<ProfilePicBtn onClick={uploadProfilePicHandler} />
  // 건너뛰기 일단 home으로 가게 함
  return (
    <form className="signupAdditional" onSubmit={signupAdditionalSubmitHandler}>
      <div className="signupAdditional">
        <div className="signupAdditionalInner">
          <p className="signupAdditionalTitle">추가정보</p>
          <div className="userAddInfoArea">
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
            <div>
              <input
                className="userTagInput"
                type="text"
                onChange={TagInputHandler}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <button className="signupAdditionalCmpltBtn" type="submit">
        완료
      </button>
      <Link to="/">
        <button className="signupAdditionalPassBtn">건너뛰기</button>
      </Link>
    </form>
  );
}

export default SignupAdditional;
