import { Link } from "react-router-dom";
import classes from "./categoryItem.module.css";

function CategoryItem(props) {
  var sortId = props.categoryId;
  return (
    <div>
      <Link
        to={{
          pathname: `/storeSortPage/${sortId}`,
          state: { sordId: props.categoryId },
        }}
      >
        <img
          className={classes.categoryImg}
          alt={props.categoryName}
          src={props.categoryImg}
        />
      </Link>
    </div>
  );
}

export default CategoryItem;
