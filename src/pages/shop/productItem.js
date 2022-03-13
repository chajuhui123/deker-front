import { Link } from "react-router-dom";
import classes from "./productItem.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";
// import CommBtn from "components/common/commBtn";

function ProductItem(props) {
  var productId = props.id;
  var departure = props.departure;

  const productClickBtnHandler = () => {
    const dataObject = {
      id: props.plusId,
      productId: props.id,
    };
    console.log(props.id);

    props.productInfoHandler(dataObject);
    props.productClickHandler();
  };

  return (
    <div>
      {departure === "store" && (
        // storeMain 페이지에서 product List를 조회할 때
        <div>
          <Link
            to={{
              pathname: `/market/detail/${productId}`,
              state: { productId: props.id },
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
        <div>
          <button
            className={classes.productArea2}
            onClick={productClickBtnHandler}
          >
            <img
              className={classes.productImg2}
              alt={props.productNm}
              src={`${BASE_URL}${props.productImg}` || noImg}
            />
            <div className={classes.productInfo2}>
              <div className={classes.brandStyle}>{props.productBrand}</div>
              <div className={classes.prdctNmStyle}>{props.productNm}</div>
            </div>
            <div className={classes.slctBtn}>선택</div>
          </button>
          {/* <img
            className={classes.productImg2}
            alt={props.productNm}
            src={`${BASE_URL}${props.productImg}` || noImg}
          />
          <div className={classes.productInfo2}>
            <div>{props.productNm}</div>
            <div>{props.productBrand}</div>
          </div>
          <CommBtn
            btnText="선택"
            btnWidth="50px"
            btnHeight="33px"
            fontSize="17px"
            fnClick={productClickBtnHandler}
          /> */}
        </div>
      )}
    </div>
  );
}

export default ProductItem;
