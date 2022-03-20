import React, { useEffect, useRef, useState } from "react";
import classes from "./selectBoxOptionDiv.module.css";

function SelectBoxOptionDiv({ option, selectedOption, setSelectedOption }) {
  const {
    option1Name,
    option1DataName,
    option2Name,
    option2DataName,
    productPrice,
    productQuantity,
  } = option;

  let thisOptionQuantity = useRef(1);
  const [thisOptionPrice, setThisOptionPrice] = useState(productPrice);

  const handleDeleteOption = () => {
    const deleteOptionIndex = selectedOption.indexOf(option);
    const sortedOptions = selectedOption.filter(
      (item) => item !== selectedOption[deleteOptionIndex]
    );
    setSelectedOption(sortedOptions);
  };

  return (
    <div className={classes.optionDiv}>
      <div className={classes.infoDiv}>
        <div className={classes.optionInfoText}>
          {`${option1Name} : ${option1DataName} / ${option2Name} : ${option2DataName}`}
        </div>
        <div onClick={handleDeleteOption}>삭제아이콘</div>
      </div>

      <div className={classes.priceDiv}>
        <input
          type="number"
          min="1"
          max={productQuantity}
          defaultValue="1"
          onChange={(event) => {
            thisOptionQuantity = parseInt(event.target.value);
            setThisOptionPrice(thisOptionQuantity * productPrice);
          }}
        />
        <div>{thisOptionPrice.toLocaleString("ko-KR")}원</div>
      </div>
    </div>
  );
}

export default SelectBoxOptionDiv;
