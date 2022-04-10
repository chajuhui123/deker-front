import { postApi } from "api/fetch-api";
import CommonPageTitle from "components/common/commPageTitle";
import MarketCartBuyButton from "components/shop/marketCart/marketCartBuyButton";
import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
// import MarketCartPaymentBox from "components/shop/marketCart/marketCartPaymentBox";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MarketCartPage = () => {
  var dummy_paymentAmt = 80;
  var dummy_deliAmt = 20;

  const dispatch = useDispatch();
  const [cartData, setCartData] = useState(null);

  // 처음 페이지를 로딩 시, 장바구니에 있는 상품 목록 받아오기
  useEffect(() => {
    dispatch(postApi("mb/mkt/get/cart", {}, fnCallback));
  }, [dispatch]);

  const fnCallback = (res) => {
    if (!!res) {
      setCartData(res.data);
      console.log("cardId: " + cartData.cartId);
    } else {
      // 비정상로직;
      // alert("data error");
    }
  };

  // 장바구니에 있는 아이템
  const CART_ITEM_ARRAY_DUMMY = [
    {
      cartId: "111111111111111111",
      mktProductId: "PDTID_00000000000000",
      productBrand: "deker",
      productName: "천연 디퓨저",
      productPrice: 8900,
      productSelectedQuantity: 3, // 사용자가 선택한 수량 (Number)
      productImg: "/nmb/img/4c6916db-3950-402a-aaf0-330ed74b8e8f.jpg",
      productDetailOption: {
        productPrice: 100000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C01",
        option1DataName: "흰색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S01",
        option2DataName: "260",
        productQuantity: 10,
      },
      totalPrice: 108900, // 100000+8900 (number)},
    },
    {
      cartId: "2222222222222222222",
      mktProductId: "PDTID_0000222222222220",
      productBrand: "deker",
      productName: "천퓨저",
      productPrice: 1000,
      productSelectedQuantity: 2, // 사용자가 선택한 수량 (Number)
      productImg: "/nmb/img/4c6916db-3950-402a-aaf0-330ed74b8e8f.jpg",
      productDetailOption: {
        productPrice: 100000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C01",
        option1DataName: "흰색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S01",
        option2DataName: "260",
        productQuantity: 10,
      },
      totalPrice: 108900, // 100000+8900 (number)},
    },
    // {
    //   productNo: 1,
    //   optionNo: 1,
    //   productImg: null,
    //   productName: "상품명 테스트 1",
    //   productSelectedOption: "옵션 테스트 1",
    //   maxQuantity: 3,
    //   productFee: 30000,
    // },
    // {
    //   productNo: 2,
    //   optionNo: 2,
    //   productImg: null,
    //   productName: "상품명 테스트 2",
    //   productSelectedOption: "옵션 테스트 2",
    //   maxQuantity: 3,
    //   productFee: 30000,
    // },
  ];
  return (
    <div>
      <CommonPageTitle title="장바구니" />
      <TotalPaymentAmt paymentAmt={dummy_paymentAmt} deliAmt={dummy_deliAmt} />
      <MarketCartBuyButton
        paymentAmt={dummy_paymentAmt}
        deliAmt={dummy_deliAmt}
        cartItemArray={CART_ITEM_ARRAY_DUMMY}
      />
      <MarketCartItemBox cartItemArray={CART_ITEM_ARRAY_DUMMY} />
    </div>
  );
};

export default MarketCartPage;
