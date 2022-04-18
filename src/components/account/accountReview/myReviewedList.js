import MyReviewItem from "./myReviewItem";
import { BASE_URL } from "module/common-module";

function MyReviewedList({ reviewedItems }) {
  return (
    <>
      {!!reviewedItems.length ? (
        <ul>
          {reviewedItems.map((review, index) => (
            <MyReviewItem
              key={index}
              id={index}
              mktProductId={review.mktProductId}
              productImage={`${BASE_URL}${review.productImg}`}
              productName={review.productName}
              productOption={`${review.option1Name}:${review.option1DataName} / ${review.option2Name}:${review.option2DataName}`}
              productPrice={review.productTotalPrice}
              isReviewAble={false}
            />
          ))}
        </ul>
      ) : (
        <p>리뷰 목록이 존재하지 않습니다.</p>
      )}
    </>
  );
}

export default MyReviewedList;
