import MyReviewItem from "./myReviewItem";
import classes from "./myReviewList.module.css";

function MyReviewList(props) {
  return (
    <ul className={classes.list}>
      {props.reviews.map((review) => (
        <MyReviewItem
          key={review.id}
          id={review.id}
          product_image={review.image}
          product_brand={review.product_brand}
          product_name={review.product_name}
          product_option={review.product_option}
        />
      ))}
    </ul>
  );
}

export default MyReviewList;
