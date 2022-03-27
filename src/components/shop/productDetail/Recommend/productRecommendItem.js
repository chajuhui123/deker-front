import React from "react";
import classes from "./productRecommendItem.module.css";
import noImg from "img/noImg.png";
import { useHistory } from "react-router-dom";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function ProductRecommendItem({ productRecommeend }) {
  const history = useHistory();
  const productDetailHandler = () => {
    history.push(`/market/detail/${productRecommeend.productId}`);
  };

  return (
    <div className={classes.recommendItemBox} onClick={productDetailHandler}>
      <img
        className={classes.recommendItemImg}
        src={BASE_URL + productRecommeend.productImg || noImg}
        alt="상품이미지"
      />
      <p className={classes.recommendItemText}>
        {productRecommeend.productName}
      </p>
      <p className={classes.recommendItemText}>
        {productRecommeend.productPrice.toLocaleString("ko-KR")} 원
      </p>
    </div>
  );
}

export default ProductRecommendItem;
