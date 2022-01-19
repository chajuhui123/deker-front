import CommonPageTitle from "components/common/commPageTitle";
import { Link } from "react-router-dom";
import classes from "./StoreMainPage.module.css";

const StoreMainPage = () => {
  return (
    <div className={classes.StoreMainPage_Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.HotProductTitleArea}>
          <CommonPageTitle title="인기상품" />
          <Link to="/" className={classes.HotProductDetail}>
            더보기 {">"}
          </Link>
        </div>
        <div>{/* 상품들 8개씩 띄우기 */}</div>
      </div>
      <div className={classes.CategorySection}>
        <CommonPageTitle title="카테고리" />
      </div>
    </div>
  );
};

export default StoreMainPage;
