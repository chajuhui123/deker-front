import classes from "./myPresentItem.module.css"

function MyPresentItem(props) {
  return (
    <div className = {classes.present_box}>
        <p className = {classes.sender}>보낸 사람 : {props.sender}</p>
        <div className = {classes.present_info_box}>
            <img className = {classes.present_img} alt={props.product_name} src={props.product_image} />
            <div className = {classes.present_info}>
                <p>{props.product_brand}</p>
                <p>{props.product_name}</p>
                <p>{props.product_option}</p>
            </div>
            <div className = {classes.present_btn}>
                <button>웅</button>
                <button>웅</button>
            </div>
        </div>
        <div className = {classes.message}><p>{props.message}</p></div>
    </div>
  );
}

export default MyPresentItem;
