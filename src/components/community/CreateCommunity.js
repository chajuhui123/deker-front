import React, { useState } from "react";
import classes from "./CreateCommunity.module.css";
import { postApi, fileApi } from "api/fetch-api";
import { useDispatch } from "react-redux";
import CommInput from "components/common/commInput";
import CommSelect from "components/common/CommSelect";
import { useEffect } from "react";
import CommBtn from "components/common/commBtn";
import ImageArea from "./ImageArea";
import UserTagForm from "components/common/userTagForm";

// TODO : 이미지

function CreateCommunity(props) {
  const dispatch = useDispatch();
  const [jobArray, setJobArray] = useState([]); // 직업코드
  const [material, setMaterial] = useState([]); // 재질코드
  const [moodArray, setMoodArray] = useState([]); // 분위기코드
  const [jobCode, setJobCode] = useState(""); // 선택된 직업코드
  const [materialCode, setMaterialCode] = useState(""); // 선택된 재질코드
  const [moodCode, setMoodCOde] = useState(""); // 선택된 분위기 코드
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  const [imageFile, setImageFile] = useState(null); // 이미지 파일
  // 직업코드조회콜백
  const fnJobCallback = (res) => {
    setJobArray(res.data);
  };
  // 재질코드조회콜백
  const fnMaterialCallback = (res) => {
    setMaterial(res.data);
  };
  // 분위기코드조회콜백
  const fnMoodCallback = (res) => {
    setMoodArray(res.data);
  };

  useEffect(() => {
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "JOB",
        },
        fnJobCallback
      )
    );
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "DKP",
        },
        fnMaterialCallback
      )
    );
    dispatch(
      postApi(
        "nmb/cmm/get/code",
        {
          codeId: "MOOD",
        },
        fnMoodCallback
      )
    );
  }, [dispatch]);
  // 직업코드선택핸들러
  const jobChangeHandler = (e) => {
    setJobCode(e.value);
  };
  // 재질코드선택핸들러
  const materialChangeHandler = (e) => {
    setMaterialCode(e.value);
  };
  // 분위기코드선택핸들러
  const moodChangeHandler = (e) => {
    setMoodCOde(e.value);
  };
  // 제목핸들러
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  // 내용핸들러
  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  // 저장후콜백메소드
  const fnCallback = (res) => {
    console.log("fnCallback :: ", res);
    // TODO : Main page로 이동
  };
  // 저장메소드
  const submit = () => {
    // TODO : 데이터 전송 어떤 방식으로 해야하는지 백이랑 협의 해야함
    const formData = new FormData();
    const dataOjb = {
      title: title,
      content: content,
      jobCode: jobCode,
      materialCode: materialCode,
      moodCode: moodCode,
      imageFile: imageFile,
    };
    formData.append("uploadImg", imageFile); // 게시글 이미지
    formData.append("json", dataOjb); // 게시글 제목, 내용
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    dispatch(fileApi("이미지url", formData, fnCallback));
  };

  return (
    <div className={classes.page}>
      <div className={classes.selectArea}>
        <CommSelect
          title="직업"
          options={jobArray}
          valueOf={jobCode}
          onChange={jobChangeHandler}
        />
        <CommSelect
          title="책상재질"
          options={material}
          valueOf={materialCode}
          onChange={materialChangeHandler}
        />
        <CommSelect
          title="분위기"
          options={moodArray}
          valueOf={moodCode}
          onChange={moodChangeHandler}
        />
      </div>
      <div className={classes.communityArea}>
        <div className={classes.leftArea}>
          <ImageArea setImageFile={setImageFile} margin="0 0 30px 0" />
          <UserTagForm />
        </div>
        <div className={classes.textArea}>
          <div className={classes.titleArea}>
            <CommInput value={title} onChange={titleHandler} />
          </div>
          <div className={classes.contArea}>
            <textarea value={content} onChange={contentHandler}></textarea>
          </div>
          <CommBtn btnText="저장" btnMargin="30px 0 0 0" fnClick={submit} />
        </div>
      </div>
    </div>
  );
}

export default CreateCommunity;
