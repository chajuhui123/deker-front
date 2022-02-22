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

  const DUMMY_DATA = [
    {
      id: 1,
      productImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 2,
      productImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },

    {
      id: 3,
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 4,
      productImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 5,
      productImg:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12222000,
    },
    {
      id: 6,
      productImg:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 7,
      productImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 8,
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productName: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
  ];
  const DUMMY_DATA2 = [
    {
      id: 1,
      categoryImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      categoryName: "가전제품",
      categoryId: "C03",
    },
    {
      id: 2,
      categoryImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      categoryName: "가구",
      categoryId: "C02",
    },

    {
      id: 3,
      categoryImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      categoryName: "조명",
      categoryId: "C04",
    },
    {
      id: 4,
      categoryImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      categoryName: "사무용품",
      categoryId: "C05",
    },
    {
      id: 5,
      categoryImg:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
      categoryName: "데코",
      categoryId: "C01",
    },
  ];

  return (
    <div className={classes.Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.titleArea}>
          <CommPageSemiTitle semiTitle="인기상품" />
          <Link
            to={{
              pathname: `/market/storeSortPage/${sortId}`,
              state: { sortId: sortId },
            }}
          >
            <a>더보기</a>
          </Link>
        </div>
        <div className={classes.productListArea}>
          <ProductList products={DUMMY_DATA} />
          {/* <ProductList products={productLists} /> */}
        </div>
      </div>
      <div className={classes.CategorySection}>
        <div className={classes.titleArea}>
          <CommPageSemiTitle semiTitle="카테고리" />
        </div>
        <CategoryList categorys={DUMMY_DATA2} />
        {/* <CategoryList categorys={marketCategories} /> */}
      </div>
    </div>
  );
};

export default StoreMainPage;
