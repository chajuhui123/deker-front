import CategoryItem from "./categoryItem";
import classes from "./categoryList.module.css";

function CategoryList(props) {
  // const categoryList = props.categorys.map((category) => (
  // ));
  return (
    <div>
      {props.categorys?.length ? (
        <div>
          <ul>
            {props.categorys.map((category) => (
              <li className={classes.categoryList}>
                <CategoryItem
                  key={category.categoryName}
                  id={category.categoryName}
                  categoryImg={category.categoryImg}
                  categoryName={category.categoryName}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={classes.noUploadText}>
          <text>작성한 글이 없습니다</text>
          {console.log("category: " + props.categorys)}
        </div>
      )}
    </div>
  );
}

export default CategoryList;
