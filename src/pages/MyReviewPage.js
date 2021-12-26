import MyReviewList from "../components/account/myReviewList";

const MyReviewPage = () => {
  const DUMMY_DATA_UNREVIEWED = [
    {
      id : 1,
      product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand:"시디즈",
      product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option:"블랙"
    },
    {
      id : 1,
      product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand:"시디즈",
      product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option:"블랙"
    },  
    ]
    
    const DUMMY_DATA_REVIEWED = [
      {
      id : 1,
      product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand:"시디즈",
      product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option:"블랙"
    },
    {
      id : 1,
      product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
      product_brand:"시디즈",
      product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
      product_option:"블랙"
    },  
    ]

        
  return (
  <div>
   <h1>작성 가능한 리뷰</h1>
   <MyReviewList reviews = {DUMMY_DATA_UNREVIEWED} />
   <h1>나의 리뷰</h1>
   <MyReviewList reviews = {DUMMY_DATA_REVIEWED} />
  </div>);
};

export default MyReviewPage
