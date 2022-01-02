import React from "react";
import classes from "./addPhotoFile.module.css";

function AddPhotoFile() {
  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>사진첨부(선택)</p>
      <p className={classes.description}>사진을 첨부해주세요. (최대 1장)</p>
      <div className={classes.filebox}>
        <label for="addPhoto">사진첨부하기</label>
        <input id="addPhoto" type="file" />
      </div>
    </div>
  );
}

export default AddPhotoFile;
