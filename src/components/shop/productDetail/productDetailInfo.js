import React from "react";
import noImg from "img/noImg.png";

function ProductDetailInfo({ productDetailObj }) {
  const productDetailExplainArr = productDetailObj.productDetailExplainArr;
  return (
    <div style={{ textAlign: "center", marginBlock: "100px" }}>
      {productDetailExplainArr.map((productDetail) => {
        return (
          <div style={{ marginBlock: "30px" }}>
            <p>{productDetail.detailExplain}</p>
            <img
              src={productDetail.detailImg || noImg}
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
