import classes from "./myPresentItem.module.css"

function MyPresentItem(props) {
  return (
    <div className = {classes.present_box}>
        <p className = {classes.sender}>보낸 사람 : {props.sender}</p>
        <div className = {classes.present_info_box}>
            <img className = {classes.present_img} alt={props.product_name} src={props.product_image} />
            <div className = {classes.width_box}>
              <div className = {classes.present_info}>
                  <p style={{color:'gray'}}>{props.product_brand}</p>
                  <p>{props.product_name}</p>
                  <p style={{color:'gray'}}>{props.product_option}</p>
              </div>
              <div className = {classes.present_btn}>
                  <button className = {classes.input_btn}>배송지 입력</button>
                  <button className = {classes.ban_btn}>거절</button>
              </div>
            </div>
        </div>
        {/* 메시지는 공백포함 60자 이하로 제한해야할 것 같음 */}
        <div className = {classes.message}><p>{props.message}</p></div>
    </div>
  );
}

export default MyPresentItem;
