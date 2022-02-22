// import React, { useState } from "react";
import MarketCartItem from "./marketCartItem";
import classes from "./marketCartItemBox.module.css";

function MarketCartItemBox({ cartItemArray }) {
  // const [checkedList, setCheckedList] = useState([]);

  return (
    <div>
      <div className={classes.checkDiv}>
        <div>모두 선택</div>
        <div>선택삭제</div>
      </div>
      <div>
        {/* 장바구니에 있는 아이템 */}
        {cartItemArray.map((cartItemObject) => {
          return <MarketCartItem cartItemObject={cartItemObject} />;
        })}
      </div>
    </div>
  );
}

export default MarketCartItemBox;
