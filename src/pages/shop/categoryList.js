import CategoryItem from "./categoryItem";
import classes from "./categoryList.module.css";

function CategoryList(props) {
  const categoryList = props.categorys.map((category) => (
    <li className={classes.categoryList}>
      <CategoryItem
        key={category.id}
        id={category.id}
        categoryImg={category.categoryImg}
        categoryName={category.categoryName}
        categoryId={category.categoryId}
      />
    </li>
  ));
  return <ul>{categoryList}</ul>;
}

export default CategoryList;
