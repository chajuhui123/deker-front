import React from "react";
import CommInput from "components/common/commInput";

function RegistrationProductInfo({ handleUploadImage }) {
  return (
    <>
      <h3>기본 정보</h3>
      {/* 1. 상품 대표 이미지  */}
      <input type="file" accept="img/*" onChange={handleUploadImage} />
      <div
        className="previewImg"
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#f0f0f0",
          backgroundSize: "cover",
        }}
      />
      {/* 2.카테고리 */}
      {/* 셀렉트 박스 추가 퍼블리싱 필요 */}
      <CommInput placeholder="옵션 카테고리" />
      {/* 3. 상품명  */}
      <CommInput placeholder="상품명" />
      {/* 4. 기본 가격  */}
      <CommInput type="number" placeholder="기본 가격" />
      {/* 5. 상품 판매 갯수  */}
      <CommInput type="number" placeholder="상품 판매 갯수" />
    </>
  );
}

export default RegistrationProductInfo;
