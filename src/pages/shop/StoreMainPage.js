import CommonPageTitle from "components/common/commPageTitle";
// import { postApi } from "api/fetch-api";
// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CategoryList from "./categoryList";
import ProductList from "./productList";
import classes from "./StoreMainPage.module.css";

// const BASEURL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

const StoreMainPage = () => {
  var sortId = "rank";
  // const dispatch = useDispatch();
  // const [mktProductId, setMktProductId] = useState(null);
  // const [mainProductList, setMainProductList] = useState(null);
  // const [productName, setProductName] = useState(null);
  // const [productPrice, setProductPrice] = useState(null);

  // const fnCallback = (res) => {
  //   if (!!res) {
  //     setMktProductId(`${BASEURL}${res.data.productModels.mktProductId}`);
  //     setProductName(`${BASEURL}${res.data.productModels.productName}`);
  //     setProductPrice(`${BASEURL}${res.data.productModels.productPrice}`);
  //     setMainProductList(`${BASEURL}${res.data.productModels}`);
  //     console.log(res.data.productModels);
  //   } else {
  //     비정상로직;
  //     alert("data error");
  //   }
  // };

  // useEffect(() => {
  //   dispatch(postApi("mb/mkt", null, fnCallback));
  // }, [dispatch]);

  const DUMMY_DATA = [
    {
      id: 1,
      productImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 2,
      productImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 3,
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 4,
      productImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 5,
      productImg:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12222000,
    },
    {
      id: 6,
      productImg:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 7,
      productImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 8,
      productImg:
        "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    // {
    //   id: 9,
    //   productImg:
    //     "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
    //   productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
    //   productPrice: "12,000",
    // },
  ];
  const DUMMY_DATA2 = [
    {
      id: 1,
      categoryImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      categoryName: "가구",
      categoryId: "C02",
    },
    {
      id: 2,
      categoryImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      categoryName: "가전제품",
      categoryId: "C03",
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
    <div className={classes.StoreMainPage_Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.HotProductTitleArea}>
          <CommonPageTitle title="인기상품" />
          <Link
            to={{
              pathname: `/market/storeSortPage/${sortId}`,
              state: { sordId: sortId },
            }}
            className={classes.HotProductDetail}
          >
            더보기 {">"}
          </Link>
        </div>
        <ProductList products={DUMMY_DATA} />
        {/* <ProductList products={mainProductList} /> */}
      </div>
      <div className={classes.CategorySection}>
        <div className={classes.HotProductTitleArea}>
          <CommonPageTitle title="카테고리" />
        </div>
        <CategoryList categorys={DUMMY_DATA2} />
      </div>
    </div>
  );
};

export default StoreMainPage;
