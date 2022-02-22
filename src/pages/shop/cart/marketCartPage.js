import MarketCartBuyButton from "components/shop/marketCart/marketCartBuyButton";
import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
// import MarketCartPaymentBox from "components/shop/marketCart/marketCartPaymentBox";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";

const MarketCartPage = () => {
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
      <TotalPaymentAmt />
      <MarketCartBuyButton />
      <MarketCartItemBox cartItemArray={CART_ITEM_ARRAY_DUMMY} />
    </div>
  );
};

export default MarketCartPage;
