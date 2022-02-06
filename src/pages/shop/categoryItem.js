import classes from "./categoryItem.module.css";

function CategoryItem(props) {
  return (
    <div>
      <div>
        <img
          className={classes.categoryImg}
          alt={props.categoryName}
          src={props.categoryImg}
        />
      </div>
    </div>
  );
}

export default CategoryItem;
