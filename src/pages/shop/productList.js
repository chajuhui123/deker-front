// import { useState } from "react";
import ProductItem from "./productItem";
import classes from "./productList.module.css";

function ProductList(props) {
  // const [productClick, setProductClick] = useState(false);
  // const productClickHandler = (data) => {
  //   setProductClick(data);
  //   props.productClickHandler(productClick);
  // };

  // const productList = props.products?.map((product) => (
  // 앞에서 state로 관리하니까 여기서 상수로 박으면 로딩 잘 안됨
  // ));
  var departure = props.departure;
  return (
    <div>
      {props.products?.length ? (
        <ul>
          {props.products.map((product) => (
            <li className={classes.productList}>
              <ProductItem
                key={product.mktProductId}
                id={product.mktProductId}
                productImg={product.productImg}
                productNm={product.productName}
                productPrice={product.productPrice}
                productBrand={product.productBrand}
                departure={props.departure}
                // productClickHandler={productClickHandler}
              />
            </li>
          ))}
        </ul>
      ) : { departure } === "storeMain" ? (
        <div className={classes.noUploadText}>
          <text>작성한 글이 없습니다</text>
        </div>
      ) : (
        <div className={classes.noUploadText}>
          <text>해당하는 상품이 없습니다.</text>
        </div>
      )}
    </div>
  );
}

export default ProductList;
