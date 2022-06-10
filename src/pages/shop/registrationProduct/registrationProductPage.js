import React, { useState } from "react";
import classes from "./registrationProductPage.module.css";
import CommInput from "components/common/commInput";
import CommSelect from "components/common/CommSelect";
import AddButton from "components/common/addButton/addButton";
import DeleteButton from "components/common/deleteButton/deleteButton";
import AddSectionButton from "components/common/addSectionButton/addSectionButton";
import CommBtn from "components/common/commBtn";

const RegistrationProductPage = () => {
  const categoryOptions = [
    { label: "가구", value: "" },
    { label: "가전제품", value: "" },
    { label: "조명", value: "" },
    { label: "사무용품", value: "" },
    { label: "데코", value: "" },
  ];

  const dummy_productOptions = [
    {
      category: "색상",
      options: [
        { option: "black", addPrice: 0 },
        { option: "white", addPrice: 1000 },
        { option: "navy", addPrice: 2000 },
      ],
    },
  ];

  const [productInfo, setProductInfo] = useState();
  const [productOption, setProductOption] = useState(dummy_productOptions);

  const handleAddCategoryOption = () => {
    if (productOption.length >= 2) return;
    const tempOption = productOption.push({
      category: "예시",
      options: [],
    });
    setProductOption(tempOption);
    console.log(productOption);
  };

  return (
    <div>
      <h1>상품등록</h1>
      <div className={classes.section}>
        <h3>기본 정보</h3>
        {/* 1. 상품 대표 이미지  */}
        {/* 2.카테고리 */}
        {/* 셀렉트 박스 추가 퍼블리싱 필요 */}
        <CommInput placeholder="옵션 카테고리" />
        {/* 3. 상품명  */}
        <CommInput placeholder="상품명" />
        {/* 4. 기본 가격  */}
        <CommInput type="number" placeholder="기본 가격" />
        {/* 5. 상품 판매 갯수  */}
        <CommInput type="number" placeholder="상품 판매 갯수" />
      </div>

      <div className={classes.section}>
        <h3>상품 옵션</h3>
        {/* 6. 옵션(옵션별 가격)  */}
        {/* 옵션 카테고리는 최대 2개 추가 가능 */}
        {/* 옵션 카테고리 별로 옵션 아이템 추가 */}
        <div className={classes.flexDiv}>
          <CommInput placeholder="옵션 카테고리" style={{ width: "80%" }} />
          <AddButton onClick={handleAddCategoryOption} />
        </div>
        {/* 해당 블록 최대 2개 */}
        {productOption?.map((category) => {
          return (
            <div className={classes.categorySection}>
              <div className={classes.categoryName}>
                카테고리 : {category.category}
              </div>
              {category?.options?.map((option) => {
                return (
                  <div className={classes.flexDiv}>
                    <CommInput
                      type="number"
                      placeholder="옵션"
                      style={{ width: "40%" }}
                    />
                    <CommInput
                      type="number"
                      placeholder="추가 가격"
                      style={{ width: "40%" }}
                    />
                    <DeleteButton />
                  </div>
                );
              })}
              <AddSectionButton
                sectionName={`${category.category} 옵션 추가`}
              />
            </div>
          );
        })}
      </div>

      <div className={classes.section}>
        <h3>상품 상세 설명</h3>
        {/* 7. 상품 설명 (텍스트 + 이미지 한 묶음씩 추가 가능)  */}
        <div className={classes.flexDiv}>
          <div>이미지 추가</div>
          <CommInput placeholder="상품 설명" />
          <DeleteButton />
        </div>
        <AddSectionButton sectionName="상품 설명 단락 추가" />
      </div>
      <CommBtn btnText="상품 등록" />
    </div>
  );
};

export default RegistrationProductPage;
