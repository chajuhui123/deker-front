import { postApi } from "api/fetch-api";
import CommonPageTitle from "components/common/commPageTitle";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "./productList";
import classes from "./StoreSortPage.module.css";

const StoreSortPage = (props) => {
  // sordId: 라우터 경로
  // 인기상품: rank | 카테고리: C01, C02, C03, C04, C05 | 최근본상품:
  const { params } = props.match;
  const sortId = params.sortId;

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

  // const DUMMY_DATA = [
  //   {
  //     id: 1,
  //     productImg:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 2,
  //     productImg:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 3,
  //     productImg:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 4,
  //     productImg:
  //       "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 5,
  //     productImg:
  //       "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12222000,
  //   },
  //   {
  //     id: 6,
  //     productImg:
  //       "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 7,
  //     productImg:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 8,
  //     productImg:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 9,
  //     productImg:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 10,
  //     productImg:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 11,
  //     productImg:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 12,
  //     productImg:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 13,
  //     productImg:
  //       "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 14,
  //     productImg:
  //       "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12222000,
  //   },
  //   {
  //     id: 15,
  //     productImg:
  //       "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 16,
  //     productImg:
  //       "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  //   {
  //     id: 17,
  //     productImg:
  //       "https://as1.ftcdn.net/v2/jpg/02/45/55/66/1000_F_245556698_vLsKSp1veCfadzkzcFyMcnPL0Imm9dLu.jpg",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 13900,
  //   },
  //   {
  //     id: 18,
  //     productImg:
  //       "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
  //     productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
  //     productPrice: 12000,
  //   },
  // ];
  const DUMMY_DATA2 = [
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
    {
      id: 9,
      productImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
    {
      id: 10,
      productImg:
        "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },

    {
      id: 13,
      productImg:
        "https://cdn.mos.cms.futurecdn.net/92keBiQNU4EtZemm4wfw8h-1200-80.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 14,
      productImg:
        "https://i.pinimg.com/736x/dc/42/5b/dc425b83adc4d8d64962455604d8c4a6--home-office-design-office-designs.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12222000,
    },
    {
      id: 15,
      productImg:
        "http://imagescdn.gettyimagesbank.com/500/21/378/818/0/1326923672.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 13900,
    },
    {
      id: 16,
      productImg:
        "https://sc02.alicdn.com/kf/Hf1624ba8f81149ccb00eec69eb3a04c6n.jpg",
      productNm: "T20 TAB+ TNA200HF 메쉬의자 2types",
      productPrice: 12000,
    },
  ];
  return (
    <div className={classes.StoreMainPage_Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.HotProductTitleArea}>
          <CommonPageTitle
            title={sortId === "rank" ? "인기상품" : sortId + " 인기상품"}
          />
        </div>
        {/* 인기상품 조회 */}
        {sortId === "rank" && <ProductList products={productLists} />}
        {/* 카테고리별 조회 */}
        {sortId === "C02" && <ProductList products={DUMMY_DATA2} />}
        {sortId === "C03" && console.log(sortId)}
        {sortId === "C04" && <ProductList products={DUMMY_DATA2} />}
        {sortId === "C05" && <ProductList products={DUMMY_DATA2} />}
        {sortId === "C01" && <ProductList products={marketCategories} />}
        {/* 최근본상품별 조회 */}
        {/* 아무 라우터 값 없을 때 */}
        {sortId !== "rank" &&
          sortId !== "C02" &&
          sortId !== "C03" &&
          sortId !== "C04" &&
          sortId !== "C05" &&
          sortId !== "C01" && <div>유효한요청이아닙니다</div>}
      </div>
    </div>
  );
};

export default StoreSortPage;
