import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

/**
 *
 * @param {String} onClick delete 버튼 클릭시
 *
 */

function DeleteButton(props, { onClick }) {
  return <AiOutlineMinusCircle size={30} onClick={onClick} {...props} />;
}

export default DeleteButton;
