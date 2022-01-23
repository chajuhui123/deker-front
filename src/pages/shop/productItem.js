import classes from "./productItem.module.css";

function ProductItem(props) {
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
          <div>{props.productPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
