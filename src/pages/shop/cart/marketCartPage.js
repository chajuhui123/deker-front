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
  const [cartId, setCartId] = useState(null);
  const [mktProductId, setMktProductId] = useState(null);
  const [productName, setProductName] = useState(null);
  const [productPrice, setProductPrice] = useState(0);
  const [productSelectedQuantity, setProductSelectedQuantity] = useState(0);
  const [productImg, setProductImg] = useState(null);
  const [productDetailOption, setProductDetailOption] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // 처음 페이지를 로딩 시, 장바구니에 있는 상품 목록 받아오기
  useEffect(() => {
    dispatch(postApi("mb/mkt/get/cart", {}, fnCallback));
  }, [dispatch]);

  const fnCallback = (res) => {
    if (!!res) {
      setTmp(res.data);
      setCartId(res.data.productCartItems.cartId);
      setMktProductId(res.data.productCartItems.mktProductId);
      setProductName(res.data.productCartItems.productName);
      setProductPrice(res.data.productCartItems.productPrice);
      setProductSelectedQuantity(
        res.data.productCartItems.productSelectedQuantity
      );
      setProductImg(res.data.productImg);
      setProductDetailOption(res.data.productDetailOption);
      setTotalPrice(res.data.totalPrice);

      // console.log("currentPageNo: " + currentPageNo);
      // console.log("totalCount: " + totalCount);
      console.log("totalPrice: " + totalPrice);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  // 장바구니에 있는 아이템
  const CART_ITEM_ARRAY_DUMMY = [
    {
      productNo: 1,
      optionNo: 1,
      productImg: null,
      productName: "상품명 테스트 1",
      productSelectedOption: "옵션 테스트 1",
      maxQuantity: 3,
      productFee: 30000,
    },
    {
      productNo: 2,
      optionNo: 2,
      productImg: null,
      productName: "상품명 테스트 2",
      productSelectedOption: "옵션 테스트 2",
      maxQuantity: 3,
      productFee: 30000,
    },
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
