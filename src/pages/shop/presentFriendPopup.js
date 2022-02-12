import CommPageSemiTitle from "components/common/commPageSemiTitle";
import React, { useState } from "react";
import classes from "./presentFriendPopup.module.css";

function PresentFriendPopup(props) {
  const [productLinkInputText, setProductLinkInputText] = useState("");

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  // back 통신해서 받아오기
  const productSearchHandler = () => {
    // back 통신해서 받아오기
  };

  return (
    <div className={classes.productSalesLinkLayout}>
      <CommPageSemiTitle semiTitle="선물할 친구를 선택해주세요" />
      <div className={classes.presentMain}>
        <div className={classes.productSearchArea}>
          <input
            className={classes.productInput}
            type="text"
            value={productLinkInputText}
            placeholder="친구 검색"
            onChange={productLinkInputHandler}
          />
          <button
            className={classes.productSearchBtn}
            onClick={productSearchHandler}
          >
            검색
          </button>
        </div>
        <div className={classes.selectedProduct}>
          {/* 더미데이터 시작 */}
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
            />
            <div className={classes.productInfo}>
              <div>회원아이디</div>
            </div>
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
            />
            <div className={classes.productInfo}>
              <div>회원아이디</div>
            </div>
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
            />
            <div className={classes.productInfo}>
              <div>회원아이디</div>
            </div>
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/309/59932b0eb046f9fa3e063b8875032edd_crop.jpeg"
            />
            <div className={classes.productInfo}>
              <div>회원아이디</div>
            </div>
          </div>
          {/* 더미 끝 */}
        </div>
      </div>
    </div>
  );
}

export default PresentFriendPopup;
