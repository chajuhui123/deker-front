import ProductDetailInfo from "components/shop/productDetail/productDetailInfo";
import ProductOptionSelectBox from "components/shop/productDetail/productOptionSelectBox";
import ProductRecommendBox from "components/shop/productDetail/productRecommendBox";
import ProductReviewBox from "components/shop/productDetail/productReviewBox";
import { useDispatch } from "react-redux";
import { postApi } from "api/fetch-api";
import { useEffect, useState } from "react";

const ProductDetailPage = ({ match }) => {
  const [productDetailObj, setProductDetailObj] = useState({});
  const dispatch = useDispatch();
  // const { productId } = match.params;
  const { productId } = "P0001";

  const fnProudctDetailCallback = (res) => {
    setProductDetailObj({
      productName: res.data.productDetail.productName,
      productPrice: res.data.productDetail.productPrice,
      productImg: res.data.productDetail.productImg,
    });
  };
  // const fnRecommendCallback = (res) => {
  //   console.log("recommend callback ::", res);
  // };
  // const fnProudctReviewCallback = (res) => {
  //   console.log("review callback ::", res);
  // };

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
    // dispatch(
    //   postApi(
    //     "nmb/mkt/get/recommend-product",
    //     {
    //       productId: productId,
    //     },
    //     fnRecommendCallback
    //   )
    // );
    // dispatch(
    //   postApi(
    //     "nmb/mkt/get/review",
    //     {
    //       productId: productId,
    //       pageNumber: 1,
    //     },
    //     fnProudctReviewCallback
    //   )
    // );
  }, [dispatch]);

  return (
    <div>
      <ProductOptionSelectBox productDetailObj={productDetailObj} />
      <ProductDetailInfo />
      <ProductRecommendBox />
      <ProductReviewBox />
    </div>
  );
};

export default ProductDetailPage;
