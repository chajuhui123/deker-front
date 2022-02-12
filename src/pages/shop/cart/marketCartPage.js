import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
import MarketCartPaymentBox from "components/shop/marketCart/marketCartPaymentBox";

const MarketCartPage = () => {
  return (
    <div>
      <MarketCartPaymentBox />
      <MarketCartItemBox />
    </div>
  );
};

export default MarketCartPage;
