import classes from "./productItem.module.css";

function ProductItem(props) {
  return (
    <div>
      <div>
        <img
          className={classes.productImg}
          alt={props.productName}
          src={props.productImg}
        />
        <div className={classes.productInfo}>
          <div>{props.productName}</div>
          <div>{props.productPrice}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
