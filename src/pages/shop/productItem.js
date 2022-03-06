import { Link } from "react-router-dom";
import classes from "./productItem.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import CommBtn from "components/common/commBtn";
// import { useState } from "react";

function ProductItem(props) {
  var productId = props.mktProductId;
  // const [productClick, setProductClick] = useState(false);

  var departure = props.departure;

  const productClickBtnHandler = () => {
    // setProductClick(true);
    // props.productClickHandler(productClick);
  };

  return (
    <div>
      {departure === "storeMain" && (
        // storeMain 페이지에서 product List를 조회할 때
        <div>
          <Link
            to={{
              pathname: `/market/detail/${productId}`,
              state: { productId: props.productId },
            }}
          >
            <img
              className={classes.productImg}
              alt={props.productNm}
              src={`${BASE_URL}${props.productImg}` || noImg}
              // src={props.productImg}
            />
          </Link>
          <div className={classes.productInfo}>
            <div>{props.productNm}</div>
            <div>{props.productPrice?.toLocaleString("ko-KR")}</div>
          </div>
        </div>
      )}
      {departure === "productSalesLink" && (
        // productSalesLink 페이지에서 product List를 조회할 때
        <div className={classes.productArea2}>
          <img
            className={classes.productImg2}
            alt={props.productNm}
            src={`${BASE_URL}${props.productImg}` || noImg}
          />
          <div className={classes.productInfo2}>
            <div>{props.productNm}</div>
            <div>{props.productBrand}</div>
          </div>
          {/* {props.productClick && ( */}
          <CommBtn
            btnText="선택"
            btnWidth="50px"
            btnHeight="33px"
            fontSize="17px"
            fnClick={productClickBtnHandler}
          />
          {/* )} */}
        </div>
      )}
    </div>
  );
}

export default ProductItem;
