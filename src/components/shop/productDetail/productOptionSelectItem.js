import React, { useState } from "react";
import classes from "./productOptionSelectItem.module.css";

function ProductOptionSelectItem({
  productPrice: orginalPrice,
  options,
  selectedOption,
  setSelectedOption,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibleList = () => {
    setIsVisible(!isVisible);
  };

  const selectItem = (
    option1Name,
    option1DataName,
    option2Name,
    option2DataName
  ) => {
    setIsVisible(!isVisible);
    setSelectedOption(
      selectedOption.concat({
        option1Name,
        option1DataName,
        option2Name,
        option2DataName,
      })
    );
  };

  return (
    <>
      <div className={classes.selectItemDiv} onClick={setVisibleList}>
        <div>--- 옵션을 선택해주세요 ---</div>
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
              return (
                <div
                  className={classes.selectableItem}
                  onClick={() =>
                    selectItem(
                      option1Name,
                      option1DataName,
                      option2Name,
                      option2DataName,
                      productPrice
                    )
                  }
                >
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
