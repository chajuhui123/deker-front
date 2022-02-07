import React from "react";
import noImg from "img/noImg.png";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

function ProductDetailInfo({ productDetailObj }) {
  const productDetailExplainArr = productDetailObj.productDetailExplainArr;
  // console.log("productDetailObj >>>>> ", productDetailObj);
  return (
    <div style={{ textAlign: "center", marginBlock: "100px" }}>
      {productDetailExplainArr?.map((productDetail) => {
        return (
          <div style={{ marginBlock: "30px" }}>
            <p>{productDetail.detailExplain}</p>
            <img
              src={`${BASE_URL}${productDetail.detailImg}` || noImg}
              alt=""
              style={{ height: "450px" }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ProductDetailInfo;
