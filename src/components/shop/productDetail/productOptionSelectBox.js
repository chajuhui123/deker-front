import React from "react";
import classes from "./productOptionSelectBox.module.css";
import CommBtn from "components/common/commBtn";
import CommSelect from "components/common/CommSelect";
import CommonPageTitle from "components/common/commPageTitle";
import noImg from "img/noImg.png";
import SelectBoxOptionDiv from "./selectBoxOptionDiv";

function ProductOptionSelectBox({ productDetailObj }) {
  const options = [];
  productDetailObj.productDetailOptionArr?.forEach(
    (productDetailOption, index) => {
      options.push({
        value: index,
        label: `${productDetailOption.option1Name} : ${
          productDetailOption.option1DataName
        } / ${productDetailOption.option2Name} : ${
          productDetailOption.option2DataName
        } (+${productDetailOption.productPrice.toLocaleString("ko-KR")})`,
      });
    }
  );
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
        {/* <BuyItemInfomation
          text=""
          component={
            <CommSelect options={options} placeholder="-- 옵션 선택 --" />
          }
        /> */}
        <SelectBoxOptionDiv
          text="옵션"
          component={
            <CommSelect options={options} placeholder="-- 옵션 선택 --" />
          }
        />
        {/* <div className={classes.buyItemInfoDiv}>
          <p>옵션</p>
          <CommSelect options={options} placeholder="-- 옵션 선택 --" />
        </div> */}
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
          <CommBtn
            btnText="장바구니"
            bgColor="white"
            txColor="#4242e2"
            btnWidth="50%"
          />
          <CommBtn btnText="바로구매" btnWidth="50%" />
          {/* <button>장바구니</button>
          <button>바로구매</button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
