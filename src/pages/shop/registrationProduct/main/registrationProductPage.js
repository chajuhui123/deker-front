import React, { useEffect, useState } from "react";
import classes from "./registrationProductPage.module.css";
import CommBtn from "components/common/commBtn";
import RegistrationProductInfo from "components/shop/registrationProduct/info/registrationProductInfo";
import RegistrationProductDetail from "components/shop/registrationProduct/detail/registrationProductDetail";
import RegistrationProductCategory from "components/shop/registrationProduct/category/registrationProductCategory";

const RegistrationProductPage = () => {
  const dummy_category = [
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

  const dummy_product_detail = [{ image: "", description: "" }];

  const [productFiles, setProductFiles] = useState();
  const [productInfo, setProductInfo] = useState();
  const [productOption, setProductOption] = useState(dummy_productOptions);
  const [productDetail, setProductDetail] = useState(dummy_product_detail);

  // 상품 기본 정보

  const handleUploadImage = (event) => {
    const uploadFile = event.target.files;
    setProductFiles(uploadFile);
  };

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

  const handleAddCategory = () => {
    if (productOption.length >= 2) return;
    const tempOption = productOption.push({
      category: "예시",
      options: [],
    });
    setProductOption(tempOption);
    console.log(productOption);
  };

  const handleAddCategoryOption = () => {};

  // 상품 상세 설명

  const handleAddDetail = () => {
    const tempDetail = productDetail.push({ image: "", description: "" });
    setProductDetail(tempDetail);
  };

  useEffect(() => {
    previewImage();
    return () => previewImage();
  });

  return (
    <div>
      <h1>상품등록</h1>
      <div className={classes.section}>
        <RegistrationProductInfo handleUploadImage={handleUploadImage} />
      </div>

      <div className={classes.section}>
        <RegistrationProductCategory
          handleAddCategory={handleAddCategory}
          productOption={productOption}
        />
      </div>

      <div className={classes.section}>
        <RegistrationProductDetail
          productDetail={productDetail}
          handleAddDetail={handleAddDetail}
        />
      </div>

      <CommBtn btnText="상품 등록" />
    </div>
  );
};

export default RegistrationProductPage;
