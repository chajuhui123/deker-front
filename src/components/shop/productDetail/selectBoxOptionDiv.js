import React from "react";
import classes from "./selectBoxOptionDiv.module.css";

function SelectBoxOptionDiv({ option }) {
  const {
    option1Name,
    option1DataName,
    option2Name,
    option2DataName,
    productPrice,
  } = option;
  return (
    <div className={classes.optionDiv}>
      <div className={classes.infoDiv}>
        <div className={classes.optionInfoText}>
          {`${option1Name} : ${option1DataName} / ${option2Name} : ${option2DataName}`}
        </div>
        <div>X</div>
      </div>

      <div className={classes.priceDiv}>
        <input
          type="number"
          min="1"
          // max={productQuantity}
          defaultValue="1"
          // onChange={(event) => {
          //   setSelectedQuantity(parseInt(event.target.value));
          // }}
        />
        <div>{productPrice.toLocaleString("ko-KR")}원</div>
      </div>
    </div>
  );
}

export default SelectBoxOptionDiv;
