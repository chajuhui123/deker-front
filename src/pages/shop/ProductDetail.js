import ProductDetailInfo from "components/shop/productDetail/productDetailInfo";
import ProductOptionSelectBox from "components/shop/productDetail/productOptionSelectBox";
import ProductRecommendBox from "components/shop/productDetail/productRecommendBox";
import ProductReviewBox from "components/shop/productDetail/productReviewBox";

const ProductDetailPage = () => {
  return (
    <div>
      <ProductOptionSelectBox />
      <ProductDetailInfo />
      <ProductRecommendBox />
      <ProductReviewBox />
    </div>
  );
};

export default ProductDetailPage;