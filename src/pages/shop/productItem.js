import classes from "./productItem.module.css";

function ProductItem(props) {
  // price 출력 Format- 000,000
  Number.prototype.format = function () {
    var n = this + "";
    return n.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  };

  return (
    <div>
      <div>
        <img
          className={classes.productImg}
          alt={props.productNm}
          src={props.productImg}
        />
        <div className={classes.productInfo}>
          <div>{props.productNm}</div>
          <div>{props.productPrice.format()}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
