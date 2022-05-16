import { postApi } from "api/fetch-api";
import CommonPageTitle from "components/common/commPageTitle";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import ProductList from "./productList";
import classes from "./StoreSortPage.module.css";

const StoreSortPage = (props) => {
  // 처음 이동했을 때 페이지 최상단으로 보내기
  useEffect(() => {
    if (
      document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0
    ) {
      window.scrollTo(0, 0);
    }
  }, []);

  const dispatch = useDispatch();

  /* sortId: 라우터 경로
   * 인기상품: rank | 카테고리: 가구, 가전제품, 조명, 사무용품, 데코 | 최근본상품: */
  const { params } = props.match;
  const sortId = params.sortId;
  const { location } = props;
  const [ref, inView] = useInView();

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

  const fnRankCallback = useCallback(
    (res) => {
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
      }
    },
    [currentPageNo, lastPage, postApiRoute, totalCount]
  );

  /* 무한스크롤 체크 */
  useEffect(() => {
    if (!lastPage && inView) {
      setCurrentPageNo((prevState) => prevState + 1);
    }
  }, [inView, lastPage]);

  useEffect(() => {
    dispatch(
      postApi(
        postApiRoute,
        {
          currentPageNo: currentPageNo,
          categoryId: sortId,
        },
        fnRankCallback
      )
    );
  }, [currentPageNo, dispatch, fnRankCallback, postApiRoute, sortId]);

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
      </div>
      <div
        style={{
          width: "100%",
          height: "10px",
        }}
        ref={ref}
      ></div>
    </div>
  );
};

export default StoreSortPage;
