import classes from "./CommunityMain.module.css";
import CommunitySection from "../semi/section/CommunitySection";
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postApi } from "api/fetch-api";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import slide1 from "img/main/slide1.jpg";
import slide2 from "img/main/slide2.jpg";
import slide3 from "img/main/slide3.jpg";
import slide4 from "img/main/slide4.jpg";

const CommunityMain = (props) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const token = useSelector((state) => state.user.token);
  const [ranks, setRanks] = useState([]);
  const [follow, setFollow] = useState([]);
  const [custom, setCustom] = useState([]);

  const followingHandler = (userId, followingCheck) => {
    const data = {
      userId,
    };
    console.log("followingHandler :: userId :: ", userId);
    console.log("followingHandler :: followingCheck :: ", followingCheck);
    const url = followingCheck ? "mb/cmm/rmv/follow" : "mb/cmm/reg/follow";
    dispatch(postApi(url, data, fnFollowCallback));
  };
  const fnFollowCallback = (res) => {
    console.log(`CommunityMain :: res :: ${JSON.stringify(res)}`);
    fnGetContents();
  };

  const fnGetContents = useCallback(() => {
    console.log("fnGetContents :: isLoggedIn :: ", isLoggedIn);
    console.log("fnGetContents :: token :: ", token);
    console.log(
      "fnGetContents :: localStorage.getItem('token') :: ",
      localStorage.getItem("token")
    );
    let url = isLoggedIn ? "mb/post/get" : "nmb/post/get";
    dispatch(postApi(url, null, fnCallback));
  }, [dispatch, isLoggedIn]);
  const fnCallback = (res) => {
    console.log("CommunityMain :: res :: ", res);
    if (!!res) {
      setRanks(res.data.ranks);
      setFollow(res.data.follow);
      setCustom(res.data.custom);
    }
  };
  useEffect(() => {
    fnGetContents();
  }, [fnGetContents]);

  const mainSlideImage = [slide1, slide2, slide3, slide4];

  return (
    <div className={classes.main}>
      <div className={classes.slider}>
        <Carousel
          animation="slide"
          duration={1100}
          autoPlay={false}
          stopAutoPlayOnHover={true}
          navButtonsAlwaysVisible={true}
          fullHeightHover={true}
        >
          {mainSlideImage.map((item, i) => {
            return (
              <Paper key={i}>
                <img
                  style={{ width: "800px", height: "600px" }}
                  alt={`이미지`}
                  src={item}
                />
              </Paper>
            );
          })}
        </Carousel>
      </div>
      <CommunitySection
        type="rank"
        page="main"
        data={ranks}
        followingHandler={followingHandler}
      />
      {isLoggedIn && (
        <CommunitySection
          type="follow"
          page="main"
          data={follow}
          followingHandler={followingHandler}
        />
      )}
      {isLoggedIn && (
        <CommunitySection
          type="custom"
          page="main"
          data={custom}
          followingHandler={followingHandler}
        />
      )}
    </div>
  );
};

export default CommunityMain;
