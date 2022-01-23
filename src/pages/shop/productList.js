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

export default ProductList;
