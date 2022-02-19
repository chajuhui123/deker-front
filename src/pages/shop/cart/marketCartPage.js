import MarketCartBuyButton from "components/shop/marketCart/marketCartBuyButton";
import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
// import MarketCartPaymentBox from "components/shop/marketCart/marketCartPaymentBox";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";

const MarketCartPage = () => {
  return (
    <div>
      {/* <TotalPaymentAmt /> */}
      <MarketCartBuyButton />
      <MarketCartItemBox />
    </div>
  );
};

export default MarketCartPage;
