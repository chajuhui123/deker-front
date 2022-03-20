import React, { useState } from "react";
import classes from "./productOptionSelectItem.module.css";

function ProductOptionSelectItem({
  productPrice: orginalPrice,
  options,
  selectedOption,
  setSelectedOption,
  opitonIdInBasket,
  setOptionIdInBasket,
}) {
  const [isVisible, setIsVisible] = useState(false);

  const setVisibleList = () => {
    setIsVisible(!isVisible);
  };

  const handleSelectItem = (optionItem) => {
    const { mktProductId } = optionItem;

    setIsVisible(!isVisible);

    // 아래 존재하지 않는 옵션이라면 추가 가능
    if (!opitonIdInBasket.includes(mktProductId)) {
      setSelectedOption(
        selectedOption.concat({ ...optionItem, orderQuantity: 1 })
      );
      setOptionIdInBasket((prev) => [...prev, mktProductId]); // 추후 옵션에서 제거할 때 optionId 지우기
    }
  };

  return (
    <>
      <div className={classes.selectItemDiv} onClick={setVisibleList}>
        <div>--- 옵션을 선택해주세요 ---</div>
        {isVisible && (
          <div className={classes.selectableList}>
            {options.map((optionItem) => {
              const {
                mktProductId,
                option1Name,
                option1DataName,
                option2Name,
                option2DataName,
                productPrice,
              } = optionItem;
              return (
                <div
                  key={mktProductId}
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
