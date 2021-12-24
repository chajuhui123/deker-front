import React from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { modalAction } from "../../store/modal-slice";
import classes from "./modal.module.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxHeight: "100%",
    maxWidht: "100%",
    margin: "0px",
    padding: "0px",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    backgroundColor: "rgb(0 0 0 / 50%)",
  },
};

function ModalPopup(props) {
  const dispatch = useDispatch();
  const modalCloseBtnHandler = () => {
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  return (
    <ReactModal
      id={props.modalId}
      isOpen={props.isOpen}
      style={customStyles}
      onRequestClose={props.onRequestClose}
    >
      <span className={classes.close} onClick={modalCloseBtnHandler}></span>
      {props.children}
    </ReactModal>
  );
}

export default ModalPopup;
