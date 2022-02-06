import ProductItem from "./productItem";
import classes from "./productList.module.css";

function ProductList(props) {
  const productList = props.products.map((product) => (
    <li className={classes.productList}>
      <ProductItem
        key={product.id}
        id={product.id}
        productImg={product.productImg}
        productNm={product.productNm}
        productPrice={product.productPrice}
      />
    </li>
  ));
  return <ul>{productList}</ul>;
}
// 연결 시도하다가 실패한거
// function ProductList(props) {
//   const productList = props.products.map((mainProductList) => (
//     <li className={classes.productList}>
//       <ProductItem
//         key={mainProductList.mktProductId}
//         id={mainProductList.mktProductId}
//         // productImg={product.productImg}
//         productNm={mainProductList.productName}
//         productPrice={mainProductList.productPrice}
//       />
//     </li>
//   ));

//   return <ul>{productList}</ul>;
// }

export default ProductList;
