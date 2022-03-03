import CommBtn from "components/common/commBtn";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MyUploadPicItem from "./myUploadPicItem";
import classes from "./myUploadPicList.module.css";

function MyUploadPicList(props) {
  const history = useHistory();

  const goWriteBtnHandler = () => {
    history.push("/community/write");
  };
  return (
    <div className={classes.Layout}>
      {props.muUploadPic?.length ? (
        <div className={classes.myUploadPicList}>
          <ul className={classes.myUploadPicList}>
            {props.muUploadPic.map((muUploadPic) => (
              <MyUploadPicItem
                key={muUploadPic.id}
                id={muUploadPic.id}
                pic_image={muUploadPic.pic_image}
              />
            ))}
          </ul>
        </div>
      ) : (
        <div className={classes.noUploadText}>
          <text>작성한 글이 없습니다</text>
          <div className={classes.goMoveBtn}>
            <CommBtn
              btnText="글 쓰러 가기"
              btnWidth="230px"
              btnHeight="50px"
              border="1px solid rgb(66, 66, 226)"
              bgColor="rgb(66, 66, 226)"
              radius="4px"
              txColor="rgb(245, 245, 245)"
              fontSize="23px"
              fnClick={goWriteBtnHandler}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MyUploadPicList;
