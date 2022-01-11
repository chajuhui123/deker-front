import classes from "./myUploadPicItem.module.css";

function MyUploadPicItem(props) {
  return (
    <div className={classes.myUploadPicItem}>
      <img
        className={classes.pic_img}
        alt={props.pic_name}
        src={props.pic_image}
      />
    </div>
  );
}

export default MyUploadPicItem;
