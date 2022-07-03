import React, { useState } from "react";
import classes from "./registrationProductDetail.module.css";
import CommInput from "components/common/commInput";
import AddButton from "components/common/addButton/addButton";
import DeleteButton from "components/common/deleteButton/deleteButton";

function RegistrationProductDetail({ setProductRegistrationState }) {
  const [productPhoto, setProductPhoto] = useState();
  const [productExplain, setProductExplain] = useState("");
  const [productDetail, setProductDetail] = useState([]);

  const resetInputState = () => {
    setProductPhoto();
    setProductExplain("");
  };

  const handleAddDetail = () => {
    if (productExplain === "") return;

    const inputStateObj = { img: productPhoto, detailExplain: productExplain };

    setProductDetail((prev) => [...prev, inputStateObj]);
    setProductRegistrationState((prev) => {
      return {
        ...prev,
        productDetail: [...prev.productDetail, inputStateObj],
      };
    });

    resetInputState();
  };

  const handleDeleteDetail = (index) => {
    setProductDetail((prev) => {
      const removed = prev.splice(index, 1);
      return [...prev];
    });
    setProductRegistrationState((prev) => {
      const removed = prev.productDetail.splice(index, 1);
      return {
        ...prev,
        productDetail: [...prev.productDetail],
      };
    });
  };

  return (
    <>
      <h3>상품 상세 설명</h3>
      <div className={classes.inputFlex}>
        <div className={classes.photoInput}>
          <input
            className={classes.imgFileInput}
            id="detail-img"
            type="file"
            accept="img/*"
            onChange={(event) => {
              setProductPhoto(event.target.files[0]);
            }}
          />
          <label className={classes.imgInputLabel} for="detail-img">
            {productPhoto && (
              <img
                className={classes.imgInputPreview}
                src={URL.createObjectURL(productPhoto)}
                alt="미리보기"
              />
            )}
          </label>
        </div>
        <div className={classes.infoInput}>
          <CommInput
            placeholder="상품 설명"
            style={{ width: "100%", height: "200px" }}
            onChange={(event) => {
              setProductExplain(event.target.value);
            }}
          />
        </div>

        <AddButton onClick={handleAddDetail} />
      </div>

      {productDetail?.map((detail, index) => {
        return (
          <div
            key={index}
            className={classes.productDetail}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* 이미지 파일명? 혹은 이미지 미리보기로 대체 */}
            <img
              className={classes.imgInputPreview}
              src={URL.createObjectURL(detail.img)}
              alt="미리보기"
              width="300px"
            />
            <p className={classes.productDetailExplain}>
              {detail.detailExplain}
            </p>
            <DeleteButton onClick={() => handleDeleteDetail(index)} />
          </div>
        );
      })}
    </>
  );
}

export default RegistrationProductDetail;
