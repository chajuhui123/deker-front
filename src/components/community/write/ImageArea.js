import React, { useEffect, useRef, useState } from "react";
import classes from "./ImageArea.module.css";
import noImg from "img/noImg.png";
import PlusBtn from "./PlusBtn";
import { useDispatch, useSelector } from "react-redux";
import { communityAction } from "store/community-slice";
import { BASE_URL } from "module/common-module";

// TODO
// 1. 이미지 삭제 버튼
// 2. 상품 삭제 버튼
// 3. 상품 목록 영역
// 4. 이미지 다중으로 변경 (목록까지)
function ImageArea(props) {
  const dispatch = useDispatch();
  const pointArray = useSelector(
    (state) => state.community.product.communityProducts
  );
  const photoInputRef = useRef();
  const [prevImage, setPrevImage] = useState(null); // 미리보기 이미지
  const [isPoint, setIsPoint] = useState(false); // 상품 선택 가능여부
  useEffect(() => {
    if (!!props.imageFile) {
      setPrevImage(`${BASE_URL}${props.imageFile}`);
    }
  }, [props, props.imageFile]);
  // 이미지핸들러
  const imageHandler = (e) => {
    if (e.target.files.length > 0) {
      setPrevImage(URL.createObjectURL(e.target.files[0]));
      props.setImageFile(e.target.files[0]);
    }
  };
  // 이미지 파일추가 팝업
  const imageInputHandler = (e) => {
    photoInputRef.current.click();
  };
  // 상품 선택 가능여부 핸들러
  const onMarketHandler = (e) => {
    setIsPoint(true);
  };
  const offMarketHandler = (e) => {
    setIsPoint(false);
  };
  // 상품 팝업 생성 > 상품 선택 후 x, y, productId 저장
  const addMarketHandler = (e) => {
    if (isPoint) {
      const index = !pointArray ? 0 : pointArray.length;
      const productData = !pointArray ? [] : pointArray.concat();
      const positionObect = {
        id: index,
        offsetY: e.nativeEvent.offsetY,
        offsetX: e.nativeEvent.offsetX,
      };
      productData.push(positionObect);
      dispatch(
        communityAction.setProduct({
          communityProducts: productData,
        })
      );
      setIsPoint(false);
    }
  };

  return (
    <div className={classes.imgArea} style={{ margin: props.margin }}>
      {(prevImage && (
        <div
          className={classes.prevImage}
          style={{ cursor: isPoint ? "crosshair" : "default" }}
        >
          {pointArray &&
            pointArray.map((point) => (
              <PlusBtn
                key={point.id}
                id={point.id}
                top={point.offsetY}
                left={point.offsetX}
              />
            ))}
          <div className={classes.uploadDisplay}>
            <img
              alt="sample"
              src={prevImage || noImg}
              onClick={addMarketHandler}
            />
          </div>
          <div className={classes.buttonArea}>
            {(!isPoint && (
              <button onClick={onMarketHandler}>
                <svg
                  fill="none"
                  viewBox="0 0 8 8"
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.77.14H3.23v3.09H.14v1.54h3.09v3.09h1.54V4.77h3.09V3.23H4.77V.14z"
                    fill="currentColor"
                  ></path>
                </svg>
                상품 태그하기
              </button>
            )) || <button onClick={offMarketHandler}>편집완료</button>}
          </div>
        </div>
      )) || (
        <div className={classes.inputArea} onClick={imageInputHandler}>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="currentColor"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M11.952 9.778l2.397-5.994A1.778 1.778 0 0 1 16 2.667h16c.727 0 1.38.442 1.65 1.117l2.398 5.994h10.174c.982 0 1.778.796 1.778 1.778v32c0 .981-.796 1.777-1.778 1.777H1.778A1.778 1.778 0 0 1 0 43.556v-32c0-.982.796-1.778 1.778-1.778h10.174zM24 38c6.075 0 11-4.925 11-11s-4.925-11-11-11-11 4.925-11 11 4.925 11 11 11z"></path>
          </svg>
          <span>사진 올리기</span>
        </div>
      )}
      <input
        name="imgUpload"
        type="file"
        accept="image/*"
        ref={photoInputRef}
        onChange={imageHandler}
      />
    </div>
  );
}

export default ImageArea;
