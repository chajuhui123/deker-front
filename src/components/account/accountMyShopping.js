// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./accountMyShopping.module.css";

function AccountMyShopping(props) {
  return (
    <div className={classes.accountMyShopping_Layout}>
      <div className={classes.acctMyShopping_Inner}>
        <p className={classes.acctMyShopping_Title}>나의쇼핑</p>
        <hr className={classes.acctMyShopping_LineD} />
      </div>
    </div>
  );
}

export default AccountMyShopping;
