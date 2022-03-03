import { Link } from "react-router-dom";
import classes from "./productItem.module.css";
import classes2 from "./productItem2.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
import CommBtn from "components/common/commBtn";
// import { useState } from "react";

function ProductItem(props) {
  var productId = props.mktProductId;
  // const [productClick, setProductClick] = useState(false);

  var departure = props.departure;
  var cssClass = classes;
  // storeMain 페이지에서 product List를 조회할 때 사용할 css 파일
  if (departure === "storeMain") {
    cssClass = classes;
  }
  // productSalesLink 페이지에서 product List를 조회할 때 사용할 css 파일
  else if (departure === "productSalesLink") {
    cssClass = classes2;
  }

  const productClickBtnHandler = () => {
    // setProductClick(true);
    // props.productClickHandler(productClick);
  };

  return (
    <div>
      <div className={cssClass.productArea}>
        <Link
          to={{
            pathname: `/market/detail/${productId}`,
            state: { productId: props.productId },
          }}
        >
          <img
            className={cssClass.productImg}
            alt={props.productNm}
            src={`${BASE_URL}${props.productImg}` || noImg}
            // src={props.productImg}
          />
        </Link>
        <div className={cssClass.productInfo}>
          <div>{props.productNm}</div>
          <div>{props.productPrice?.toLocaleString("ko-KR")}</div>
        </div>
        {props.productClick && (
          <CommBtn
            btnText="선택"
            btnWidth="50px"
            btnHeight="33px"
            fontSize="17px"
            fnClick={productClickBtnHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ProductItem;
