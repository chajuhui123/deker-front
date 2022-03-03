import { postApi } from "api/fetch-api";
import CommBtn from "components/common/commBtn";
import ProductList from "pages/shop/productList";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { modalAction } from "store/modal-slice";
import OuterPrdct from "./outerPrdct";
import classes from "./productSalesLinkPage.module.css";

function ProductSalesLink(props) {
  const dispatch = useDispatch();
  const [productLinkInputText, setProductLinkInputText] = useState("");
  const [productLists, setProductLists] = useState(null);
  // 상품 선택 props로 받아오는 이벤트 일단 주석
  // const [productClick, setProductClick] = useState(false);

  const productClickHandler = (data) => {
    //   setProductClick(data);
    //   console.log(productClick);
  };

  const outerProductHandler = () => {
    dispatch(
      modalAction.modalPopup({
        isOpen: true,
        cont: (
          <OuterPrdct
            id={props.id}
            productInfoHandler={props.productInfoHandler}
          />
        ),
      })
    );
  };

  // 내부 상품 등록
  const productLinkInputHandler = (e) => {
    setProductLinkInputText(e.target.value);
  };

  // back 통신해서 받아오기
  const productSearchHandler = () => {
    console.log("keyword보기: " + productLinkInputText);
    const formData = new FormData();
    formData.append("keyword", productLinkInputText);

    // FormData의 값 확인
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    dispatch(postApi("nmb/mkt/get/reg-product", formData, fnCallback));
  };

  const fnCallback = (res) => {
    if (!!res) {
      setProductLists(res.data.productModels);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  const dummyClick = () => {
    const dataObject = {
      id: props.id,
      productId: "PDTID_00000000000000",
    };
    props.productInfoHandler(dataObject);

    // modal close
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };

  const modalCloseBtnHandler = () => {
    // modal close
    dispatch(modalAction.modalPopup({ isOpen: false }));
  };
  return (
    <div className={classes.productSalesLinkLayout}>
      <div className={classes.mainArea}>
        <div className={classes.productSearchArea}>
          <input
            className={classes.productInput}
            type="text"
            value={productLinkInputText}
            placeholder="상품 이름을 임력 해주세요."
            onChange={productLinkInputHandler}
          />
          <CommBtn
            btnText="검색"
            btnWidth="60px"
            btnHeight="35px"
            fontSize="15px"
            radius="4px"
            border="1px solid rgb(66, 66, 226)"
            fnClick={productSearchHandler}
          />
        </div>
        <textarea
          className={classes.outerProduct}
          onClick={outerProductHandler}
        >
          + 상품 직접 등록하기
        </textarea>
        <div className={classes.selectedProduct}>
          {/* 더미데이터 시작 */}
          <ProductList
            products={productLists}
            departure={"productSalesLink"}
            productClickHandler={productClickHandler}
          />
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c"
            />
            <div className={classes.productInfo}>
              <div>T20 TAB+ TNA200HF 메쉬의자 2types</div>
              <div>12000</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fontSize="17px"
              fnClick={dummyClick}
            />
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg"
            />
            <div className={classes.productInfo}>
              <div>메쉬테이블 2types</div>
              <div>13300</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fontSize="17px"
              fnClick={dummyClick}
            />
          </div>
          <div className={classes.dummy}>
            <img
              className={classes.productImg}
              alt="T20 TAB+ TNA200HF 메쉬의자 2types"
              src="https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg"
            />
            <div className={classes.productInfo}>
              <div>노트북</div>
              <div>1200000</div>
            </div>
            <CommBtn
              btnText="선택"
              btnWidth="50px"
              btnHeight="33px"
              fontSize="17px"
              fnClick={dummyClick}
            />
          </div>
          {/* 더미 끝 */}
        </div>
      </div>
      <div className={classes.closeBtnArea}>
        <CommBtn
          btnText="닫기"
          btnWidth="88px"
          btnHeight="33px"
          border="3px solid rgb(66, 66, 226)"
          bgColor="rgb(248, 248, 250)"
          radius="4px"
          txColor="rgb(78, 78, 78)"
          fontSize="20px"
          fnClick={modalCloseBtnHandler}
        />
      </div>
    </div>
  );
}

export default ProductSalesLink;
