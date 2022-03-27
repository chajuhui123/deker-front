import React from "react";
import noImg from "img/noImg.png";
import classes from "./productDetailInfo.module.css";
import { BASE_URL } from "module/common-module";

function ProductDetailInfo({ productDetailObj }) {
  const productDetailExplainArr = productDetailObj.productDetailExplainArr;
  return (
    <div style={{ textAlign: "center", marginBlock: "100px" }}>
      {productDetailExplainArr?.map((productDetail, index) => {
        return (
          <div key={index}>
            <p className={classes.detailInfoText}>
              {productDetail.detailExplain}
            </p>
            <img
              className={classes.detailInfoImg}
              src={`${BASE_URL}${productDetail.detailImg}` || noImg}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailInfo;
