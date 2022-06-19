import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

import MyUploadPicList from "components/account/mypage/myUploadPicLIst";
import classes from "./accountMyPage.module.css";
import CommonPageTitle from "components/common/commPageTitle";
import { postApi } from "api/fetch-api";
import { useDispatch } from "react-redux";
import CommBtn from "components/common/commBtn";
import noImg from "img/noImg.png";

const BASEURL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

const AccountMyPage = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [profileImg, setProfileImg] = useState(null);
  const [postList, setPostList] = useState(null);

  const fnCallback = (res) => {
    if (!!res) {
      let image = res.data.objectData
        ? `${BASEURL}${res.data.objectData}`
        : noImg;
      setProfileImg(image);
      setPostList(res.data.list);
    } else {
      // 비정상로직
      alert("data error");
    }
  };

  useEffect(() => {
    const dataObject = {
      currentPageNo: 1,
    };
    dispatch(postApi("mb/post/get/my-post-list", dataObject, fnCallback));
  }, [dispatch]);

  const alertBtnHandler = () => {
    history.push("/");
  };

  const modifyUserInfoBtnHandler = () => {
    history.push("/account/mypage/modify");
  };

  return (
    <div className={classes.Layout}>
      <div className={classes.Inner}>
        <div className={classes.notPostArea}>
          <div className={classes.titleArea}>
            <CommonPageTitle title="마이페이지" />
          </div>
          <hr />
          <div className={classes.MainArea}>
            <div>
              <img
                className={classes.ProfilePic}
                src={profileImg}
                alt={profileImg}
              />
            </div>
            <div className={classes.rowArea2}>
              <div className={classes.rowArea3}>
                <div className={classes.linkTo}>
                  <Link
                    to={{
                      pathname: "/account/mypage/following",
                      state: { follow: "following" },
                    }}
                    // style={{ textDecoration: "none" }}
                  >
                    팔로잉
                  </Link>
                </div>
                <div className={classes.linkTo}>
                  <Link
                    to={{
                      pathname: "/account/mypage/follower",
                      state: { follow: "follower" },
                    }}
                  >
                    팔로워
                  </Link>
                </div>
                <div className={classes.linkTo} onClick={alertBtnHandler}>
                  알림
                </div>
              </div>
              <CommBtn
                btnText="정보 수정"
                btnWidth="245px"
                btnHeight="60px"
                border="1px solid rgb(51, 51, 51)"
                bgColor="rgb(248, 248, 248)"
                radius="4px"
                txColor="rgb(78, 78, 78)"
                fontSize="25px"
                fnClick={modifyUserInfoBtnHandler}
              />
            </div>
          </div>
        </div>
        <div className={classes.picarea}>
          <MyUploadPicList muUploadPic={postList} />
          {/* <MyUploadPicList muUploadPic={DUMMY_DATA} /> */}
        </div>
      </div>
    </div>
  );
};

export default AccountMyPage;
