import MyUploadPicItem from "./myUploadPicItem";
import classes from "./myUploadPicList.module.css";

function MyUploadPicList(props) {
  return (
    <div className={classes.myUploadPicList}>
      <ul className={classes.myUploadPicList}>
        {props.muUploadPic?.length ? (
          props.muUploadPic.map((muUploadPic) => (
            <MyUploadPicItem
              key={muUploadPic.id}
              id={muUploadPic.id}
              pic_image={muUploadPic.pic_image}
            />
          ))
        ) : (
          <p>작성한 글이 없습니다.</p>
        )}
      </ul>
    </div>
  );
}

export default MyUploadPicList;
