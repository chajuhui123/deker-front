import React from "react";
import { Link } from "react-router-dom";
import MyUploadPicList from "../components/account/myUploadPicLIst";
import classes from "./accountMyPage.module.css";

const AccountMyPage = (props) => {
  const DUMMY_DATA = [
    {
      id: 1,
      pic_image:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
    },
    {
      id: 2,
      pic_image:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
    },
    {
      id: 3,
      pic_image:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
    },
    {
      id: 4,
      pic_image:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
    },
    {
      id: 5,
      pic_image:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
    },
    {
      id: 6,
      pic_image:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
    },
    {
      id: 7,
      pic_image:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
    },
    {
      id: 8,
      pic_image:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
    },
    {
      id: 9,
      pic_image:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
    },
    {
      id: 10,
      pic_image:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
    },
  ];

  return (
    <form className={classes.accountMyPage_Layout}>
      <div className={classes.accountMyPage_Area}>
        <div className={classes.accountMyPage_Inner}>
          <p className={classes.accountMyPage_Title}>마이페이지</p>
          <hr className={classes.accountMyPage_lineD} />
          <div className={classes.accountMyPage_MainArea}>
            <div className={classes.accountMyPage_rowArea1}>
              <div className={classes.accountMyPage_ProfilePic} />
            </div>
            <div className={classes.accountMyPage_rowArea2}>
              <div className={classes.accountMyPage_rowArea3}>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  팔로잉
                </Link>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  팔로워
                </Link>
                <Link to="/" className={classes.accountMyPage_LinkTo}>
                  알림
                </Link>
              </div>
              <Link to="/ModifyUserInfo">
                <button className={classes.accountMyPage_ModifyUserInfoBtn}>
                  정보 수정
                </button>
              </Link>
            </div>
          </div>
          <div className={classes.picarea}>
            <MyUploadPicList muUploadPic={DUMMY_DATA} />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AccountMyPage;
