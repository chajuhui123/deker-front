import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import MyUploadPicList from "components/account/myPage/myUploadPicLIst";
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

  const followingBtnHandler = () => {
    history.push("/");
  };
  const followerBtnHandler = () => {
    history.push("/");
  };
  const alertBtnHandler = () => {
    history.push("/");
  };

  const modifyUserInfoBtnHandler = () => {
    history.push("/mypage/modify");
  };

  // const DUMMY_DATA = [
  //   {
  //     id: 1,
  //     pic_image:
  //       "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
  //   },
  //   {
  //     id: 2,
  //     pic_image:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //   },
  //   {
  //     id: 3,
  //     pic_image:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //   },
  //   {
  //     id: 4,
  //     pic_image:
  //       "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
  //   },
  //   {
  //     id: 5,
  //     pic_image:
  //       "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
  //   },
  //   {
  //     id: 6,
  //     pic_image:
  //       "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
  //   },
  //   {
  //     id: 7,
  //     pic_image:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //   },
  //   {
  //     id: 8,
  //     pic_image:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //   },
  //   {
  //     id: 9,
  //     pic_image:
  //       "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
  //   },
  //   {
  //     id: 10,
  //     pic_image:
  //       "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
  //   },
  // ];

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
                <div className={classes.linkTo} onClick={followingBtnHandler}>
                  팔로잉
                </div>
                <div className={classes.linkTo} onClick={followerBtnHandler}>
                  팔로워
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
