import React from "react";
import classes from "./registrationProductInfo.module.css";
import CommInput from "components/common/commInput";

function RegistrationProductInfo({ setProductRegistrationState }) {
  const handleChangeProductInfo = (changeObj) => {
    setProductRegistrationState((prev) => {
      return {
        ...prev,
        productInfo: {
          ...prev.productInfo,
          ...changeObj,
        },
      };
    });
  };

  return (
    <>
      <h3>기본 정보</h3>
      <div className={classes.flex}>
        <div className={classes.imgDiv}>
          {/* 1. 상품 대표 이미지  */}
          <input
            className={classes.imgInput}
            id="represent-img"
            type="file"
            accept="img/*"
            onChange={(changeData) =>
              setProductRegistrationState((prev) => {
                return { ...prev, productImg: changeData };
              })
            }
          />
          <label className={classes.imgLabel} for="represent-img" />
        </div>
        <div className={classes.inputDiv}>
          {/* 2.카테고리 */}
          {/* 셀렉트 박스 추가 퍼블리싱 필요 */}
          <CommInput
            placeholder="옵션 카테고리"
            onChange={(changeData) =>
              handleChangeProductInfo({ category: changeData.target.value })
            }
          />
          {/* 3. 상품명  */}
          <CommInput
            placeholder="상품명"
            onChange={(changeData) =>
              handleChangeProductInfo({ name: changeData.target.value })
            }
          />
          {/* 4. 기본 가격  */}
          <CommInput
            type="number"
            placeholder="기본 가격"
            onChange={(changeData) =>
              handleChangeProductInfo({
                basePrice: Number(changeData.target.value),
              })
            }
          />
          {/* 5. 상품 판매 갯수  */}
          <CommInput
            type="number"
            placeholder="상품 판매 갯수"
            onChange={(changeData) =>
              handleChangeProductInfo({
                quantity: Number(changeData.target.value),
              })
            }
          />
          {/* 6. 상품 소개  */}
          <CommInput
            placeholder="상품 소개"
            style={{ margin: "0px" }}
            onChange={(changeData) =>
              handleChangeProductInfo({
                explain: changeData.target.value,
              })
            }
          />
        </div>
      </div>
    </>
  );
}

export default RegistrationProductInfo;
