import React from "react";
import CommInput from "components/common/commInput";
import DeleteButton from "components/common/deleteButton/deleteButton";
import AddSectionButton from "components/common/addSectionButton/addSectionButton";

function RegistrationProductDetail({
  productDetail,
  handleAddDetail,
  handleDeleteDetail,
}) {
  return (
    <>
      <h3>상품 상세 설명</h3>

      {productDetail?.map((detail) => {
        return (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>이미지 추가</div>
            <CommInput placeholder="상품 설명" />
            <DeleteButton onClick={handleDeleteDetail} />
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
