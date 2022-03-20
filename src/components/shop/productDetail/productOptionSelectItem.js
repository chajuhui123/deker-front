import React, { useState } from "react";
import classes from "./productOptionSelectItem.module.css";

function ProductOptionSelectItem({
  productPrice: orginalPrice,
  options,
  selectedOption,
  setSelectedOption,
  opitonIdinBasket,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibleList = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectItem = (optionItem) => {
    const { option1Name, option1DataName, option2Name, option2DataName } =
      optionItem;

    setIsVisible(!isVisible);

    // 추가되어지지 않은 옵션이라면

    // if (!opitonIdinBasket.includes(optionId)) {
    setSelectedOption(selectedOption.concat(optionItem));
    //   opitonIdinBasket.push(optionId); // 추후 옵션에서 제거할 때 optionId 지우기
    // }
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
                  onClick={() => handleSelectItem(optionItem)}
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
