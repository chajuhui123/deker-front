import React from "react";
import classes from "./box.module.css";
import ProductReviewItem from "./productReviewItem";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function ProductReviewBox({ setPageNo, productReviewsObj }) {
  const { totalCount, linkPagesArr, reviewsArr } = productReviewsObj;
  return (
    <div>
      <div className={classes.boxDiv}>
        <h1 className={classes.contentTitle}>리뷰 ({totalCount})</h1>
        <hr />
        <div>
          {reviewsArr?.map((review, reviewIndex) => {
            return <ProductReviewItem key={reviewIndex} review={review} />;
          })}
        </div>
        <div className={classes.paginationBox}>
          <MdKeyboardArrowLeft size={23} />
          {linkPagesArr?.map((pageNum, pageIndex) => {
            return (
              <div
                key={pageIndex}
                onClick={() => {
                  setPageNo(pageNum);
                }}
              >
                {pageNum}
              </div>
            );
          })}
          <MdKeyboardArrowRight size={23} />
        </div>
      </div>
    </div>
  );
}

export default ProductReviewBox;
