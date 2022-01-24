import MyUploadPicItem from "./myUploadPicItem";
import classes from "./myUploadPicList.module.css";

function MyUploadPicList(props) {
  return (
    <div className={classes.myUploadPicList}>
      <ul className={classes.myUploadPicList}>
        {props.muUploadPic &&
          props.muUploadPic.map((muUploadPic) => (
            <MyUploadPicItem
              key={muUploadPic.id}
              id={muUploadPic.id}
              pic_image={muUploadPic.pic_image}
            />
          ))}
      </ul>
    </div>
  );
}

export default MyUploadPicList;
