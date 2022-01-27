import React from "react";
import classes from "./infoProduct.module.css";
import noImg from "img/noImg.png";
import { useHistory } from "react-router-dom";

/**
 * 상품 컴포넌트
 * @param {String} productId : 상품 아이디
 * @param {String} productImg : 상품 이미지 경로
 * @param {String} brandName : 상품 브랜드명
 * @param {String} productName : 상품 명
 * @param {Array} productOption : 상품 옵션 (사이즈, 색상)
 * @returns
 */
function InfoProduct({
  productId,
  productImg,
  brandName,
  productName,
  productOption,
}) {
  const history = useHistory();
  const productDetailHandler = () => {
    history.push("/productDetail/" + productId);
  };
  return (
    <div className={classes.prodArea}>
      <img
        className={classes.prodImg}
        src={productImg || noImg}
        alt="상품이미지"
        onClick={productDetailHandler}
      />
      <div className={classes.prodInfoArea}>
        <div className={classes.prodBrand}>{brandName}</div>
        <div className={classes.prodName}>{productName}</div>
        {(productOption && (
          <div className={classes.prodOption}>
            {productOption.map((option) => {
              return <p>{option}</p>; // 옵션 컴포넌트
            })}
          </div>
        )) || <div className={classes.prodOption}>옵션 없음</div>}
      </div>
    </div>
  );
}

export default InfoProduct;
