import MyReviewList from "../accountReview/myReviewList";
import classes from "./myOrderPrdt.module.css";

function MyOrderPrdt(props) {
  return (
    <div>
      <div className={classes.orderProductDetail}>
        <div>00000001</div>
        <div className={classes.d}>{` | `}</div>
        <div> 2022.01.01.</div>
      </div>
      <MyReviewList reviews={props.product} />
    </div>
  );
}

export default MyOrderPrdt;
