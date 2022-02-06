import React from "react";
import classes from "./productOptionSelectBox.module.css";
import CommBtn from "components/common/commBtn";
import CommSelect from "components/common/CommSelect";
import CommonPageTitle from "components/common/commPageTitle";
import noImg from "img/noImg.png";

function ProductOptionSelectBox({ productDetailObj }) {
  const options = [];
  productDetailObj.productDetailOptionArr.map((productDetailOption, index) => {
    options.push({
      value: index,
      label: `${productDetailOption.option1Name} : ${
        productDetailOption.option1DataName
      } / ${productDetailOption.option2Name} : ${
        productDetailOption.option2DataName
      } (+${productDetailOption.productPrice.toLocaleString("ko-KR")})`,
    });
  });
  const productQuantity = "10";

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productDetailObj.productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productDetailObj.productName} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productDetailObj.productPrice.toLocaleString("ko-KR")}</p>
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>옵션</p>
          <CommSelect options={options} placeholder="-- 옵션 선택 --" />
        </div>
        <div className={classes.buyItemInfoDiv}>
          <p>수량</p>
          <input
            className={classes.inputQuantity}
            type="number"
            min="1"
            max={productQuantity}
            defaultValue="0"
          />
        </div>
        <p>주문금액</p>
        <div className={classes.btnBox}>
          <CommBtn btnText="Buy Now" btnWidth="200px" />
          <CommBtn
            btnText="Add Cart"
            btnWidth="200px"
            bgColor="white"
            txColor="#4242e2"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
