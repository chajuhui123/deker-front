import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

/**
 *
 * @param {String} onClick Add 버튼 클릭시
 *
 */

function AddButton(props) {
  return <AiOutlinePlusCircle size={30} onClick={props.onClick} {...props} />;
}

export default AddButton;
