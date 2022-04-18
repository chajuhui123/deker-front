import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "./productItem";
import { postApi } from "api/fetch-api";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import CommonPageTitle from "components/common/commPageTitle";

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
    dispatch(
      postApi(
        isLoggedIn ? "mb/mkt/get/recent-product" : "nmb/mkt/get/recent-product",
        {},
        fnRecentlyViewCallback
      )
    );
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <CommonPageTitle title="최근 본 상품" />
      {/* <ul>
        {recentlyViewItems.map((item) => {
          <li>
            <ProductItem
              key={item.mktProductId}
              id={item.mktProductId}
              productImg={item.productImg}
              productNm={item.productName}
              productPrice={item.productPrice}
              productBrand={item.productBrand}
              departure={item.departure}
              plusId={item.plusId}
              productClickHandler={item.productClickHandler}
              productInfoHandler={item.productInfoHandler}
            />
          </li>;
        })}
      </ul> */}
    </>
  );
};
export default MarketRecentlyViewPage;
