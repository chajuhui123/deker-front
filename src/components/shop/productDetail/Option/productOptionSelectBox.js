import React, { useEffect } from "react";
import classes from "./productOptionSelectBox.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import noImg from "img/noImg.png";
import CommBtn from "components/common/commBtn";
import CommonPageTitle from "components/common/commPageTitle";
import SelectBoxOptionDiv from "./selectBoxOptionDiv";
import ProductOptionSelectItem from "./productOptionSelectItem";
import { postApi } from "api/fetch-api";
import { modalAction } from "store/modal-slice";
import CommAlert from "components/common/commAlert";

function ProductOptionSelectBox({ productId, productDetailObj }) {
  const dispatch = useDispatch();

  const [opitonIdInBasket, setOptionIdInBasket] = useState([]);
  const [selectedOption, setSelectedOption] = useState([]);
  const [totalItemPrice, setTotalItemPrice] = useState(0);

  const { productImg, productName, productPrice, productDetailOptionArr } =
    productDetailObj;

  const fnCallbackAddOptionsToCart = (res) => {
    if (!!res) {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: <CommAlert title="확인" message="장바구니에 추가되었습니다." />,
        })
      );
      setSelectedOption([]);
      setOptionIdInBasket([]);
      setTotalItemPrice(0);
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="안내" message="장바구니 추가에 실패하였습니다." />
          ),
        })
      );
    }
  };

  const fnCallbackBuyNow = (res) => {
    if (!!res) {
      console.log(res);
    } else {
      dispatch(
        modalAction.modalPopup({
          isOpen: true,
          cont: (
            <CommAlert title="안내" message="바로 구매에 실패하였습니다." />
          ),
        })
      );
    }
  };

  const handleAddOptionsToCart = () => {
    const selectedOptionToAddCart = selectedOption.map((item) => {
      const { option1, option1Data, option2, option2Data, orderQuantity } =
        item;
      return {
        mktProductId: productId,
        option1,
        option1Data,
        option2,
        option2Data,
        orderQuantity,
      };
    });
    dispatch(
      postApi(
        "mb/mkt/reg/add-cart",
        selectedOptionToAddCart,
        fnCallbackAddOptionsToCart
      )
    );
  };

  const handleBuyNowOptions = () => {
    console.log(selectedOption);
    const selectedOptionToAddCart = selectedOption.map((item) => {
      const {
        option1,
        option1Data,
        option2,
        option2Data,
        orderQuantity,
        productOptionId,
      } = item;
      return {
        mktProductId: productId,
        option1,
        option1Data,
        option2,
        option2Data,
        orderQuantity,
        productOptionId,
      };
    });

    dispatch(
      postApi("mb/mkt/reg/buy-now", selectedOptionToAddCart, fnCallbackBuyNow)
    );
  };

  useEffect(() => {
    let tempTotalPrice = 0;
    selectedOption?.forEach((option) => {
      tempTotalPrice +=
        (option.productPrice + productPrice) * option.orderQuantity;
    });
    setTotalItemPrice(tempTotalPrice);
  }, [selectedOption, productPrice]);

  return (
    <div className={classes.productOptionSelectBox}>
      <img src={productImg || noImg} alt="상품이미지" />
      <div className={classes.optionSelectBox}>
        <CommonPageTitle title={productName ?? ""} />
        <div className={classes.buyItemInfoDiv}>
          <p>가격 </p>
          <p>{productPrice?.toLocaleString("ko-KR") ?? 0} 원</p>
        </div>

        {/* 옵션은 Back에서 무조건 1개이상 보내기로 결정 */}
        {productDetailOptionArr.length !== 0 && (
          <div className={classes.buyItemInfoDiv}>
            <p>옵션</p>
            <ProductOptionSelectItem
              options={productDetailOptionArr}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              opitonIdInBasket={opitonIdInBasket}
              setOptionIdInBasket={setOptionIdInBasket}
              defaultProductPrice={productPrice}
            />
          </div>
        )}

        <div className={classes.selectedOptionDiv}>
          {selectedOption.map((option, index) => {
            return (
              <SelectBoxOptionDiv
                key={index}
                option={option}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                defaultProductPrice={productPrice}
              />
            );
          })}
        </div>

        <div className={classes.buyItemInfoDiv}>
          <p>주문금액</p>
          <p>{(totalItemPrice ?? 0).toLocaleString("ko-KR")}원</p>
        </div>

        <div className={classes.btnBox}>
          <CommBtn
            btnText="장바구니"
            bgColor="white"
            txColor="#4242e2"
            btnWidth="50%"
            fnClick={handleAddOptionsToCart}
          />
          <CommBtn
            btnText="바로구매"
            btnWidth="50%"
            fnClick={handleBuyNowOptions}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductOptionSelectBox;
