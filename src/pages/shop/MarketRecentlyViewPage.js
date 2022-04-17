import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./productItem";
import { postApi } from "api/fetch-api";

const MarketRecentlyViewPage = () => {
  const dispatch = useDispatch();
  const [recentlyViewItems, setRecentlyViewItems] = useState();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const fnRecentlyViewCallback = (res) => {
    if (!!res) {
      // JavaNullPointer
      console.log("recentlyViewItems", res);
    }
  };

  useEffect(() => {
    dispatch(
      postApi(
        isLoggedIn ? "mb/mkt/get/recent-product" : "nmb/mkt/get/recent-product",
        {},
        fnRecentlyViewCallback
      )
    );
  }, [dispatch, isLoggedIn]);
  return (
    <ul>
      <li></li>
    </ul>
  );
};
export default MarketRecentlyViewPage;
