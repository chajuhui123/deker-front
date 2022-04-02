import CommonPageTitle from "components/common/commPageTitle";
import classes from "./AlarmMain.module.css";
import noImg from "img/noImg.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { BASE_URL } from "module/common-module";

const AlarmMain = (props) => {
  const dispatch = useDispatch();
  const [alarms, setAlarms] = useState([
    {
      alarmId: "alm_000002",
      alarmFromId: "meb_000001",
      alarmFromNm: "덴젤",
      alarmFromProfileImage: "",
      alarmType: "GIFT",
      alarmMessage: "님이 나에게 선물을 보냈습니다.",
      alarmDelay: "10초전",
      alarmURL: "",
    },
  ]);
  const fnCallback = (res) => {
    if (!!res) {
      setAlarms(res.data.alarms);
    }
  };
  useEffect(() => {
    // 내 알람 내역 조회
    // dispatch(postApi("", null, fnCallback));
  }, [dispatch]);
  return (
    <div className={classes.main}>
      <CommonPageTitle title="내 소식" />
      <div className={classes.contents}>
        {alarms?.map((alarm) => {
          return (
            <div className={classes.content} key={alarm.alarmId}>
              <div className={classes.img}>
                <img
                  alt="pi"
                  src={
                    alarm.alarmFromProfileImage ||
                    noImg ||
                    `${BASE_URL}${alarm.alarmFromProfileImage}`
                  }
                />
              </div>
              <div className={classes.row}>
                <Link className={classes.text} to={alarm.alarmURL}>
                  {alarm.alarmFromNm} {alarm.alarmMessage}
                </Link>
                <div className={classes.text}>{alarm.alarmDelay}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AlarmMain;
