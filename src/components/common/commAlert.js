import React from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import classes from "./commAlert.module.css";
import CommBtn from "components/common/commBtn";

function CommAlert(props) {
  const dispatch = useDispatch();
  const closeAlertHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  return (
    <div className={classes.commAlertArea}>
      <div className={classes.commAlertTitle}>{props.title}</div>
      <div className={classes.commAlertMessage}>{props.message}</div>
      <CommBtn
        btnWidth="50%"
        fnClick={props.onClickHandler ?? closeAlertHandler}
      />
    </div>
  );
}

export default CommAlert;
