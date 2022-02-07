import React from "react";
import classes from "./box.module.css";
import ProductRecommendItem from "./productRecommendItem";

function ProductRecommendBox({ productRecommendObj }) {
  const recommendsArr = productRecommendObj.recommendsArr;
  return (
    <div className={classes.boxDiv}>
      <h1 className={classes.contentTitle}>함께하면 좋은 상품</h1>
      <hr />
      <div style={{ display: "flex" }}>
        {recommendsArr?.map((productRecommeend) => {
          return <ProductRecommendItem productRecommeend={productRecommeend} />;
        })}
      </div>
    </div>
  );
}

export default ProductRecommendBox;
