import React from "react";
import { AiOutlineMinusCircle } from "react-icons/ai";

/**
 *
 * @param {String} color Color
 * @param {Number} size Size
 * @param {String} onClick delete 버튼 클릭시
 *
 */

function DeleteButton(props) {
  return (
    <AiOutlineMinusCircle
      color={props?.color ?? "black"}
      size={props?.size ?? 30}
      onClick={props?.onClick}
      {...props}
    />
  );
}

export default DeleteButton;
