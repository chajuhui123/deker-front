import classes from "./myReviewItem.module.css"

function MyReviewItem(props) {
  return (
      <div className={classes.reviewItem_box}>
          <img className = {classes.product_img} alt={props.product_name} src={props.product_image} />
          <div className = {classes.product_info}>
                <p>{props.product_brand}</p>
                <p>{props.product_name}</p>
                <p>{props.product_option}</p>
            </div>
            <div className = {classes.product_btn}>
                <button>웅</button>
            </div>
      </div>
   
  );
}

export default MyReviewItem;
