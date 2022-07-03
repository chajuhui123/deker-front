import CardRegistrationProduct from "components/shop/registration/main/cardRegistrationProduct";
import React, { useEffect } from "react";

const RegistrationProductItemPage = () => {
  const DUMMY_ITEMS = [
    { img: "", productName: "테스트1" },
    { img: "", productName: "테스트2" },
    { img: "", productName: "테스트3" },
  ];

  useEffect(() => {
    // 권한 확인 state 정의
    // 권한 요청
    // 권한 확인
  });

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
