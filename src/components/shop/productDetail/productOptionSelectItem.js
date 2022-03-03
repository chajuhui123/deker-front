import React, { useState } from "react";
import classes from "./productOptionSelectItem.module.css";

function ProductOptionSelectItem({ options }) {
  const [selectedItem, setSelectedItem] = useState("-- 옵션을 선택해주세요 --");
  const [isVisible, setIsVisible] = useState(false);
  const setVisibleList = () => {
    setIsVisible(!isVisible);
  };
  const selectItem = (value) => {
    console.log(value);
    setIsVisible(!isVisible);
    setSelectedItem(value.target.innerText);
  };

  return (
    <>
      <div className={classes.selectItemDiv} onClick={setVisibleList}>
        {selectedItem}
      </div>
      {isVisible && (
        <div className={classes.selectableList}>
          {options.map((item) => {
            return (
              <div className={classes.selectableItem} onClick={selectItem}>
                {item.label}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ProductOptionSelectItem;
