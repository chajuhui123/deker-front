import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
// import MarketCartPaymentBox from "components/shop/marketCart/marketCartPaymentBox";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";

const MarketCartPage = () => {
  return (
    <div>
      <TotalPaymentAmt />
      <MarketCartItemBox />
    </div>
  );
};

export default MarketCartPage;
