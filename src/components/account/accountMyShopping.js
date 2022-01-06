import React from "react";
import DeliStateDropdown from "../common/deliStateDropdown";
import PeriodDropdown from "../common/periodDropdown";
import classes from "./accountMyShopping.module.css";

function AccountMyShopping(props) {
  return (
    <div className={classes.accountMyShopping_Layout}>
      <div className={classes.acctMyShopping_Inner}>
        <p className={classes.acctMyShopping_Title}>나의쇼핑</p>
        <hr className={classes.acctMyShopping_LineD} />
        <div className={classes.acctMyShopping_Main}>
          <p className={classes.acctMyShopping_SemiTitle}>주문배송내역 조회</p>
          <div className={classes.acctMyShopping_DelivTrack}></div>
          <div className={classes.acctMyShopping_DelivTrackCondition}>
            <PeriodDropdown />
            <DeliStateDropdown />
          </div>
          <p className={classes.acctMyShopping_SemiTitle}>주문상품</p>
          <p>000000000 | 2022.01.01.</p>
          <p className={classes.acctMyShopping_SemiTitle}>배송상태</p>
        </div>
      </div>
    </div>
  );
}

export default AccountMyShopping;
