import ProductItem from "./productItem";
import classes from "./productList.module.css";

function ProductList(props) {
  const productList = props.products.map((product) => (
    <li className={classes.productList}>
      <ProductItem
        key={product.mktProductId}
        id={product.mktProductId}
        productImg={product.productImg}
        productNm={product.productName}
        productPrice={product.productPrice}
      />
    </li>
  ));
  return (
    <div>
      {props.products?.length ? (
        <ul>{productList}</ul>
      ) : (
        <div className={classes.noUploadText}>
          <text>작성한 글이 없습니다</text>
          {console.log("product: " + props.products)}
        </div>
      )}
    </div>
  );
}

export default ProductList;
