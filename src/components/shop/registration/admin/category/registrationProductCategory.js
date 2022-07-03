import React, { useState } from "react";
import classes from "./registrationProductCategory.module.css";
import CommInput from "components/common/commInput";
import AddButton from "components/common/addButton/addButton";
import DeleteButton from "components/common/deleteButton/deleteButton";

function RegistrationProductCategory({ setProductRegistrationState }) {
  const [optionCategory, setOptionCategory] = useState("");
  const [productOption, setProductOption] = useState([]);

  // 카테고리 추가
  const handleAddCategory = () => {
    if (optionCategory === "" || productOption.length >= 2) return;
    setProductOption((prev) => [
      ...prev,
      { category: optionCategory, options: [] },
    ]);
    setOptionCategory("");
  };

  // 카테고리 제거
  const handleDeleteCategory = (index) => {
    setProductOption((prev) => {
      console.log(prev);
      const removed = prev.splice(index, 1);
      return [...prev];
    });
  };

  // 카테고리 옵션 추가
  const handleAddCategoryOption = () => {
    setProductOption((prev) => [
      ...prev,
      { category: optionCategory, options: [] },
    ]);
    setProductRegistrationState((prev) => []);
    setOptionCategory("");
  };

  // 카테고리 옵션 제거
  const handleDeleteCategoryOption = (index) => {
    setProductOption((prev) => {
      console.log(prev);
      const removed = prev.splice(index, 1);
      return [...prev];
    });
  };

  return (
    <>
      <h3>상품 옵션</h3>
      {/* 6. 옵션(옵션별 가격)  */}
      {/* 옵션 카테고리는 최대 2개 추가 가능 */}
      {/* 옵션 카테고리 별로 옵션 아이템 추가 */}
      <div className={classes.flexDiv}>
        <CommInput
          placeholder="옵션 카테고리"
          onChange={(event) => setOptionCategory(event.target.value)}
          style={{ width: "80%" }}
        />
        <AddButton onClick={handleAddCategory} />
      </div>
      {/* 해당 블록 최대 2개 */}
      {productOption?.map((category, categoryIdx) => {
        return (
          <div className={classes.categorySection}>
            <div className={classes.categoryName}>
              <div>옵션 카테고리 : {category.category}</div>
              <DeleteButton
                color="#B30000"
                size={20}
                onClick={() => handleDeleteCategory(categoryIdx)}
                style={{ margin: "0 0 0 5px" }}
              />
            </div>
            <div className={classes.flexDiv}>
              <CommInput
                type="string"
                placeholder="옵션"
                style={{ width: "40%" }}
              />
              <CommInput
                type="number"
                placeholder="추가 가격"
                style={{ width: "40%" }}
              />
              <AddButton onClick={console.log("추가")} />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default RegistrationProductCategory;
