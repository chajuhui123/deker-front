import React, { useState } from "react";
import classes from "./productOptionSelectItem.module.css";

function ProductOptionSelectItem({ options }) {
  const [selectedItem, setSelectedItem] = useState("옵션을 선택해주세요");
  const [isVisible, setIsVisible] = useState(false);

  const setVisibleList = () => {
    setIsVisible(!isVisible);
  };
  const selectItem = (value) => {
    setIsVisible(!isVisible);
    setSelectedItem(value.target.innerText);
  };

  console.log(options);
  return (
    <>
      <div className={classes.selectItemDiv} onClick={setVisibleList}>
        {selectedItem}
        {isVisible && (
          <div className={classes.selectableList}>
            {options.map((optionItem) => {
              const {
                option1Name,
                option1DataName,
                option2Name,
                option2DataName,
                productPrice,
              } = optionItem;
              console.log(optionItem);
              return (
                <div className={classes.selectableItem} onClick={selectItem}>
                  {option1Name}: {option1DataName} / {option2Name}:{" "}
                  {option2DataName} (+{productPrice.toLocaleString("ko-KR")})
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default ProductOptionSelectItem;
