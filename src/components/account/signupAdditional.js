import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import JobDropdown from "components/common/dropdown/jobDropdown";
import UserTagForm from "../common/userTagForm";
import classes from "./signupAdditional.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommBtn from "components/common/commBtn";

function SignupAdditional(props) {
  const history = useHistory();
  const [profileImg, setProfileImg] = useState(null);

  // const [profilePic, setProfilePic] = useState("");

  // const uploadProfilePicHandler = (pic) => {
  //   setProfilePic(pic);
  // };

  //<ProfilePicBtn onClick={uploadProfilePicHandler} />
  // 건너뛰기 일단 home으로 가게 함

  const UserInfoAddSbmHandler = () => {
    setProfileImg("");
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
              <img
                className={classes.profilePic}
                src={
                  "https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
                }
                // src={profileImg}
                alt={profileImg}
              />
            </div>
            <div className={classes.dtlArea}>
              <CommPageSemiTitle semiTitle="직군" />
              <JobDropdown />
            </div>
            <div className={classes.dtlArea}>
              <CommPageSemiTitle semiTitle="태그" />
              <div className={classes.userAddInfo_TagArea}>
                <UserTagForm />
              </div>
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
            fnClick={UserInfoAddSbmHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default SignupAdditional;
