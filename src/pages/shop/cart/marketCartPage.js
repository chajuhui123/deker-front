import { postApi } from "api/fetch-api";
import CommonPageTitle from "components/common/commPageTitle";
import MarketCartBuyButton from "components/shop/marketCart/marketCartBuyButton";
import MarketCartItemBox from "components/shop/marketCart/marketCartItemBox";
import TotalPaymentAmt from "components/shop/totalPaymentAmt";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MarketCartPage = () => {
  const dispatch = useDispatch();

  const [paymentAmt, setPaymentAmt] = useState(0);
  const [deliAmt, setDeliAmt] = useState(0);
  const [cartData, setCartData] = useState(null);
  const [selectedPrdtCartIdList, setSelectedPrdtCartIdList] = useState(null);

  // 처음 페이지를 로딩 시, 장바구니에 있는 상품 목록 받아오기
  useEffect(() => {
    dispatch(postApi("mb/mkt/get/cart", {}, fnCallback));
  }, [dispatch]);

  const fnCallback = (res) => {
    if (!!res) {
      setCartData(res.data.productCartItems);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };
  // 장바구니에 선택한 상품 삭제하고 페이지 다시 rerendering
  const pageReRenderingAftRmvCartItem = () => {
    window.location.replace("/market/cart");
    // dispatch(postApi("mb/mkt/get/cart", {}, fnCallback));
  };

  /*
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
      totalPrice: 2000, // 100000+8900 (number)},
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
      totalPrice: 3000, // 100000+8900 (number)},
    },
    {
      cartId: "2222222222222222222",
      mktProductId: "PDTID_0000222233333320",
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
      totalPrice: 5000, // 100000+8900 (number)},
    },
  ];
*/

  const totalPriceSetting = (data) => {
    console.log(data);
    setPaymentAmt(data);
    if (data >= 30000 || data === 0) {
      // 총 구매 금액이 3만원을 넘거나 없으면 배송비 무료
      setDeliAmt(0);
    } else {
      // 총 구매 금액이 3만원을 넘지 않으면 배송비 3000원
      setDeliAmt(3000);
    }
  };

  const selectedPrdtListSetting = (data) => {
    setSelectedPrdtCartIdList(data);
  };
  useEffect(() => {
    console.log("kwon debug selectedPrdtCartIdList: " + selectedPrdtCartIdList);
  }, [selectedPrdtCartIdList, paymentAmt, deliAmt, cartData]);

  return (
    <div>
      <CommonPageTitle title="장바구니" />
      <TotalPaymentAmt paymentAmt={paymentAmt} deliAmt={deliAmt} />
      <MarketCartBuyButton
        paymentAmt={paymentAmt}
        deliAmt={deliAmt}
        cartItemArray={selectedPrdtCartIdList}
      />
      <MarketCartItemBox
        cartItemArray={cartData}
        totalPriceSetting={totalPriceSetting}
        selectedPrdtListSetting={selectedPrdtListSetting}
        pageReRenderingAftRmvCartItem={pageReRenderingAftRmvCartItem}
      />
    </div>
  );
};

export default MarketCartPage;
