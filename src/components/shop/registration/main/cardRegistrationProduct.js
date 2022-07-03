import CommBtn from "components/common/commBtn";
import React from "react";
import { Link } from "react-router-dom";
import classes from "./cardRegistrationProduct.module.css";

function CardRegistrationProduct({ img, productName, productId }) {
  return (
    <div className={classes.flexDiv}>
      <div className={classes.productInfo}>
        <img src={img} alt="" />
        <p> {productName}</p>
      </div>

      {/* <Link className={classes.link} to=`/market/registration-product/admin/${productId}`> */}
      <Link className={classes.link} to="/market/registration-product/admin">
        <CommBtn btnWidth="130px" btnText="상품 정보 수정" />
      </Link>
    </div>
  );
}

export default CardRegistrationProduct;
