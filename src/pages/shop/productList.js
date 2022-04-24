import ProductItem from "./productItem";
import classes from "./productList.module.css";
import classes2 from "./productList2.module.css";

function ProductList(props) {
  var departure = props.departure;
  var cssClass = classes;
  // storeMain 페이지에서 product List를 조회할 때 사용할 css 파일
  if (departure === "store") {
    cssClass = classes;
  }
  // productSalesLink 페이지에서 product List를 조회할 때 사용할 css 파일
  else if (departure === "productSalesLink") {
    cssClass = classes2;
  }

  return (
    <div style={{ display: "flex" }}>
      {props.products?.length ? (
        <ul className={cssClass.productListArea}>
          {props.products.map((product) => (
            <li className={cssClass.productList}>
              <ProductItem
                key={product.mktProductId}
                id={product.mktProductId}
                productImg={product.productImg}
                productNm={product.productName}
                productPrice={product.productPrice}
                productBrand={product.productBrand}
                departure={props.departure}
                plusId={props.plusId}
                productClickHandler={props.productClickHandler}
                productInfoHandler={props.productInfoHandler}
              />
            </li>
          ))}
        </ul>
      ) : { departure } === "store" ? (
        <div className={cssClass.noUploadText}>
          <text>작성한 글이 없습니다</text>
        </div>
      ) : (
        <div className={cssClass.noUploadText}>
          <text>해당하는 상품이 없습니다.</text>
        </div>
      )}
    </div>
  );
}

export default ProductList;
