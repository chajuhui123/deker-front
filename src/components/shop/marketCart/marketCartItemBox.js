import React from "react";
import MarketCartItem from "./marketCartItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox() {
  return (
    <div>
      <div className={classes.checkDiv}>
        {/* 모두 선택 체크 박스 */}
        <div>모두 선택</div>
        <div>선택삭제</div>
      </div>
      <div>
        {/* map으로 돌리기 */}
        <MarketCartItem />
      </div>
    </div>
  );
}

export default MarketCartItemBox;
