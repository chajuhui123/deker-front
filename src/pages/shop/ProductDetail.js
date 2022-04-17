import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailInfo from "components/shop/productDetail/Content/productDetailInfo";
import ProductOptionSelectBox from "components/shop/productDetail/Option/productOptionSelectBox";
import ProductRecommendBox from "components/shop/productDetail/Recommend/productRecommendBox";
import ProductReviewBox from "components/shop/productDetail/Review/productReviewBox";
import { postApi } from "api/fetch-api";
import { BASE_URL } from "module/common-module";

const ProductDetailPage = ({ match }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const [pageNo, setPageNo] = useState(1);
  const [productDetailObj, setProductDetailObj] = useState({
    productName: "",
    productPrice: 0,
    productImg: "",
    productDetailOptionArr: [],
    productDetailExplainArr: [],
  });
  const [productRecommendObj, setProductRecommendObj] = useState({
    recommendsArr: [],
  });
  const [productReviewsObj, setProductReviewsObj] = useState({
    isLastPage: false,
    reviewsArr: [],
  });
  const dispatch = useDispatch();

  const { productId } = match.params;

  const fnProudctDetailCallback = (res) => {
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
        recommendsArr: res.data.recommendedProduct, // 배열 내부 오브젝트 형태 [{},{},{}]
      });
    }
  };

  const fnProudctReviewCallback = (res) => {
    if (!!res) {
      setProductReviewsObj({
        totalCount: res.data.totalCount,
        linkPagesArr: res.data.linkPages,
        currentPageNo: res.data.currentPageNo,
        reviewsArr: res.data.list, // 배열 내부 오브젝트 형태 [{},{},{}]
      });
    }
  };

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/mkt/get/product-detail",
        {
          productId,
        },
        fnProudctDetailCallback
      )
    );

    dispatch(
      postApi(
        "nmb/mkt/get/recommend-product",
        {
          productId,
        },
        fnRecommendCallback
      )
    );
    dispatch(
      postApi(
        "nmb/mkt/get/review",
        {
          productId,
          pageNumber: 1,
        },
        fnProudctReviewCallback
      )
    );
    dispatch(
      postApi(
        isLoggedIn ? "mb/mkt/reg/recent-product" : "nmb/mkt/reg/recent-product",
        { productId },
        (res) => {
          console.log(res);
        }
      )
    );
  }, [isLoggedIn, productId, dispatch]);

  return (
    <div>
      <ProductOptionSelectBox
        productId={productId}
        productDetailObj={productDetailObj}
      />
      <ProductDetailInfo productDetailObj={productDetailObj} />
      <ProductRecommendBox productRecommendObj={productRecommendObj} />
      <ProductReviewBox
        pageNo={pageNo}
        setPageNo={setPageNo}
        productReviewsObj={productReviewsObj}
      />
    </div>
  );
};

export default ProductDetailPage;
