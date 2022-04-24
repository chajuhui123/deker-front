import { postApi } from "api/fetch-api";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CommPageSemiTitle from "components/common/commPageSemiTitle";
import { Link } from "react-router-dom";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import classes from "./StoreMainPage.module.css";

const StoreMainPage = () => {
  var sortId = "rank";
  const dispatch = useDispatch();
  const [productLists, setProductLists] = useState(null);
  const [marketCategories, setMarketCategories] = useState(null);

  const fnCallback = (res) => {
    if (!!res) {
      setProductLists(res.data.productModels);
      setMarketCategories(res.data.marketCategories);
    } else {
      // 비정상로직;
      alert("data error");
    }
  };

  useEffect(() => {
    dispatch(postApi("nmb/mkt", null, fnCallback));
  }, [dispatch]);

  return (
    <div className={classes.Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.titleArea}>
          <CommPageSemiTitle semiTitle="인기상품" />
          <Link
            to={{
              pathname: `/market/storeSortPage/${sortId}`, // StoreSortPage
              state: { sortId: sortId },
            }}
          >
            <div className={classes.goMore}>더보기</div>
          </Link>
        </div>
        <div className={classes.productListArea}>
          <ProductList products={productLists} departure={"store"} />
        </div>
      </div>
      <div className={classes.CategorySection}>
        <div className={classes.titleArea}>
          <CommPageSemiTitle semiTitle="카테고리" />
        </div>
        <CategoryList categorys={marketCategories} />
      </div>
    </div>
  );
};

export default StoreMainPage;
