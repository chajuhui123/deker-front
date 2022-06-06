import React from "react";
import classes from "./registrationProductPage.module.css";
import CommInput from "components/common/commInput";
import CommSelect from "components/common/CommSelect";

const RegistrationProductPage = () => {
  const categoryOptions = [
    { label: "가구", value: "" },
    { label: "가전제품", value: "" },
    { label: "조명", value: "" },
    { label: "사무용품", value: "" },
    { label: "데코", value: "" },
  ];

  return (
    <div>
      <h1>상품등록</h1>
      <div className={classes.section}>
        <h3>기본 정보</h3>
        {/* 1. 상품 대표 이미지  */}
        {/* 2.카테고리 */}
        {/* 셀렉트 박스 추가 퍼블리싱 필요 */}
        <CommSelect width="100%" options={categoryOptions} />
        {/* 3. 상품명  */}
        <CommInput placeholder="상품명" />
        {/* 4. 기본 가격  */}
        <CommInput type="number" placeholder="기본 가격" />
        {/* 5. 상품 판매 갯수  */}
        <CommInput type="number" placeholder="상품 판매 갯수" />
      </div>

      <div className={classes.section}>
        <h3>상품 옵션</h3>
        {/* 6. 옵션(옵션별 가격)  */}
        {/* 옵션 카테고리는 최대 2개 추가 가능 */}
        {/* 옵션 카테고리 별로 옵션 아이템 추가 */}
        <div className={classes.flexDiv}>
          <CommInput placeholder="옵션 카테고리" style={{ width: "80%" }} />
          <div>추가버튼</div>
        </div>
        {/* 해당 블록 최대 2개 */}
        <div className={classes.flexDiv}>
          <div style={{ width: "15%" }}>옵션 카테고리 라벨 : </div>
          <CommInput
            type="number"
            placeholder="옵션"
            style={{ width: "40%" }}
          />
          <CommInput
            type="number"
            placeholder="추가 가격"
            style={{ width: "40%" }}
          />
          <div>삭제 버튼</div>
        </div>
        <div>옵션 카테고리1 옵션 추가 버튼</div>
      </div>

      <div className={classes.section}>
        <h3>상품 상세 설명</h3>
        {/* 7. 상품 설명 (텍스트 + 이미지 한 묶음씩 추가 가능)  */}
        <div className={classes.flexDiv}>
          <div>이미지 추가</div>
          <CommInput placeholder="상품 설명" />
          <div>제거 버튼</div>
        </div>
        <div>상품 설명 단락 추가</div>
      </div>
    </div>
  );
};

export default RegistrationProductPage;
