import MyReviewItem from "./myReviewItem";
import classes from "./myReviewList.module.css"

function MyReviewList(props) {
  return (
      
     <ul className = {classes.list}>
         <MyReviewItem/>
        </ul>
  );
}

export default MyReviewList;
