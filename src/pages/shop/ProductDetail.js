import ProductDetailInfo from "components/shop/productDetail/productDetailInfo";
import ProductOptionSelectBox from "components/shop/productDetail/productOptionSelectBox";
import ProductRecommendBox from "components/shop/productDetail/productRecommendBox";
import ProductReviewBox from "components/shop/productDetail/productReviewBox";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { useEffect, useState } from "react";

const BASE_URL = `${process.env.REACT_APP_BACKEND_ENDPOINT}`;

const ProductDetailPage = ({ match }) => {
  const [productDetailObj, setProductDetailObj] = useState({
    productName: "천연 디퓨저",
    productPrice: 8900,
    productImg: null,
    productDetailOptionArr: [
      {
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
      {
        productPrice: 110000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C01",
        option1DataName: "흰색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S02",
        option2DataName: "255",
        productQuantity: 15,
      },
      {
        productPrice: 105000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C02",
        option1DataName: "검은색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S01",
        option2DataName: "260",
        productQuantity: 10,
      },
      {
        productPrice: 100000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C02",
        option1DataName: "검은색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S02",
        option2DataName: "255",
        productQuantity: 12,
      },
      {
        productPrice: 120000,
        option1: "COLOR",
        option1Name: "색상",
        option1Data: "C02",
        option1DataName: "검은색",
        option2: "SIZE",
        option2Name: "사이즈",
        option2Data: "S03",
        option2DataName: "265",
        productQuantity: 11,
      },
    ],
    productDetailExplainArr: [
      {
        setId: 1,
        detailExplain: "가나다라마바사",
        detailImg: "",
      },
      {
        setId: 2,
        detailExplain: "카테고리 순위",
        detailImg: "",
      },
      {
        setId: 3,
        detailExplain: "데이터베이스",
        detailImg: "",
      },
    ],
  });
  const [productRecommendObj, setProductRecommendObj] = useState({
    recommendsArr: [
      {
        productId: "1232131",
        productImg: null,
        productName: "상품명1",
        productPrice: 1000,
      },
      {
        productId: "1232131",
        productImg: null,
        productName: "상품명2",
        productPrice: 1000,
      },
      {
        productId: "1232131",
        productImg: null,
        productName: "상품명3",
        productPrice: 1000,
      },
      {
        productId: "1232131",
        productImg: null,
        productName: "상품명4",
        productPrice: 1000,
      },
      {
        productId: "1232131",
        productImg: null,
        productName: "상품명5",
        productPrice: 1000,
      },
    ],
  });
  const [productReviewsObj, setProductReviewsObj] = useState({
    isLastPage: false,
    reviewsArr: [
      {
        productImg: null,
        myStar: 3,
        reviewString: "리뷰 더미 1",
        proReviewImg: null,
        reviewDate: "2022-02-05",
        productName: "천연 디퓨저",
        nickname: "닉네임1",
        productOption: ["굳", "굳"],
      },
      {
        productImg: null,
        myStar: 3,
        reviewString: "리뷰 더미 2",
        proReviewImg: null,
        reviewDate: "2022-02-05",
        productName: "천연 디퓨저",
        nickname: "닉네임2",
        productOption: ["옵션1", "옵션2"],
      },
    ],
  });
  const dispatch = useDispatch();

  // const { productId } = match.params;
  const productId = "PDTID_00000000000000"; // 더미데이터

  const fnProudctDetailCallback = (res) => {
    console.log(res);
    if (!!res) {
      setProductDetailObj({
        productName: res.data.productDetail.productName,
        productPrice: res.data.productDetail.productPrice,
        productImg: `${BASE_URL}${res.data.productDetail.productImg}`,
        productDetailOptionArr: res.data.productDetailOption, // 배열 내부 오브젝트 형태 [{},{},{}]
        productDetailExplainArr: res.data.productDetailExplain, // 배열 내부 오브젝트 형태 [{},{},{}]
      });
    }
  };
  const fnRecommendCallback = (res) => {
    if (!!res) {
      setProductRecommendObj({
        recommendsArr: res.data.recommends, // 배열 내부 오브젝트 형태 [{},{},{}]
      });
    }
  };
  const fnProudctReviewCallback = (res) => {
    if (!!res) {
      setProductReviewsObj({
        isLastPage: res.data.dataisLastPage,
        reviewsArr: res.data.reviews, // 배열 내부 오브젝트 형태 [{},{},{}]
      });
    }
  };

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/mkt/get/product-detail",
        {
          productId: productId,
        },
        fnProudctDetailCallback
      )
    );
    dispatch(
      postApi(
        "nmb/mkt/get/recommend-product",
        {
          productId: productId,
        },
        fnRecommendCallback
      )
    );
    dispatch(
      postApi(
        "nmb/mkt/get/review",
        {
          productId: productId,
          pageNumber: 1,
        },
        fnProudctReviewCallback
      )
    );
  }, [dispatch]);

  return (
    <div>
      <ProductOptionSelectBox productDetailObj={productDetailObj} />
      <ProductDetailInfo productDetailObj={productDetailObj} />
      <ProductRecommendBox productRecommendObj={productRecommendObj} />
      <ProductReviewBox productReviewsObj={productReviewsObj} />
    </div>
  );
};

export default ProductDetailPage;
