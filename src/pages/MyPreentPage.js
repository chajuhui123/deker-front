import MyPresentList from "../components/account/myPresentList";

const MyPresentPage = () => {
    const DUMMY_DATA = [
        {
            id : 1,
            sender : "차주희",
            message :"프로젝트 진행 중",
            product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
            product_brand:"시디즈",
            product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
            product_option:"블랙"
        },
        {
            id : 2,
            sender : "차주희",
            message :"프로젝트 진행 중",
            product_image :"https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/159719442642625646.jpg?gif=1&w=1280&h=1280&c=c",
            product_brand:"시디즈",
            product_name :"T20 TAB+ TNA200HF 메쉬의자 2types",
            product_option:"블랙"
        }
    ]
        
  return (
  <div>
   <MyPresentList presents = {DUMMY_DATA} />
  </div>);
};

export default MyPresentPage
