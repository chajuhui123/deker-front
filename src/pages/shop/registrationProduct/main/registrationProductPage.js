import React, { useEffect, useState } from "react";
import classes from "./registrationProductPage.module.css";
import CommBtn from "components/common/commBtn";
import RegistrationProductInfo from "components/shop/registrationProduct/info/registrationProductInfo";
import RegistrationProductDetail from "components/shop/registrationProduct/detail/registrationProductDetail";
import RegistrationProductCategory from "components/shop/registrationProduct/category/registrationProductCategory";

const RegistrationProductPage = () => {
  // const _ = require("lodash");

  const [productRegistrationState, setProductRegistrationState] = useState({
    productImg: "",
    productInfo: {
      category: "",
      name: "",
      basePrice: 0,
      quantity: 0,
      explain: "",
    },
    productOption: [],
    productDetail: [],
  });

  const dummy_category = [
    { label: "가구", value: "" },
    { label: "가전제품", value: "" },
    { label: "조명", value: "" },
    { label: "사무용품", value: "" },
    { label: "데코", value: "" },
  ];

  // const dummy_productOptions = [
  //   {
  //     category: "색상",
  //     options: [
  //       { option: "black", addPrice: 0 },
  //       { option: "white", addPrice: 1000 },
  //       { option: "navy", addPrice: 2000 },
  //     ],
  //   },
  // ];

  const [productFiles, setProductFiles] = useState();

  // 상품 기본 정보

  const previewImage = () => {
    if (!productFiles) return;

    const imgElement = document.querySelector(".previewImg");
    const reader = new FileReader();

    reader.onload = () => {
      imgElement.style.backgroundImage = `url(${reader.result})`;
    };
    reader.readAsDataURL(productFiles[0]);
  };

  // 상품 카테고리

  // const handleAddCategory = () => {
  //   if (productOption.length >= 2) return;
  //   setProductOption((prev) => [
  //     ...prev,
  //     { category: "추후 props 값으로 수정", options: [] },
  //   ]);
  // };

  // const handleDeleteCategory = (categoryIndex) => {
  //   const copiedProductOption = _.cloneDeep(productOption);
  //   categoryIndex === 0
  //     ? copiedProductOption.shift()
  //     : copiedProductOption.pop();
  //   setProductOption(copiedProductOption);
  // };

  // const handleAddCategoryOption = (categoryIndex) => {
  //   const copiedProductOption = _.cloneDeep(productOption);
  //   copiedProductOption[categoryIndex].options.push({
  //     option: "",
  //     addPrice: 0,
  //   });
  //   setProductOption(copiedProductOption);
  // };

  // const handleDeleteCategoryOption = (categoryIndex) => {
  //   const copiedProductOption = _.cloneDeep(productOption);
  //   copiedProductOption[categoryIndex].options.pop();
  //   setProductOption(copiedProductOption);
  // };

  useEffect(() => {
    previewImage();
    return () => previewImage();
  });

  return (
    <div>
      <form>
        <h1>상품등록</h1>
        <div className={classes.section}>
          <RegistrationProductInfo
            setProductRegistrationState={setProductRegistrationState}
          />
        </div>

        <div className={classes.section}>
          <RegistrationProductCategory
            setProductRegistrationState={setProductRegistrationState}
          />
        </div>

        <div className={classes.section}>
          <RegistrationProductDetail
            setProductRegistrationState={setProductRegistrationState}
          />
        </div>

        <CommBtn
          btnText="상품 등록"
          fnClick={console.log(productRegistrationState)}
        />
      </form>
    </div>
  );
};

export default RegistrationProductPage;
