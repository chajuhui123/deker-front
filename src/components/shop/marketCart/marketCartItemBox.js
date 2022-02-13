import React from "react";
import MarketCartItem from "./marketCartItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox() {
  return (
    <div>
      <div>
        <div>(체크박스)모두 선택</div>
        <div>선택삭제</div>
      </div>
      <div>
        map으로 돌리는...
        <MarketCartItem />
      </div>
    </div>
  );
}

export default MarketCartItemBox;
