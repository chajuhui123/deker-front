import { postApi } from "api/fetch-api";
import CommonPageTitle from "components/common/commPageTitle";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductList from "./productList";
import classes from "./StoreSortPage.module.css";

const StoreSortPage = (props) => {
  const dispatch = useDispatch();

  /* sordId: 라우터 경로
   * 인기상품: rank | 카테고리: 가구, 가전제품, 조명, 사무용품, 데코 | 최근본상품: */
  const { params } = props.match;
  const sortId = params.sortId;
  const { location } = props;
  console.log("sortId: " + sortId + ", name: " + location.state.sortCtgryName);

  /* sortId별 어떤 route로 통신하는 지 */
  var postApiRoute = "";
  // 인기상품 통신 route
  if (sortId === "rank") {
    postApiRoute = "nmb/mkt/get/product/more";
  }
  // 카테고리별 통신 route
  else if (
    sortId === "C01" ||
    sortId === "C02" ||
    sortId === "C03" ||
    sortId === "C04" ||
    sortId === "C05"
  ) {
    postApiRoute = "nmb/mkt/get/category/product/more";
  }

  /* 인기상품, 카테고리 조회 통신 시작 */
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [lastPage, setLastPage] = useState(false);
  const [list, setList] = useState(null);

  useEffect(() => {
    dispatch(
      postApi(
        postApiRoute,
        {
          currentPageNo: currentPageNo,
          categoryId: sortId, // 카테고리만 쓰는데 이거 에러 안나네 괜찮나?
        },
        fnRankCallback
      )
    );
  }, [dispatch]);

  const fnRankCallback = (res) => {
    if (!!res) {
      setCurrentPageNo(res.data.currentPageNo);
      setTotalCount(res.data.totalCount);
      setLastPage(res.data.lastPage);
      setList(res.data.list);
      console.log("currentPageNo: " + currentPageNo);
      console.log("totalCount: " + totalCount);
      console.log("lastPage: " + lastPage);
      console.log("route: " + postApiRoute);
    } else {
      // 비정상로직;
      alert("data error");
      console.log("route: " + postApiRoute);
    }
  };
  // console.log("지금 어떤 페이지? :" + sortId);
  /* 인기상품, 카테고리 조회 통신 끝 */

  return (
    <div className={classes.StoreMainPage_Layout}>
      <div className={classes.HotProductSection}>
        <div className={classes.HotProductTitleArea}>
          <CommonPageTitle
            title={
              sortId === "rank"
                ? "인기상품"
                : location.state.sortCtgryName + " 인기상품"
            }
          />
        </div>
        {/* 인기상품, 카테고리별 조회 */}
        {sortId === "rank" ||
        sortId === "C01" ||
        sortId === "C02" ||
        sortId === "C03" ||
        sortId === "C04" ||
        sortId === "C05" ? (
          <ProductList products={list} departure={"store"} />
        ) : (
          /* 아무 라우터 값 없을 때 */
          <div>유효한요청이아닙니다</div>
        )}
        {/* 최근본상품별 조회 */}
      </div>
    </div>
  );
};

export default StoreSortPage;
