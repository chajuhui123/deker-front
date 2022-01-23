import ProductItem from "./productItem";
import classes from "./productList.module.css";

function ProductList(props) {
  return (
    <ul>
      {props.products.map((product) => (
        <li className={classes.productList}>
          <ProductItem
            key={product.id}
            id={product.id}
            productImg={product.productImg}
            productNm={product.productNm}
            productPrice={product.productPrice}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
