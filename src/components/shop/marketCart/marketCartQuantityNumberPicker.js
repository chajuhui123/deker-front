import React from "react";
import classes from "./marketCartQuantityNumberPicker.module.css";

function MarketCartQuantityNumberPicker({ maxQuantity }) {
  return (
    <input
      className={classes.inputQuantity}
      type="number"
      min="1"
      max={maxQuantity}
      defaultValue="0"
    />
  );
}

export default MarketCartQuantityNumberPicker;
