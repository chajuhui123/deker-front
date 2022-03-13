import { Link } from "react-router-dom";
import classes from "./categoryItem.module.css";
import noImg from "img/noImg.png";
import { BASE_URL } from "module/common-module";

function CategoryItem(props) {
  var sortId = props.categoryName;
  return (
    <div>
      <Link
        to={{
          pathname: `/market/storeSortPage/${sortId}`,
          state: { sortId: props.categoryName },
        }}
      >
        <img
          className={classes.categoryImg}
          alt={props.categoryName}
          src={`${BASE_URL}${props.categoryImg}` || noImg}
        />
      </Link>
    </div>
  );
}

export default CategoryItem;
