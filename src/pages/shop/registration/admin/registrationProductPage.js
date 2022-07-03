import React, { useState } from "react";
import classes from "./registrationProductPage.module.css";
import CommBtn from "components/common/commBtn";
import RegistrationProductInfo from "components/shop/registration/admin/info/registrationProductInfo";
import RegistrationProductDetail from "components/shop/registration/admin/detail/registrationProductDetail";
import RegistrationProductCategory from "components/shop/registration/admin/category/registrationProductCategory";

const RegistrationProductPage = () => {
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

  console.log(productRegistrationState);

  const dummy_category = [
    { label: "가구", value: "" },
    { label: "가전제품", value: "" },
    { label: "조명", value: "" },
    { label: "사무용품", value: "" },
    { label: "데코", value: "" },
  ];

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
