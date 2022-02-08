import React, { useState, useRef, useCallback } from "react";
import classes from "./addPhotoFile.module.css";
import { fileApi } from "api/fetch-api";
import { useDispatch } from "react-redux";

function AddPhotoFile() {
  const dispatch = useDispatch();
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
    const formData = new FormData();
    formData.append("img", e.target.files[0]);
    dispatch(fileApi("nmb/reg/img", formData, fnCallback));
    // const config = {
    //   headers: {
    //     "Content-type": "multipart/form-data",
    //   },
    // };
    // axios.post("~~~", formData, config);
  };

  const fnCallback = (res) => {
    console.log("fnCallback :: ", res);
  };

  // 파일 삭제
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  return (
    <div className={classes.wrapper}>
      <p className={classes.title}>사진첨부(선택)</p>
      <p className={classes.description}>사진을 첨부해주세요. (최대 1장)</p>
      <div className={classes.imgDiv}>
        {fileImage && (
          <img alt="sample" src={fileImage} style={{ margin: "auto" }} />
        )}
      </div>
      <input
        className={classes.filebox}
        name="img"
        type="file"
        accept="image/*"
        onChange={saveFileImage}
      />
    </div>
  );
}

export default AddPhotoFile;
