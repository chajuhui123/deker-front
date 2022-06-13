import React from "react";
import classes from "./registrationProductCategory.module.css";
import CommInput from "components/common/commInput";
import AddButton from "components/common/addButton/addButton";
import DeleteButton from "components/common/deleteButton/deleteButton";
import AddSectionButton from "components/common/addSectionButton/addSectionButton";

function RegistrationProductCategory({
  register,
  productOption,
  handleAddCategory,
  handleDeleteCategory,
  handleAddCategoryOption,
  handleDeleteCategoryOption,
}) {
  return (
    <>
      <h3>상품 옵션</h3>
      {/* 6. 옵션(옵션별 가격)  */}
      {/* 옵션 카테고리는 최대 2개 추가 가능 */}
      {/* 옵션 카테고리 별로 옵션 아이템 추가 */}
      <div className={classes.flexDiv}>
        <CommInput placeholder="옵션 카테고리" style={{ width: "80%" }} />
        <AddButton onClick={handleAddCategory} />
      </div>
      {/* 해당 블록 최대 2개 */}
      {productOption?.map((category, categoryIdx) => {
        return (
          <div className={classes.categorySection}>
            <div className={classes.categoryName}>
              <div>카테고리 : {category.category}</div>
              <DeleteButton
                color="#B30000"
                size={20}
                onClick={handleDeleteCategory}
                style={{ margin: "0 0 0 5px" }}
              />
            </div>
            {category?.options?.map((option) => {
              return (
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
                  <DeleteButton
                    onClick={() => handleDeleteCategoryOption(categoryIdx)}
                  />
                </div>
              );
            })}
            <AddSectionButton
              sectionName={`${category.category} 옵션 추가`}
              onClick={() => handleAddCategoryOption(categoryIdx)}
            />
          </div>
        );
      })}
    </>
  );
}

export default RegistrationProductCategory;
