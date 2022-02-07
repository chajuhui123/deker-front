import { Link } from "react-router-dom";
import classes from "./categoryItem.module.css";

function CategoryItem(props) {
  var sortId = "CA01";
  return (
    <div>
      <Link
        to={{
          pathname: `/storeSortPage/${sortId}`,
          state: { sordId: sortId },
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
