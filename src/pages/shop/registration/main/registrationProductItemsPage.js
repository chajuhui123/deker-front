import CardRegistrationProduct from "components/shop/registration/main/cardRegistrationProduct";
import React from "react";

const RegistrationProductItemPage = () => {
  const DUMMY_ITEMS = [
    { img: "", productName: "테스트1" },
    { img: "", productName: "테스트2" },
    { img: "", productName: "테스트3" },
  ];

  return (
    <div>
      <h1>등록 상품 목록</h1>
      {DUMMY_ITEMS.map((item) => {
        return (
          <CardRegistrationProduct
            img={item.img}
            productName={item.productName}
          />
        );
      })}
    </div>
  );
};

export default RegistrationProductItemPage;
