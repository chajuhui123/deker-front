import React from "react";
import classes from "./productRecommendItem.module.css";
import noImg from "img/noImg.png";
import { useHistory } from "react-router-dom";

function ProductRecommendItem({ productRecommeend }) {
  const history = useHistory();
  const productDetailHandler = () => {
    history.push(`/store/${productRecommeend.productId}`);
  };

  return (
    <div className={classes.recommendItemBox} onClick={productDetailHandler}>
      <img
        className={classes.recommendItemImg}
        src={productRecommeend.productImg || noImg}
        alt="상품이미지"
      />
      <p className={classes.recommendItemText}>
        {productRecommeend.productName}
      </p>
      <p className={classes.recommendItemText}>
        {productRecommeend.productPrice} 원
      </p>
    </div>
  );
}

export default ProductRecommendItem;
