import { Link } from "react-router-dom";
import classes from "./productItem.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";

function ProductItem(props) {
  var productId = props.mktProductId;
  return (
    <div>
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
          />
        </Link>
        <div className={classes.productInfo}>
          <div>{props.productNm}</div>
          <div>{props.productPrice.toLocaleString("ko-KR")}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
