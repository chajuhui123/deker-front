import React, { useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
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

  const [thisOptionPrice, setThisOptionPrice] = useState(productPrice);

  const handleDeleteOption = () => {
    const deleteOptionIndex = selectedOption.indexOf(option);
    const sortedOptions = selectedOption.filter(
      (item) => item !== selectedOption[deleteOptionIndex]
    );
    setSelectedOption(sortedOptions);
  };

  const handleUpdateOptionQuantity = (event) => {
    const tempSelectedOption = selectedOption;
    const updateOptionIndex = selectedOption.indexOf(option);
    tempSelectedOption[updateOptionIndex].orderQuantity = parseInt(
      event.target.value
    );
    setSelectedOption(tempSelectedOption);
    setThisOptionPrice(event.target.value * productPrice);
  };

  return (
    <div className={classes.optionDiv}>
      <div className={classes.infoDiv}>
        <div className={classes.optionInfoText}>
          {`${option1Name} : ${option1DataName} / ${option2Name} : ${option2DataName}`}
        </div>
        <div className={classes.deleteBtn} onClick={handleDeleteOption}>
          <TiDeleteOutline />
        </div>
      </div>
      <div className={classes.priceDiv}>
        <input
          type="number"
          min="1"
          max={productQuantity}
          defaultValue="1"
          onChange={(event) => {
            handleUpdateOptionQuantity(event);
          }}
        />
        <div>{thisOptionPrice.toLocaleString("ko-KR")}원</div>
      </div>
    </div>
  );
}

export default SelectBoxOptionDiv;
