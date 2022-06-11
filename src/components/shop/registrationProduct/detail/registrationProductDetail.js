import AddSectionButton from "components/common/addSectionButton/addSectionButton";
import CommInput from "components/common/commInput";
import DeleteButton from "components/common/deleteButton/deleteButton";
import React, { useEffect } from "react";

function RegistrationProductDetail({ productDetail, handleAddDetail }) {
  console.log("productDetail : ", productDetail);
  return (
    <>
      <h3>상품 상세 설명</h3>
      {/* 7. 상품 설명 (텍스트 + 이미지 한 묶음씩 추가 가능)  */}

      {productDetail?.map((detail) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>이미지 추가</div>
            <CommInput placeholder="상품 설명" />
            <DeleteButton />
          </div>
        );
      })}

      <AddSectionButton
        sectionName="상품 설명 단락 추가"
        onClick={handleAddDetail}
      />
    </>
  );
}

export default RegistrationProductDetail;
