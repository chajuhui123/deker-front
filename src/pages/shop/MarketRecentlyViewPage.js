import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductList from "./productList";
import CommonPageTitle from "components/common/commPageTitle";
import { postApi } from "api/fetch-api";

const MarketRecentlyViewPage = () => {
  const dispatch = useDispatch();
  const [recentlyViewItems, setRecentlyViewItems] = useState();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const fnRecentlyViewCallback = (res) => {
    if (!!res) {
      setRecentlyViewItems(res.data);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        postApi("mb/mkt/get/recent-product", null, fnRecentlyViewCallback)
      );
    } else {
      dispatch(
        postApi(
          "nmb/mkt/get/recent-product",
          { sessionId: localStorage.getItem("sessionId") || "NONE" },
          fnRecentlyViewCallback
        )
      );
    }
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <CommonPageTitle title="최근 본 상품" />
      <ProductList products={recentlyViewItems} departure={"store"} />
    </>
  );
};
export default MarketRecentlyViewPage;
