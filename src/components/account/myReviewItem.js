import classes from "./myReviewItem.module.css"

function MyReviewItem(props) {
  return (
      <div className={classes.reviewItem_box}>
          <div className = {classes.product_img} alt={props.product_name} src={props.product_image} />
          <div className = {classes.btn_info_box}>
            <div className = {classes.product_info}>
                    <p style={{color:"gray"}}>{props.product_brand}</p>
                    <p>{props.product_name}</p>
                    <p style={{color:"gray"}}>{props.product_option}</p>
                </div>
                <div className = {classes.product_btn}>
                    <button>리뷰작성</button>
                </div>
            </div>
      </div>
   
  );
}

export default MyReviewItem;
