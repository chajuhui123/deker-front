import React from "react";
import classes from "./registrationProductInfo.module.css";
import CommInput from "components/common/commInput";

function RegistrationProductInfo({ handleUploadImage }) {
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
            onChange={handleUploadImage}
          />
          <label className={classes.imgLabel} for="represent-img" />
        </div>
        <div className={classes.inputDiv}>
          {/* 2.카테고리 */}
          {/* 셀렉트 박스 추가 퍼블리싱 필요 */}
          <CommInput placeholder="옵션 카테고리" />
          {/* 3. 상품명  */}
          <CommInput placeholder="상품명" />
          {/* 4. 기본 가격  */}
          <CommInput type="number" placeholder="기본 가격" />
          {/* 5. 상품 판매 갯수  */}
          <CommInput
            type="number"
            placeholder="상품 판매 갯수"
            style={{ margin: "0px" }}
          />
        </div>
      </div>
    </>
  );
}

export default RegistrationProductInfo;
