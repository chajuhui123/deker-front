import MyPresentItem from "./myPresentItem";
import classes from "./myPresentList.module.css"

function MyPresentList(props) {
  return (
     <ul className = {classes.list}>
            {props.presents.map(present => <MyPresentItem
            key = {present.id}
            id = {present.id}
            sender= {present.sender}
            message= {present.message}
            product_image = {present.image}
            product_brand = {present.product_brand}
            product_name = {present.product_name}
            product_option ={present.product_option}
            />)}
        </ul>
  );
}

export default MyPresentList;
