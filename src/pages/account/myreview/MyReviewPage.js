import { postApi } from "api/fetch-api";
import MyReviewableList from "components/account/myreview/myReviewableList";
import MyReviewedList from "components/account/myreview/myReviewedList";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const MyReviewPage = () => {
  const dispatch = useDispatch();

  const [reviewableItems, setReviewableItems] = useState([]);
  const [reviewedItems, setReviewedItems] = useState([]);

  const fnReviewableItemsCallback = res => {
    if (!!res) {
      setReviewableItems(res?.data);
    }
  };

  const fnReviewedItemsCallback = res => {
    if (!!res) {
      setReviewedItems(res?.data);
    }
  };

  useEffect(() => {
    dispatch(
      postApi("mb/mkt/get/reviewable-items", {}, fnReviewableItemsCallback)
    );
    dispatch(postApi("mb/mkt/get/reviewed-items", {}, fnReviewedItemsCallback));
  }, [dispatch]);

  return (
    <div style={{ width: "750px", margin: "auto" }}>
      <h1>작성 가능한 리뷰</h1>
      <MyReviewableList reviewableItems={reviewableItems} />
      <h1 style={{ marginTop: "70px" }}>나의 리뷰</h1>
      <MyReviewedList reviewedItems={reviewedItems} />
    </div>
  );
};

export default MyReviewPage;
